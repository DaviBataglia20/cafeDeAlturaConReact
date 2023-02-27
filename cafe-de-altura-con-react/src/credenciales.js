// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrazstAqBXaMIlziLrlLiaF3tVMOx21Ao",
  authDomain: "cafedealtura-228cd.firebaseapp.com",
  projectId: "cafedealtura-228cd",
  storageBucket: "cafedealtura-228cd.appspot.com",
  messagingSenderId: "298084325559",
  appId: "1:298084325559:web:856fa7ab8c5a38ee749532"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp