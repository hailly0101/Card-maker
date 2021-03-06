import firebase from 'firebase';
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE__DB_URL,
    projectId: process.env.REACT_APP_FIREBASE__PROJECT_ID,
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);

 export default firebaseApp;