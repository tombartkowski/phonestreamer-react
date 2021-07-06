import { useContext } from 'react';
import useSWR from 'swr';
import { fetcher } from '../api/fetcher';
import { userContext } from '../contexts/userContext';

export const useUser = () => {
  const user = useContext(userContext);
  const { data, error } = useSWR(
    () => (user?.uid ? `/users/me` : null),
    (path: string) => fetcher(path, { isAuthorizationRequired: true })
  );
  return [data, error];
};
