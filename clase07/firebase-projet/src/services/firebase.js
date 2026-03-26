import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4KYjG7BIz8C-sQJFLSo3TF5myzR9WuV0",
  authDomain: "curso-89715.firebaseapp.com",
  projectId: "curso-89715",
  storageBucket: "curso-89715.firebasestorage.app",
  messagingSenderId: "380298810085",
  appId: "1:380298810085:web:e5d797baf5afea2d0c7a0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
