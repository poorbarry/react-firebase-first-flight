import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCgJGhcrzBlXnIlWHxegM7yg05CD3lI86s",
  authDomain: "first-flight-faa89.firebaseapp.com",
  databaseURL: "https://first-flight-faa89.firebaseio.com",
  projectId: "first-flight-faa89",
  storageBucket: "first-flight-faa89.appspot.com",
  messagingSenderId: "939840077158"
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
