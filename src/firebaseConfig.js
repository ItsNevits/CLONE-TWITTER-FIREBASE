import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9NsZniZk12mfFsJ_bIsWaN4mT6Sdm8S8",
  authDomain: "clone-twitter-8ac2a.firebaseapp.com",
  projectId: "clone-twitter-8ac2a",
  storageBucket: "clone-twitter-8ac2a.appspot.com",
  messagingSenderId: "472441077547",
  appId: "1:472441077547:web:fbaf13df9fec6084ba8f6e",
  measurementId: "G-1JZDHCMP5F",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

export { firebase, auth, db, storage };
