import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVLEcWQ2Cn7X4G3Dl3Gh3UFxuDz5PjfDQ",
    authDomain: "movies-app-65278.firebaseapp.com",
    databaseURL: "https://movies-app-65278.firebaseio.com",
    projectId: "movies-app-65278",
    storageBucket: "movies-app-65278.appspot.com",
    messagingSenderId: "54560943229",
    appId: "1:54560943229:web:2d420b2c986dc85024d514"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();