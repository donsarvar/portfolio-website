import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVLQJ1vnhd_RRr8AB0C1Od7OAvv99WyLQ",
  authDomain: "sarvarsalimov.firebaseapp.com",
  projectId: "sarvarsalimov",
  storageBucket: "sarvarsalimov.firebasestorage.app",
  messagingSenderId: "12178976959",
  appId: "1:12178976959:web:9db960ca6bbb425343d60a",
  measurementId: "G-7JJ570ZZJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
