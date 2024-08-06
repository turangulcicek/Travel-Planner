// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOjJQ3_CWv2iE0Ql2kYAssDfnAM75BQ5M",
  authDomain: "testapp-bb8e6.firebaseapp.com",
  projectId: "testapp-bb8e6",
  storageBucket: "testapp-bb8e6.appspot.com",
  messagingSenderId: "450789092616",
  appId: "1:450789092616:web:05e77caf1451c879bad0bd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
