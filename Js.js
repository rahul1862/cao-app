// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJHltJPzB2qftaWzdoupVn5NMWuzAWhBQ",
  authDomain: "cao-application.firebaseapp.com",
  databaseURL: "https://cao-application-default-rtdb.firebaseio.com",
  projectId: "cao-application",
  storageBucket: "cao-application.appspot.com",
  messagingSenderId: "569723913598",
  appId: "1:569723913598:web:f7c433d9bbc2dc32ac1f2f",
  measurementId: "G-8FXDXFEDSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
