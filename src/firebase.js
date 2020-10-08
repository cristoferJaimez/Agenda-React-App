import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/firebase-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeRoEjj99UTZIvnhBju74xz5v8UAvCNnk",
  authDomain: "asistente-app-1989.firebaseapp.com",
  databaseURL: "https://asistente-app-1989.firebaseio.com",
  projectId: "asistente-app-1989",
  storageBucket: "asistente-app-1989.appspot.com",
  messagingSenderId: "814895179257",
  appId: "1:814895179257:web:6a28879cffd179c9694928",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
export { db };
export default fire;
