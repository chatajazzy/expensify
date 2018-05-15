import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCHeGCFq5yYHG09g7HxGD7tCYqPkudmWa8',
  authDomain: 'catch-of-the-day-16e3d.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-16e3d.firebaseio.com',
  projectId: 'catch-of-the-day-16e3d',
  storageBucket: 'catch-of-the-day-16e3d.appspot.com',
  messagingSenderId: '613658223277'
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
