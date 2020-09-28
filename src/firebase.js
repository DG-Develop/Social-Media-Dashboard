import firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZ7rCR4MHnnrwVu8uD6Rn2hd8rKOT7VRA",
    authDomain: "platziconf-a3c01.firebaseapp.com",
    databaseURL: "https://platziconf-a3c01.firebaseio.com",
    projectId: "platziconf-a3c01",
    storageBucket: "platziconf-a3c01.appspot.com",
    messagingSenderId: "255070242092",
    appId: "1:255070242092:web:37c480f31abd4711d89889",
    measurementId: "G-H520SK3NFZ"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()

