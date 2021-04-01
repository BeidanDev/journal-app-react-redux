import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCyza6G97euYZEBQnPYeqEUnuAwjJNHe0A",
    authDomain: "react-app-27a02.firebaseapp.com",
    projectId: "react-app-27a02",
    storageBucket: "react-app-27a02.appspot.com",
    messagingSenderId: "535322274451",
    appId: "1:535322274451:web:41d99506a8f81589fa3b66"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}