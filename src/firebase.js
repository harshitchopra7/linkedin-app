// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKy1P8AEQK8magelWFIqR-I5p6BottNto",
  authDomain: "linkedin-auth-1039f.firebaseapp.com",
  projectId: "linkedin-auth-1039f",
  storageBucket: "linkedin-auth-1039f.firebasestorage.app",
  messagingSenderId: "449505405261",
  appId: "1:449505405261:web:567690f3e38c751f38ef04",
  measurementId: "G-NHB4V0LKVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export { provider };
