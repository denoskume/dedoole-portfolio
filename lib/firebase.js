import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCG-Mukf0ADJ2E0kUbq7kEphw2kZRrER9k",
  authDomain: "dedoole.firebaseapp.com",
  projectId: "dedoole",
  storageBucket: "dedoole.firebasestorage.app",
  messagingSenderId: "1003152084554",
  appId: "1:1003152084554:web:2ee1a452f8ced6c23120b3",
  measurementId: "G-VYPLGSNN9R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
