import firebase from 'firebase/app';
import{ initializeApp } from 'firebase/app'
import 'firebase/auth'
import { getAuth } from 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBEdLcg2_2jupwQgBojdTs10LSEZ6KBqKI",
    authDomain: "webntertenmaint.firebaseapp.com",
    databaseURL: "https://webntertenmaint-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webntertenmaint",
    storageBucket: "webntertenmaint.appspot.com",
    messagingSenderId: "805394605171",
    appId: "1:805394605171:web:ba1e7a0e051eb3c07ef606",
    measurementId: "G-GP180PGVT6"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };