import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { UploadApp } from '../features/uploadApp/components/UploadApp';
import { Signup } from '../features/auth/components/Signup';
import { SignIn } from '../features/auth/components/SignIn';
import { ResetPassword } from '../features/auth/components/ResetPassword';
import { Dashboard } from '../features/dashboard/Dashboard';
import { AppContainer } from '../components/AppContainer';
import { ProtectedRoute } from './ProtectedRoute';
import { Account } from '../features/account/Account';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route path="/sign-up" component={Signup} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/reset-password" component={ResetPassword} />
        <ProtectedRoute path="/dashboard">
          <AppContainer>
            <Dashboard />
          </AppContainer>
        </ProtectedRoute>
        <ProtectedRoute path="/upload">
          <AppContainer>
            <UploadApp />
          </AppContainer>
        </ProtectedRoute>
        <Redirect exact from="/account" to="/account/settings" />
        <ProtectedRoute path="/account/*">
          <AppContainer>
            <Account />
          </AppContainer>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};
