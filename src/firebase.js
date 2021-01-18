import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
  authDomain: "instagram-clone-react1-dcb3d.firebaseapp.com",
  databaseURL: "https://instagram-clone-react1-dcb3d-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react1-dcb3d",
  storageBucket: "instagram-clone-react1-dcb3d.appspot.com",
  messagingSenderId: "465343992912",
  appId: "1:465343992912:web:01364711504dc23f4ced55",
  measurementId: "G-E2PBVXRTQ6"
  });

  



  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db,auth,storage };