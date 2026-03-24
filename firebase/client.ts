// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_5BwfNM0QCqZNTvN5c2BGajhd_nbEfKg",
  authDomain: "prepwise-fe268.firebaseapp.com",
  projectId: "prepwise-fe268",
  storageBucket: "prepwise-fe268.firebasestorage.app",
  messagingSenderId: "494416998939",
  appId: "1:494416998939:web:06f87f2dbe3dbc15ddbebe",
  measurementId: "G-JS6PS3G1YC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);