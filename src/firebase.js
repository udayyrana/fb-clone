import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvYs_HM1sdWqAk9dzsagMVZZy_L3AR3Lg",
    authDomain: "facebook-clone-8c3ae.firebaseapp.com",
    projectId: "facebook-clone-8c3ae",
    storageBucket: "facebook-clone-8c3ae.appspot.com",
    messagingSenderId: "494902675330",
    appId: "1:494902675330:web:c561e13b37869d7e34719b",
    measurementId: "G-M7S77GY3KD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;