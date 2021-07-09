import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKTf8Lsx4L9h7SacRfueHAYDCsr-Eg1yE",
    authDomain: "olx-clone-66155.firebaseapp.com",
    projectId: "olx-clone-66155",
    storageBucket: "olx-clone-66155.appspot.com",
    messagingSenderId: "332070659667",
    appId: "1:332070659667:web:01fa3a6e0a907a6eb788a6",
    measurementId: "G-YHSEVST8FX"
  };

  export default  firebase.initializeApp(firebaseConfig)