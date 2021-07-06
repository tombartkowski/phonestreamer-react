import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthListener } from '../hooks/useAuthListener';

export const ProtectedRoute: FC<RouteProps> = ({ children, ...props }) => {
  const { isAuthorized, isLoading } = useAuthListener();
  if (isLoading) {
    return <></>;
  }
  return (
    <Route
      {...props}
      render={() => (isAuthorized ? <>{children}</> : <Redirect to="/sign-up" />)}
    />
  );
};
