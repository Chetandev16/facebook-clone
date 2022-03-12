import firebase from "firebase";
import db from "firebase"
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MSENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUR_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDUsxHaFoNhzzql7Da-oGuZH3L2SBumq0k",
  authDomain: "fb-clone-84f00.firebaseapp.com",
  projectId: "fb-clone-84f00",
  storageBucket: "fb-clone-84f00.appspot.com",
  messagingSenderId: "618189429489",
  appId: "1:618189429489:web:8e4893fb845cf80c476750",
  measurementId: "G-NDWH3KRH23",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
