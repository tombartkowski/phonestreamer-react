import axios from 'axios';
import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthErrorCode,
  isSilentError,
  mapCodeToUserMessage,
} from '../consts';
import { CentralUrl } from '../../../api/consts';

type AuthMethod = 'email' | 'github';
type AuthAction = 'signin' | 'signup' | 'reset-password';
type AuthResponse = (body: any) => void | Promise<void>;
type IsLoading = boolean;
type AuthCallback = (data?: any, error?: Error) => void;
type UserCredential = firebase.auth.UserCredential;
type UseSignupReturn = [AuthResponse, IsLoading];

const handleAuthError = (
  error: any,
  authAction: AuthAction,
  callback: AuthCallback,
  email?: string
) => {
  const message = error?.response?.data?.error?.message;
  const errorCode = error?.code + '';
  let responseError: Error | undefined = undefined;
  if (message) {
    responseError = new Error(message);
  } else if (Object.values<string>(FirebaseAuthErrorCode).includes(errorCode)) {
    if (authAction === 'reset-password') {
      callback(email, undefined);
      return;
    } else if (!isSilentError(errorCode)) {
      responseError = new Error(mapCodeToUserMessage(errorCode) || error.message);
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
};

const sendUserToServer = async (
  firebaseUser: firebase.User | null,
  authAction: AuthAction,
  method: AuthMethod
) => {
  const response = await axios.post(CentralUrl + '/users', {
    firebaseUid: firebaseUser?.uid,
    email: firebaseUser?.email,
    source: authAction,
    method: method,
  });
  return response.data;
};

export const useAuthAction = (
  authAction: AuthAction = 'signup',
  method: AuthMethod,
  callback: AuthCallback
): UseSignupReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (body?: any) => {
    setIsLoading(true);
    try {
      if (authAction === 'signin' || authAction === 'signup') {
        const userCredential = (await (method === 'email'
          ? authAction === 'signin'
            ? firebase.auth().signInWithEmailAndPassword(body.email, body.password)
            : firebase
                .auth()
                .createUserWithEmailAndPassword(body.email, body.password)
          : firebase
              .auth()
              .signInWithPopup(
                new firebase.auth.GithubAuthProvider()
              ))) as UserCredential;
        const user = await sendUserToServer(userCredential.user, authAction, method);
        callback(user);
      } else {
        await firebase.auth().sendPasswordResetEmail(body.email);
        callback(body.email, undefined);
      }
    } catch (error) {
      handleAuthError(error, authAction, callback, body.email);
    } finally {
      setIsLoading(false);
    }
  };
  return [signup, isLoading];
};
