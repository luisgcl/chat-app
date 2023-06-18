// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkByuCy_VCb6aeZzT8hNC92GEx4eLFmec",
  authDomain: "chat-app-3d4ba.firebaseapp.com",
  projectId: "chat-app-3d4ba",
  storageBucket: "chat-app-3d4ba.appspot.com",
  messagingSenderId: "927938378632",
  appId: "1:927938378632:web:9c8958065962748c68983d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
