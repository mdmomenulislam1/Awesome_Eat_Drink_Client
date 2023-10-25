// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArRUus-zCWPb_DjEU2qcvmjO3qanpFQBs",
  authDomain: "assignment--10-d5591.firebaseapp.com",
  projectId: "assignment--10-d5591",
  storageBucket: "assignment--10-d5591.appspot.com",
  messagingSenderId: "548134991459",
  appId: "1:548134991459:web:b66f6665ea75292043aa56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app.auth;

export default auth;