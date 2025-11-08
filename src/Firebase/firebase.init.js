// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGE3a2xWgLVfrskfTEEGITEAqGa5dvLYI",
  authDomain: "ecocart-client.firebaseapp.com",
  projectId: "ecocart-client",
  storageBucket: "ecocart-client.firebasestorage.app",
  messagingSenderId: "184770240954",
  appId: "1:184770240954:web:baf3857e4d2d4ad1ed3d83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);