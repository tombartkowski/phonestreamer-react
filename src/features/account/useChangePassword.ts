import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { mapCodeToUserMessage } from '../auth/consts';

type SubmitHandler = (formData: any) => void;

export const useChangePassword = (
  callback: (success: boolean, errorMessage: string | null) => void
): [SubmitHandler, boolean] => {
  const [user] = useUser();
  const [isLoading, setIsLoading] = useState(false);

  return [
    (formData: any) => {
      setIsLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, formData.oldPassword)
        .then(userCredential => {
          return userCredential.user?.updatePassword(formData.newPassword);
        })
        .then(() => {
          callback(true, null);
        })
        .catch(error => {
          const errorCode = error.code;
          if (errorCode == 'auth/wrong-password') {
            callback(false, 'Plase make sure you entered the correct old password.');
          } else {
            callback(false, mapCodeToUserMessage(errorCode) || error.message);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    isLoading,
  ];
};
