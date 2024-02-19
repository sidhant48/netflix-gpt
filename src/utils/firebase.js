// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlKnh16F76EN5PA4TqO-Oo1Ksl_if1R4Q",
  authDomain: "netflixgpt-86519.firebaseapp.com",
  projectId: "netflixgpt-86519",
  storageBucket: "netflixgpt-86519.appspot.com",
  messagingSenderId: "630957615905",
  appId: "1:630957615905:web:eb8b521eb7d6be2fc16c60",
  measurementId: "G-BH23FR245Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
