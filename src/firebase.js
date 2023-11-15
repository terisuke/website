// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "cor-inc.firebaseapp.com",
    projectId: "cor-inc",
    storageBucket: "cor-inc.appspot.com",
    messagingSenderId: "1018089774966",
    appId: "1:1018089774966:web:a8e57a8b79f6dcaacfa457",
    measurementId: "G-6Q5KETRRK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
export default app;