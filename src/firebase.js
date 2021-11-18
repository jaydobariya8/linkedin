import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB1Y7oyzujNiFC10intRdlFHFiBEf7Qig8",
    authDomain: "linkedin-clone-jay.firebaseapp.com",
    projectId: "linkedin-clone-jay",
    storageBucket: "linkedin-clone-jay.appspot.com",
    messagingSenderId: "788106221995",
    appId: "1:788106221995:web:183eac77c0aa3da0341aee",
    measurementId: "G-V5CXHYN1RB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
