import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuuDyDZMC7PfZVxrmKlLKwBeifwTEYthY",
  authDomain: "tinder-clone-6a9e1.firebaseapp.com",
  databaseURL: "https://tinder-clone-6a9e1.firebaseio.com",
  projectId: "tinder-clone-6a9e1",
  storageBucket: "tinder-clone-6a9e1.appspot.com",
  messagingSenderId: "1026332028457",
  appId: "1:1026332028457:web:02633fdcef6766eef23638",
  measurementId: "G-53FBMLN2SG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
