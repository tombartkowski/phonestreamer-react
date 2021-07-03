import { Router } from './router/router';
import dotenv from 'dotenv';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import path from 'path';

const App = () => {
  useEffect(() => {
    dotenv.config();
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIR_API_KEY,
        authDomain: process.env.REACT_APP_FIR_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIR_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIR_STORAGE_BUCKET,
        messagingSender: process.env.REACT_APP_FIR_SENDER_ID,
        appId: process.env.REACT_APP_FIR_APP_ID,
      };

      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return <Router />;
};

export default App;
