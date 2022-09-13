import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIWNadBoLBTXX2wmqM-OW6qIoyC1USCEI",
  authDomain: "cancerclarity-78ee1.firebaseapp.com",
  projectId: "cancerclarity-78ee1",
  storageBucket: "cancerclarity-78ee1.appspot.com",
  messagingSenderId: "536554928190",
  appId: "1:536554928190:web:37162a71961c919cd6796f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
