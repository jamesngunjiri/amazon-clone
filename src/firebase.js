// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGu7ujJoq-IyRlvFcYeBT_vBgo9AQsmX4",
  authDomain: "androideatit-a76d4.firebaseapp.com",
  databaseURL: "https://androideatit-a76d4.firebaseio.com",
  projectId: "androideatit-a76d4",
  storageBucket: "androideatit-a76d4.appspot.com",
  messagingSenderId: "1065078056608",
  appId: "1:1065078056608:web:33f8c3d956512c2fc38bc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
