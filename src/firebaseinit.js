// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvsj2G-7YpUTEY_84ZdrznZcBeAO7HRjY",
  authDomain: "auth-moha-milon-4a95f.firebaseapp.com",
  projectId: "auth-moha-milon-4a95f",
  storageBucket: "auth-moha-milon-4a95f.firebasestorage.app",
  messagingSenderId: "482608466646",
  appId: "1:482608466646:web:712501dbfd9a6d2b6e5777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);