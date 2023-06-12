import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDWoZtCzGsKhL-wfZpFQaGxmRL5xNWF2X8",
  authDomain: "firebasmessageapp2.firebaseapp.com",
  projectId: "firebasmessageapp2",
  storageBucket: "firebasmessageapp2.appspot.com",
  messagingSenderId: "81286008004",
  appId: "1:81286008004:web:3bd60b0bc8ff7d900a8d91",
  measurementId: "G-9C8SYKET1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ; 
export const db = getFirestore(app); 