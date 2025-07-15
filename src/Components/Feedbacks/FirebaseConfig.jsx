import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoo9-luLCICHANpT9BM_ETuWzze2F9TGw",
  authDomain: "my-portfolio-c00bd.firebaseapp.com",
  databaseURL: "https://my-portfolio-c00bd-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-c00bd",
  storageBucket: "my-portfolio-c00bd.appspot.com",
  messagingSenderId: "41561799590",
  appId: "1:41561799590:web:c792c65a75d4114b2a6d67",
  measurementId: "G-3FJ8H3ZZ22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, storage, analytics };