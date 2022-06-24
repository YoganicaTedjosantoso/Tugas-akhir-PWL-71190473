// Conveniently import this file anywhere to use db


import 'firebase/firestore'

import { firestore, initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDdtKqrThqoVkEgt-iirjhd9SP8thHRdkw",
    authDomain: "tas-final-pwl.firebaseapp.com",
    projectId: "tas-final-pwl",
    storageBucket: "tas-final-pwl.appspot.com",
    messagingSenderId: "114877122706",
    appId: "1:114877122706:web:abecaae04cc72fcd9ebe4b",
    measurementId: "G-JP388EQ133"
  };
  

  const app = initializeApp(firebaseConfig);
  export const db = firestore(app)
// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
