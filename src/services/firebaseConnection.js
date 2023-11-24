
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAEY7z3-5H_N5ITwKguRNZqdWNDYWRU2ps",
  authDomain: "tickets-332d2.firebaseapp.com",
  projectId: "tickets-332d2",
  storageBucket: "tickets-332d2.appspot.com",
  messagingSenderId: "644025068626",
  appId: "1:644025068626:web:c4014df1b23b1a63ed038b",
  measurementId: "G-R7HBZ6YGMW"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };