import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAshCDGbRBqHLdb_w8wqLv9SHM9WFzvhAM",
  authDomain: "chasse-au-tresor-users.firebaseapp.com",
  projectId: "chasse-au-tresor-users",
  storageBucket: "chasse-au-tresor-users.appspot.com",
  messagingSenderId: "1042832785167",
  appId: "1:1042832785167:web:4eda6471cb3727d9b6887a",
  measurementId: "G-441KYS7N9S"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
