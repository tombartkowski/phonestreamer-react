import { Router } from './router/router';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { User, userContext } from './contexts/userContext';
import { LoadingScreen } from './components/LoadingScreen';

const App = () => {
  const [user, setUser] = useState<User>(undefined);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [setUser]);

  if (user === undefined) {
    return <LoadingScreen />;
  }

  return (
    <userContext.Provider value={user}>
      <Router />
    </userContext.Provider>
  );
};

export default App;
