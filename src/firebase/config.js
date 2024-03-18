import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCgoEqTTIFiu7T43TTeTiNKPFNuu6N3L9M",
    authDomain: "fir-8c24b.firebaseapp.com",
    projectId: "fir-8c24b",
    storageBucket: "fir-8c24b.appspot.com",
    messagingSenderId: "37196254768",
    appId: "1:37196254768:web:4b576e1c4a0d8af24567f5",
    measurementId: "G-LY4CZBR5V0"
  };

  export default firebase.initializeApp(firebaseConfig)