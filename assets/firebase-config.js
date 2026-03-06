// assets/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDocs,
    getDoc,
    serverTimestamp,
    deleteField,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCslNItf7fFWkscBWUwIsIBT1chwH_CsTc",
    authDomain: "trackmyattendance-ce80e.firebaseapp.com",
    databaseURL: "https://trackmyattendance-ce80e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "trackmyattendance-ce80e",
    storageBucket: "trackmyattendance-ce80e.firebasestorage.app",
    messagingSenderId: "790897092967",
    appId: "1:790897092967:web:51d312386c983d96b327c2",
    measurementId: "G-DSZR18NLWN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseAPI = {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile,
    collection,
    doc,
    setDoc,
    getDocs,
    getDoc,
    serverTimestamp,
    deleteField,
    updateDoc,
    deleteDoc
};
