import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQjs3J3xg5F7PWxTWckHfzoyYdoUUu4AQ",
    authDomain: "abcd-2c1be.firebaseapp.com",
    databaseURL: "https://abcd-2c1be-default-rtdb.firebaseio.com",
    projectId: "abcd-2c1be",
    storageBucket: "abcd-2c1be.firebasestorage.app",
    messagingSenderId: "489164834293",
    appId: "1:489164834293:web:df9f705ec3f8a2d4f7ccbc",
    measurementId: "G-G22D2Y1ZRY"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };