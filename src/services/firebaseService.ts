import firebase from 'firebase/app';
import 'firebase/storage';

const init = () => {
  const firebaseConfig = {
    apiKey: process.env.FIR_API_KEY,
    authDomain: process.env.FIR_AUTH_DOMAIN,
    projectId: process.env.FIR_PROJECT_ID,
    storageBucket: process.env.FIR_STORAGE_BUCKET,
    messagingSender: process.env.FIR_SENDER_ID,
    appId: process.env.FIR_APP_ID,
  };
  firebase.initializeApp(firebaseConfig);
};

export default init;
