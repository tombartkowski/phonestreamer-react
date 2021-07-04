import axios from 'axios';
import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthErrorCode,
  isSilentError,
  mapCodeToUserMessage,
} from '../../consts';
import { CentralUrl } from '../../../../api/consts';

type SignupMethod = 'email' | 'github';
type UseSignupReturn = [(body: any) => void | Promise<void>, boolean];

export const useSignup = (
  method: SignupMethod,
  callback: (data?: any, error?: Error) => void
): UseSignupReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (body?: any) => {
    setIsLoading(true);
    try {
      let userCredential: firebase.auth.UserCredential;
      if (method === 'email') {
        userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(body.email, body.password);
      } else {
        const provider = new firebase.auth.GithubAuthProvider();
        userCredential = await firebase.auth().signInWithPopup(provider);
      }

      const response = await axios.post(CentralUrl + '/users', {
        firebaseUid: userCredential.user?.uid,
        email: userCredential.user?.email,
        method: method,
        source: 'signup',
      });
      callback(response.data);
    } catch (error) {
      const message = error?.response?.data?.error?.message;
      const errorCode = error?.code + '';
      let responseError: Error | undefined = undefined;
      if (message) {
        responseError = new Error(message);
      } else if (Object.values<string>(FirebaseAuthErrorCode).includes(errorCode)) {
        if (!isSilentError(errorCode)) {
          responseError = new Error(
            mapCodeToUserMessage(errorCode) || error.message
          );
        }
      } else if (error.request) {
        responseError = new Error(
          "Can't reach our servers. Not sure if it's on us, or you've got a bad connection."
        );
      } else {
        responseError = new Error(
          "An identified error has occured. Best to try again and hope it won't repeat."
        );
      }
      callback(null, responseError);
    } finally {
      setIsLoading(false);
    }
  };

  return [signup, isLoading];
};
