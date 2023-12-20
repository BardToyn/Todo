// firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { authenticateUser } from './settings/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCyNZDmrJTgaiHvoTskzIObXDuV1cyCgK0",
  authDomain: "todo-app-52259.firebaseapp.com",
  projectId: "todo-app-52259",
  storageBucket: "todo-app-52259.appspot.com",
  messagingSenderId: "482405121344",
  appId: "1:482405121344:web:bf1f723f13f21a8d29cea5",
  measurementId: "G-MPV6C304DC"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db, authenticateUser }; // экспорт экземпляра Firebase и Firestore
