// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOQ32DMOSp53XG64vT7NmhCWrNppCZJ5k",
  authDomain: "web-project-01-database.firebaseapp.com",
  databaseURL:
    "https://web-project-01-database-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "web-project-01-database",
  storageBucket: "web-project-01-database.appspot.com",
  messagingSenderId: "67388731063",
  appId: "1:67388731063:web:b800de92353e5a7e866732",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
