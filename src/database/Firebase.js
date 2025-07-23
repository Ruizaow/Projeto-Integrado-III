import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "",
  authDomain: "projeto-gpets.firebaseapp.com",
  projectId: "projeto-gpets",
  storageBucket: "projeto-gpets.firebasestorage.app",
  messagingSenderId: "757056977103",
  appId: "1:757056977103:web:02d890a19894126e9ddfba"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);