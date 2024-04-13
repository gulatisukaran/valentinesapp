// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "your_firebase_api_key",
    authDomain: "valentine-cbe23.firebaseapp.com",
    projectId: "valentine-cbe23",
    storageBucket: "valentine-cbe23.appspot.com",
    messagingSenderId: "565513095623",
    appId: "1:565513095623:web:30a5006c53bfea382031e2",
    measurementId: "G-L8SMQTXTMP"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
