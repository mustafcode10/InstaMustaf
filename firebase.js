// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import { firebase } from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHT19C6QkKOkLNsN8iVi2etX6y3wNkurA",
  authDomain: "rn-instamustaf.firebaseapp.com",
  projectId: "rn-instamustaf",
  storageBucket: "rn-instamustaf.appspot.com",
  messagingSenderId: "726802040750",
  appId: "1:726802040750:web:386097b1f37a4d32abaa3f"
}

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}


export default firebase