import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  APIKEY,
  AUTHDOMAIN,
  PROJECTID
} from './ApiKeys'

const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: "seventen-ebed3.appspot.com",
    messagingSenderId: "1046159541252",
    appId: "1:1046159541252:web:1cf63889c790fada93a151",
    measurementId: "G-7VXR6Q2KVS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const fireDB = getFirestore(app);
  const auth = getAuth(app)
  export {fireDB,auth } ;