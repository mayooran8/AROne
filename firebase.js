// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw4IkDIeUo3fKbjeFVhGjNrfv9yLdQRxM",
  authDomain: "tours-e9039.firebaseapp.com",
  projectId: "tours-e9039",
  storageBucket: "tours-e9039.firebasestorage.app",
  messagingSenderId: "759281734856",
  appId: "1:759281734856:web:204461e1cd3bbcbc3541fd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
