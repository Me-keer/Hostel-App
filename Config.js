import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCCBizo7wjNCUcf2CL_m15lbW0lYpjvtKI",
  authDomain: "hostel-f7953.firebaseapp.com",
  projectId: "hostel-f7953",
  storageBucket: "hostel-f7953.appspot.com",
  messagingSenderId: "556452271304",
  appId: "1:556452271304:web:289c3959cd4da58a1941fd",
  measurementId: "G-CJ43TNGGGT"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export {firebase};
  