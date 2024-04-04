// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbV8A3bbZIbHrLlMX5MJhR1NS9LO5EQ4U",
    authDomain: "e-commerce-app-8ee9f.firebaseapp.com",
    projectId: "e-commerce-app-8ee9f",
    storageBucket: "e-commerce-app-8ee9f.appspot.com",
    messagingSenderId: "976374469244",
    appId: "1:976374469244:web:968e730b4e86148c802ff9"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;