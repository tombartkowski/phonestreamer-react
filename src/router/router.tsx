import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { UploadApp } from '../features/uploadApp/components/UploadApp';
import { Signup } from '../features/auth/components/Signup';
import { SignIn } from '../features/auth/components/SignIn';
import { ResetPassword } from '../features/auth/components/ResetPassword';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/sign-up" />
        <Route path="/sign-up">
          <Signup />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/upload" component={UploadApp} />
      </Switch>
    </BrowserRouter>
  );
};
