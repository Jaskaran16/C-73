import * as firebase from 'firebase'
 require('@firebase/firestore')
 var firebaseConfig = {
    apiKey: "AIzaSyAVOyYnORz8bwlWk7LUBd8oOgGAynrzq3Q",
    authDomain: "wireless-library-e8da1.firebaseapp.com",
    projectId: "wireless-library-e8da1",
    storageBucket: "wireless-library-e8da1.appspot.com",
    messagingSenderId: "627214058771",
    appId: "1:627214058771:web:edfd2aa515b5d5bdcc46e6",
    measurementId: "G-T5F8M389QP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()