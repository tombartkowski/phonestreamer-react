import axios from 'axios';
import firebase from 'firebase';
import { CentralUrl } from './consts';

type FetcherOptions = {
  isAuthorizationRequired?: boolean;
};

export const fetcher = async (path: string, options?: FetcherOptions) => {
  if (options?.isAuthorizationRequired) {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      return Promise.reject(
        new Error(
          'Attempting to access sensitive data while not logged in. Try to log out and log back in.'
        )
      );
    }
    const authToken = await currentUser.getIdToken();
    const response = await axios.get(CentralUrl + path, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return response.data;
  }

  const response = await axios.get(CentralUrl + path);
  return response.data;
};
