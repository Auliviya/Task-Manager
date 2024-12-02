// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyIqn51SqG9qH_uQ03o28Mu_M4pZSlq0E",
  authDomain: "task-de76e.firebaseapp.com",
  projectId: "task-de76e",
  storageBucket: "task-de76e.firebasestorage.app",
  messagingSenderId: "903585469444",
  appId: "1:903585469444:web:4047cca05fd89cb2b01151",
  measurementId: "G-MHGMQ46LE7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get auth instance
const auth = firebase.auth();
// Sign Up
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Successfully signed up!');
            console.log('User:', user);
        })
        .catch((error) => {
            alert(error.message);
            console.error('Error:', error);
        });
});




