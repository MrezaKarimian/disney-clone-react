import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyCxJ7WZ69VU60vVyy4wVPXPYC9V34Faoj0",
//   authDomain: "test-6a918.firebaseapp.com",
//   projectId: "test-6a918",
//   storageBucket: "test-6a918.appspot.com",
//   messagingSenderId: "60464090647",
//   appId: "1:60464090647:web:e4282f645e33eac83e1652",
//   measurementId: "G-619T0JMF0X"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// export default db;
