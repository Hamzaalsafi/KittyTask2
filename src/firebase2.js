import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDpibbohgF-9aoUymLOQIJSKrDnYqr7ThU",
  authDomain: "kittytask.firebaseapp.com",
  projectId: "kittytask",
  storageBucket: "kittytask.firebasestorage.app",
  messagingSenderId: "731649481968",
  appId: "1:731649481968:web:373ca9c61500eb2c5df635",
  measurementId: "G-19NGHN1W0S"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);  
const db = getFirestore(app);     

export { db };
