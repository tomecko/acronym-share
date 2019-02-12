import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAcyN8RDFxC5ZZuWto62j3ooei2R9x0LSU',
  authDomain: 'smart-goals-14ed3.firebaseapp.com',
  databaseURL: 'https://smart-goals-14ed3.firebaseio.com',
  projectId: 'smart-goals-14ed3',
  storageBucket: 'smart-goals-14ed3.appspot.com',
  messagingSenderId: '488118731461',
};
firebase.initializeApp(config);

export const db = firebase.firestore();
export const firestore = firebase.firestore;
