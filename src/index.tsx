import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import firebase from 'firebase/app';
import 'firebase/auth';
import dotenv from 'dotenv';

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
  firebase.auth().useEmulator('http://localhost:9099');
}

render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
