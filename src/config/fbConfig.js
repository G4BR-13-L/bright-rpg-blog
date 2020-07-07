import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




var firebaseConfig = {
    apiKey: "AIzaSyC3UmLl2myqyEkcuL4T_6WaNWfdT05O7i8",
    authDomain: "bright-rpg-blog.firebaseapp.com",
    databaseURL: "https://bright-rpg-blog.firebaseio.com",
    projectId: "bright-rpg-blog",
    storageBucket: "bright-rpg-blog.appspot.com",
    messagingSenderId: "928125306293",
    appId: "1:928125306293:web:b3aa71202bedf0574bc5fc",
    measurementId: "G-Z3RR3T3XNC"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase; 