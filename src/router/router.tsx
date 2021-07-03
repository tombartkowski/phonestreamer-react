import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UploadApp } from '../features/uploadApp/components/UploadApp';
import { Signup } from '../features/auth/Signup';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/upload" component={UploadApp} />
      </Switch>
    </BrowserRouter>
  );
};
