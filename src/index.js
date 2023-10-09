/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyA4KRl-Ki8ZMQDx880WWHheEYS3OPeoyCU',
  authDomain: 'developer-database-732.firebaseapp.com',
  databaseURL: "https://developer-database-732-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: 'developer-database-732',
  storageBucket: 'developer-database-732.appspot.com',
  messagingSenderId: '232071454403',
  appId: '1:232071454403:web:91d6d439252c386c858c76',
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
