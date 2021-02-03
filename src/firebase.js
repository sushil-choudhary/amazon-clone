import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAtx30JrT8LcPE8uQEi-d696dPzgW9VUo8",
  authDomain: "fir-60310.firebaseapp.com",
  projectId: "fir-60310",
  storageBucket: "fir-60310.appspot.com",
  messagingSenderId: "555535653228",
  appId: "1:555535653228:web:0370fbc1dfa4eae2ed3b49",
  measurementId: "G-SQW6Q0EGKF"
};


const provider = new firebase.auth.GoogleAuthProvider();

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, provider };
