import firebase from 'firebase/compat/app'

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/performance';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  //   databaseURL:
  //     "https://myfinestwork-c3467-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
// const initFirebase = () => {
//     return initializeApp(firebaseConfig);
// }
// const app = initializeApp(firebaseConfig);

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        // Check that `window` is in scope for the analytics module!
        if (typeof window !== 'undefined'){
            // Enable analytics.
            if ('measurementId' in firebaseConfig){
                firebase.analytics();
                firebase.performance();
            }
        }
        console.log("Firebase was successfully init.");
    }
}