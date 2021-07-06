import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export const useAuthListener = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setIsAuthorized(user !== null);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [setIsLoading, setIsAuthorized]);

  return { isAuthorized, isLoading };
};
