import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnRqiZmFzB_UqHZ3tCC8G8I_DdQsNwr1g",
  authDomain: "roayur-2350c.firebaseapp.com",
  projectId: "roayur-2350c",
  storageBucket: "roayur-2350c.appspot.com",
  messagingSenderId: "427102434156",
  appId: "1:427102434156:web:7aa4e35f9b04bd460b7949",
  measurementId: "G-67KJJ0DQL8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);