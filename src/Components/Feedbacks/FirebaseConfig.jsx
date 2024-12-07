// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAwza_YW5pSVAEIKAS6Amntt_73voFbF-Y",
    authDomain: "my-portfolio-b2a15.firebaseapp.com",
    projectId: "my-portfolio-b2a15",
    storageBucket: "my-portfolio-b2a15.appspot.com",
    messagingSenderId: "821653278762",
    appId: "1:821653278762:web:e3b8d8fcd74cefafc67353",
    measurementId: "G-Z0R9QJ8Y84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
