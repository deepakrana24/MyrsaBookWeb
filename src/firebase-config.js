import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjfbi0wJKESviqPTH4VSMOJsSUjD_BDZE",
  authDomain: "myrsabooks.firebaseapp.com",
  databaseURL: "https://myrsabooks-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myrsabooks",
  storageBucket: "myrsabooks.appspot.com",
  messagingSenderId: "991889269476",
  appId: "1:991889269476:web:f0baa3b248804801f0c2f1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
