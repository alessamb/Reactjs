import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyDv4EI8x1PXOKZs36yJFdXjk8aYhHNtdOc",
    authDomain: "saludablereact.firebaseapp.com",
    projectId: "saludablereact",
    storageBucket: "saludablereact.appspot.com",
    messagingSenderId: "885505494181",
    appId: "1:885505494181:web:439a8d5d86457f892cd14c"
  };
  const app = firebase.initializeApp(firebaseConfig);

  export const getFierebase = () => app;
  export const getFirestore = () => app.firestore();