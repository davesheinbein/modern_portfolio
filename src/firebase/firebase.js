// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVmELqnODZOuCWmzVWf-w237QhMgNwPfo",
  authDomain: "davidsheinbeinengineer.firebaseapp.com",
  projectId: "davidsheinbeinengineer",
  storageBucket: "davidsheinbeinengineer.appspot.com",
  messagingSenderId: "688764979086",
  appId: "1:688764979086:web:4b239ee1e200bcf29446df",
  measurementId: "G-N3YN6E7R0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
