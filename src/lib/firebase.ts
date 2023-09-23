// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOE_LzWCGnNfXH__Cx4pgMJ6MBimJVeL8",
  authDomain: "kinetic-primer-367611.firebaseapp.com",
  projectId: "kinetic-primer-367611",
  storageBucket: "kinetic-primer-367611.appspot.com",
  messagingSenderId: "357588895133",
  appId: "1:357588895133:web:045e8775e3bb86179ddb74",
  measurementId: "G-R7VSWJRRW4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export const user = auth.currentUser;
