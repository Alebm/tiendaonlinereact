// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs3Z0rlKASA66TDdFqHHH42F5l8YLud7g",
    authDomain: "tiendaonlinebackend.firebaseapp.com",
    projectId: "tiendaonlinebackend",
    storageBucket: "tiendaonlinebackend.appspot.com",
    messagingSenderId: "151883375219",
    appId: "1:151883375219:web:bf39fb73678eb30a76c006",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
