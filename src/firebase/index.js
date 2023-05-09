// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv72WcR7O3hDkjL5Ogcr1L-WV6RYx235o",
  authDomain: "fir-practice-d38ef.firebaseapp.com",
  projectId: "fir-practice-d38ef",
  storageBucket: "fir-practice-d38ef.appspot.com",
  messagingSenderId: "259236433070",
  appId: "1:259236433070:web:2a03e2105a2b8149b8313f",
  measurementId: "G-4D8QSS1HBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };