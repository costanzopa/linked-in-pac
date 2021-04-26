// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAL752kHFsuUd-ufqaFSa6gN3NtB-8kfK0',
  authDomain: 'linked-in-pac.firebaseapp.com',
  projectId: 'linked-in-pac',
  storageBucket: 'linked-in-pac.appspot.com',
  messagingSenderId: '333768988169',
  appId: '1:333768988169:web:d5e51c3bd8e7b753a90ad8',
  measurementId: 'G-222PR4DY7J',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
const auth = firebase.auth();

export { firestore, auth, firebase };
