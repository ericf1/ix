// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsdR-2zyYBK9YMBKzFuVraioO1ndNmWlI",
  authDomain: "recipes-40c09.firebaseapp.com",
  projectId: "recipes-40c09",
  storageBucket: "recipes-40c09.appspot.com",
  messagingSenderId: "419640406191",
  appId: "1:419640406191:web:5a283dd823f6cbc281645a",
  measurementId: "G-DF47STL0XC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
