import useSWR from 'swr';
import { fetcher } from '../../api/fetcher';
import { App } from '../../entities/app';
import { useUser } from '../../hooks/useUser';

type IsLoading = boolean;
type UseAppsResponse = [App[] | undefined, Error | undefined, IsLoading];

export const useApps = (): UseAppsResponse => {
  const [user, userError] = useUser();
  const { data: apps, error: appsError } = useSWR(
    () => (user && user.id ? `/users/${user.id}/apps` : null),
    (path: string) => fetcher(path, { isAuthorizationRequired: true })
  );

  const isLoading = (!!user && !!userError) || (!!!apps && !!!appsError);

  return [apps, userError || appsError, isLoading];
};
