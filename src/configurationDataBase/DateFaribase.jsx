//import { firebase } from "firebase/app";
//import "firebase/database";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config={
  apiKey: 'AIzaSyC32eqIhLPzkVCV5tZkxBKW_ng41CVR8yg',
  authDomain: 'marketfb-6beeb.firebaseapp.com',
  projectId: 'marketfb-6beeb',
  storageBucket: 'marketfb-6beeb.appspot.com',
  messagingSenderId: '184456360321',
  appId: '1:184456360321:web:fe9dd4e2148301b8193880'
}

//const fb =!firebase.getApps.length ? firebase.initializeApp(config):firebase.app()
//export default fb;

const fb = initializeApp(config);
export const firebase = getDatabase(fb);