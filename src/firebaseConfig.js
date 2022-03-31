import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDI2uxQT9yiU65eUioh9J8oyxt_Dicu4Vo",
    authDomain: "bdlaudiaz.firebaseapp.com",
    projectId: "bdlaudiaz",
    storageBucket: "bdlaudiaz.appspot.com",
    messagingSenderId: "297204494972",
    appId: "1:297204494972:web:84b0dd23db8ba6c7e10ff9",
    measurementId: "G-GY02FP08DC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

