// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAtGIEBun_4JWg-0Ne3ytDS5z7yZy9hGRc",
  authDomain: "upload-files-ff387.firebaseapp.com",
  projectId: "upload-files-ff387",
  storageBucket: "upload-files-ff387.appspot.com",
  messagingSenderId: "562509019048",
  appId: "1:562509019048:web:f8943160644d692f208f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);