 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOXGdZUnBLOXZhlO325SS6L0EgDf2iIGk",
  authDomain: "doorbell-2f8f3.firebaseapp.com",
  projectId: "doorbell-2f8f3",
  storageBucket: "doorbell-2f8f3.appspot.com",
  messagingSenderId: "827735697668",
  appId: "1:827735697668:web:fd296f7a8419f2842c0851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();