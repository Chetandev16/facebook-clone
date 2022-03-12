import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';  //new update to import firebase from "firebase"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fb-clone-84f00.firebaseapp.com",
  projectId: "fb-clone-84f00",
  storageBucket: "fb-clone-84f00.appspot.com",
  messagingSenderId: "618189429489",
  appId: "1:618189429489:web:8e4893fb845cf80c476750",
  measurementId: "G-NDWH3KRH23",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

