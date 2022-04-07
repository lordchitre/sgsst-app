import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseApiKey = import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY;
const firebaseAppId = import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID;

const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "bdlaudiaz.firebaseapp.com",
    projectId: "bdlaudiaz",
    storageBucket: "bdlaudiaz.appspot.com",
    messagingSenderId: "297204494972",
    appId: firebaseAppId,
    measurementId: "G-GY02FP08DC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

