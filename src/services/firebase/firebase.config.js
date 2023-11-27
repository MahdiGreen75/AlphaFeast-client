// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9i8hRbJIlMLoO7taHS6O_NBCXRjib4J0",
    authDomain: "alphafeast-3f69e.firebaseapp.com",
    projectId: "alphafeast-3f69e",
    storageBucket: "alphafeast-3f69e.appspot.com",
    messagingSenderId: "783080232570",
    appId: "1:783080232570:web:8fe3d4598258648e0f4dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;