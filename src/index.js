import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ct8of6GF0Z_jyWdJDoe_AOWUziUInbo",
  authDomain: "appcoderhousevercellone.firebaseapp.com",
  projectId: "appcoderhousevercellone",
  storageBucket: "appcoderhousevercellone.appspot.com",
  messagingSenderId: "272256987306",
  appId: "1:272256987306:web:3f71af11221ead7350a0d3",
  measurementId: "G-YE7NFD7X4K"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
