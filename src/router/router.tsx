import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { UploadApp } from '../features/uploadApp/components/UploadApp';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={UploadApp} />
      </Switch>
    </BrowserRouter>
  );
};
