// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK3NpujwgI6_roFlIa0t3cDi8A0ujUDwM",
  authDomain: "taller-react2.firebaseapp.com",
  projectId: "taller-react2",
  storageBucket: "taller-react2.appspot.com",
  messagingSenderId: "46436130038",
  appId: "1:46436130038:web:409f1ccf03afeb0a47e0d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}