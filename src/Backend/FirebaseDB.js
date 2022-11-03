import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";

/* import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"; */
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const auth = getAuth(app);

const writePostUserData = (author, name, content) => {
  set(ref(database, "data/"), {
    author: author,
    name: name,
    content: content,
  });
  console.log("post successfull");
};

const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("userId_toantim");
    localStorage.removeItem("userEmail_toantim");
  } catch (error) {
    console.log(error.message);
  }
};
export { database, auth, logout, writePostUserData };
