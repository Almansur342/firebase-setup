// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0nfs3ruhiwXVqk0POvxqEqFkjSVOjP6s",
  authDomain: "fir-auth-60204.firebaseapp.com",
  projectId: "fir-auth-60204",
  storageBucket: "fir-auth-60204.appspot.com",
  messagingSenderId: "133146138441",
  appId: "1:133146138441:web:906ce1fcf44779cbc6ac98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;