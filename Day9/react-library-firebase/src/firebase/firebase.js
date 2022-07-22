// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB79s-ecprKGahLhzKdJ23FEpSSiQ4phPE",
  authDomain: "tasklist-c49f5.firebaseapp.com",
  projectId: "tasklist-c49f5",
  storageBucket: "tasklist-c49f5.appspot.com",
  messagingSenderId: "741508432024",
  appId: "1:741508432024:web:f6564c2a9bf3d4bc42d0ed",
  measurementId: "G-N5XJWEDNZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
