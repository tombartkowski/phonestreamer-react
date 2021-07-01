import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import dotenv from 'dotenv';
import configureFirebase from './services/firebaseService';

dotenv.config();
configureFirebase();

render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
