import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjI8xc-UAYmGtnzKhr8JG8eaIMq26fRl4",
  authDomain: "linkedin-clone-yt-84a2c.firebaseapp.com",
  projectId: "linkedin-clone-yt-84a2c",
  storageBucket: "linkedin-clone-yt-84a2c.appspot.com",
  messagingSenderId: "959848177652",
  appId: "1:959848177652:web:2707b63d925929b87b23a1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
