import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-QvwMMJ6DJ2HIb9htW-P0RE3VyPhv9V0",
  authDomain: "guess-web.firebaseapp.com",
  projectId: "guess-web",
  storageBucket: "guess-web.appspot.com",
  messagingSenderId: "988673560948",
  appId: "1:988673560948:web:140ddfe1611ca329719c21",
  measurementId: "G-8M73HJ0VJV",
};

// Initialize Firebase
const appTest = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default appTest;