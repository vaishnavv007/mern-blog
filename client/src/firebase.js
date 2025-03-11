// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-37c63.firebaseapp.com",
  projectId: "mern-blog-37c63",
  storageBucket: "mern-blog-37c63.firebasestorage.app",
  messagingSenderId: "104837895630",
  appId: "1:104837895630:web:01040f5aedbcaf276ec79f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);