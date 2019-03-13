
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBcj-XI-VF70RkKyqHMHE6qzhGI81sFobg",
  authDomain: "digital-fluxus.firebaseapp.com",
  databaseURL: "https://digital-fluxus.firebaseio.com/",
  projectId: "digital-fluxus",
  storageBucket: "gs://digital-fluxus.appspot.com",
  messagingSenderId: "746497389979"
});

export default firebase;