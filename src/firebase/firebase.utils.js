import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAZFE-4uiHZIC1YJ27G864_3jgNeJHCA08",
  authDomain: "crwn-db-4486a.firebaseapp.com",
  databaseURL: "https://crwn-db-4486a.firebaseio.com",
  projectId: "crwn-db-4486a",
  storageBucket: "crwn-db-4486a.appspot.com",
  messagingSenderId: "695284061175",
  appId: "1:695284061175:web:4d0d07628c6517f5fbd4f2",
  measurementId: "G-XFH3JSG67N"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
