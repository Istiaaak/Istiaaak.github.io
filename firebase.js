// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHTMYdLdhyGhMtLPnAlS0NIOZn0Ptuv3A",
  authDomain: "haks-23.firebaseapp.com",
  projectId: "haks-23",
  storageBucket: "haks-23.appspot.com",
  messagingSenderId: "990081350842",
  appId: "1:990081350842:web:ee8a31de61ac6d37ebd683",
  measurementId: "G-9W2DSSGGLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app