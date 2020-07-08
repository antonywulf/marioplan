import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: 'AIzaSyDX4b4Ob6-DJFLFgZk-3rDm-6Pt2FmcHxA',
  authDomain: 'marioplan-d5111.firebaseapp.com',
  databaseURL: 'https://marioplan-d5111.firebaseio.com',
  projectId: 'marioplan-d5111',
  storageBucket: 'marioplan-d5111.appspot.com',
  messagingSenderId: '824581787259',
  appId: '1:824581787259:web:6dd253c611a1ba2eb59cde',
  measurementId: 'G-2F8QVVT9S8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
