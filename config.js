import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBzhPVdOmdHjShfXVWYG5Y37bBiSqzLEAw",
    authDomain: "story-hub-65c5a.firebaseapp.com",
    projectId: "story-hub-65c5a",
    storageBucket: "story-hub-65c5a.appspot.com",
    messagingSenderId: "111078924230",
    appId: "1:111078924230:web:6ca0d757f2f91f6a681cc7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();