// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwMfnvBfnOtUKW7YRNYRZTnQvzxIhjhdY",
  authDomain: "brand-shop-mern.firebaseapp.com",
  projectId: "brand-shop-mern",
  storageBucket: "brand-shop-mern.appspot.com",
  messagingSenderId: "279218448218",
  appId: "1:279218448218:web:de3cec02b83d415d3ef563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;