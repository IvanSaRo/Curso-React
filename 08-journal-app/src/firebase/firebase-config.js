
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
 
 
const firebaseConfig = {
    apiKey: "AIzaSyBrQmDl6RoEMOJJPGgex2kmWoYyJcft4Qo",
    authDomain: "react-journal-app-a9469.firebaseapp.com",
    projectId: "react-journal-app-a9469",
    storageBucket: "react-journal-app-a9469.appspot.com",
    messagingSenderId: "91317540328",
    appId: "1:91317540328:web:9fba5e575f28d87771005d"
};
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export {
    db,
    googleAuthProvider
};
