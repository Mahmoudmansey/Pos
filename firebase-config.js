// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUtjYHitwg87jlNsKlTK7La4xFaIzRe_Y",
  authDomain: "room-service-pos.firebaseapp.com",
  databaseURL: "https://room-service-pos-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "room-service-pos",
  storageBucket: "room-service-pos.firebasestorage.app",
  messagingSenderId: "803712976041",
  appId: "1:803712976041:web:98532b1369813d5d6055b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
