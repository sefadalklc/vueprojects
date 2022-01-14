import firebase from 'firebase/app';

import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6AwHgsT8md5aLedJO39mBXQlkb8U-Ba0",
    authDomain: "blog-app-52447.firebaseapp.com",
    projectId: "blog-app-52447",
    storageBucket: "blog-app-52447.appspot.com",
    messagingSenderId: "426755574040",
    appId: "1:426755574040:web:0ef6a958a4e0b4dd08b66d",
    measurementId: "G-639ZQYPY83"
  };

  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();

  export{db}