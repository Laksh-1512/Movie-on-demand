// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHBstwaOR52NDxn11SGmetAbGd3h2C4vI",
  authDomain: "netflix-2-0-aefd0.firebaseapp.com",
  projectId: "netflix-2-0-aefd0",
  storageBucket: "netflix-2-0-aefd0.appspot.com",
  messagingSenderId: "279054025281",
  appId: "1:279054025281:web:e961ae225c1aec06337cc0",
  measurementId: "G-05TK4GRX8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
//https://netflix-2-0-aefd0.web.app