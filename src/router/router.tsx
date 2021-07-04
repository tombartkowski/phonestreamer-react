import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { UploadApp } from '../features/uploadApp/components/UploadApp';
import { Signup } from '../features/auth/signup/components/Signup';
import { SignIn } from '../features/auth/signin/components/SignIn';

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

        <Route path="/upload" component={UploadApp} />
      </Switch>
    </BrowserRouter>
  );
};
