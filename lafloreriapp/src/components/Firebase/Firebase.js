import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNjN5H42tIX_rIhmQ9-_Ag8rGAnJXDB9E",
  authDomain: "reactapp-la-floreria.firebaseapp.com",
  projectId: "reactapp-la-floreria",
  storageBucket: "reactapp-la-floreria.appspot.com",
  messagingSenderId: "21324850290",
  appId: "1:21324850290:web:d6f0d61762b4c96dc14eeb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
