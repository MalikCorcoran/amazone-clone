import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsquE1TF1_1esLY73qM64XjQgbJCPjc3M",
  authDomain: "clone-a64db.firebaseapp.com",
  databaseURL: "https://clone-a64db.firebaseio.com",
  projectId: "clone-a64db",
  storageBucket: "clone-a64db.appspot.com",
  messagingSenderId: "873332208108",
  appId: "1:873332208108:web:92bc1112304700297ad0c9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// https://clone-a64db.web.app
