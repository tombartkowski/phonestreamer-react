import axios from 'axios';
import { useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

type UseSignupReturn = [(body: any) => void | Promise<void>, boolean];

export const useSignup = (
  callback: (data?: any, error?: Error) => void
): UseSignupReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (body: any) => {
    setIsLoading(true);
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(body.email, body.password);
      const token = await userCredential.user?.getIdToken(false);
      console.log(token);

      const response = await axios.post(
        'http://localhost:3030/users',
        { firebaseUid: userCredential.user?.uid },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      callback(response.data);
    } catch (error) {
      callback(null, error);
    } finally {
      setIsLoading(false);
    }
  };

  return [signup, isLoading];
};
