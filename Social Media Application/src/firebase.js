import "firebase/compat/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/app-check";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/messaging";
import "firebase/compat/performance";
import "firebase/compat/remote-config";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVaNxM6qaAYmDLqaUpWdb6xqEEzZw7G4E",
  authDomain: "reactinstatutorial-6da2c.firebaseapp.com",
  projectId: "reactinstatutorial-6da2c",
  storageBucket: "reactinstatutorial-6da2c.appspot.com",
  messagingSenderId: "77580410583",
  appId: "1:77580410583:web:c23aeee7fa7ab29925da92"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
