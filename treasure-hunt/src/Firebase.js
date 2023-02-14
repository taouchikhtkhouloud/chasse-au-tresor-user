/**
 * Created by bikramkawan on 9/1/17.
 */
import * as firebase from 'firebase';

// Initialize Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAshCDGbRBqHLdb_w8wqLv9SHM9WFzvhAM",
  authDomain: "chasse-au-tresor-users.firebaseapp.com",
  projectId: "chasse-au-tresor-users",
  storageBucket: "chasse-au-tresor-users.appspot.com",
  messagingSenderId: "1042832785167",
  appId: "1:1042832785167:web:4eda6471cb3727d9b6887a",
  measurementId: "G-441KYS7N9S"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');