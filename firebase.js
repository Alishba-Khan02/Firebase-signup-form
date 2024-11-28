import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup,signOut, onAuthStateChanged, updateProfile, sendEmailVerification, updatePassword } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPX1H8UyLAhnOz0Ewba9lAM6vrLck35HE",
    authDomain: "signin-signup-28da8.firebaseapp.com",
    projectId: "signin-signup-28da8",
    storageBucket: "signin-signup-28da8.firebasestorage.app",
    messagingSenderId: "980072637718",
    appId: "1:980072637718:web:d7b61a7da50f9444891c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export{ getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,app,GoogleAuthProvider ,signInWithPopup,signOut, onAuthStateChanged, updateProfile, sendEmailVerification, updatePassword }