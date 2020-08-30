import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAO7yUAmWLcbtmeW2g9kskg6Matl0JDT_o",
    authDomain: "clone-9a92d.firebaseapp.com",
    databaseURL: "https://clone-9a92d.firebaseio.com",
    projectId: "clone-9a92d",
    storageBucket: "clone-9a92d.appspot.com",
    messagingSenderId: "731672329698",
    appId: "1:731672329698:web:12415c6b144826c298cdbb",
    measurementId: "G-240NYXNNMG"
});

const auth = firebase.auth();

export { auth };
