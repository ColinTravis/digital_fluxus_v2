import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBcj-XI-VF70RkKyqHMHE6qzhGI81sFobg",
    authDomain: "paste your own",
    databaseURL: "paste your own",
    projectId: "digital-fluxus",
    storageBucket: "paste your own",
    messagingSenderId: "paste your own"
});

export default firebase;