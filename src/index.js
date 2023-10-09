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
  apiKey: "AIzaSyAzgMvy3t8pEubiJSfeAE28z0FCmNT6WXM",
  authDomain: "devanshu-732.firebaseapp.com",
  projectId: "devanshu-732",
  storageBucket: "devanshu-732.appspot.com",
  messagingSenderId: "521987978962",
  appId: "1:521987978962:web:075d3493d043d269a2df0b",
  measurementId: "G-B8Z5VPFGKH"
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
