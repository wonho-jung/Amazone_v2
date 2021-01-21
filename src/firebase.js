import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSUok-4IGpfNXll5ABIk0Z4LjNNMukl0Y",
  authDomain: "payment-5ab75.firebaseapp.com",
  databaseURL: "https://payment-5ab75-default-rtdb.firebaseio.com",
  projectId: "payment-5ab75",
  storageBucket: "payment-5ab75.appspot.com",
  messagingSenderId: "654479481587",
  appId: "1:654479481587:web:5d43a703e3a38e2cc17586",
  measurementId: "G-2ZR2TK8V7G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
