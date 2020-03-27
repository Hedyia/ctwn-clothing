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

export const createUserProfileDocument = async (userAuth, aditionalProps) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...aditionalProps });
    } catch (exception) {
      console.log("exception happened", exception.message);
    }
  }
  return userRef;
};
export default firebase;
