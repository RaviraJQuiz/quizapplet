// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8SWhauxU9VIaXf3LumVhwKRu7PzWcoMg",
  authDomain: "quizapplet.firebaseapp.com",
  projectId: "quizapplet",
  storageBucket: "quizapplet.firebasestorage.app",
  messagingSenderId: "207568094998",
  appId: "1:207568094998:web:1b9fb21c60c4dd2406b237"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
