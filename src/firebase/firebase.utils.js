// using firebase methods here
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyC4e5Jag6yL1LpHueLxLYga9HePjHppHGc",
    authDomain: "spacexapp-db.firebaseapp.com",
    projectId: "spacexapp-db",
    storageBucket: "spacexapp-db.appspot.com",
    messagingSenderId: "71613930136",
    appId: "1:71613930136:web:583b732e10b0890a7a8eed"

}

firebase.initializeApp(config);



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
//got access to auth methds on firebase - anytuhgin related to authentication  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utility 
const provider = new firebase.auth.GoogleAuthProvider(); 
//access to AuthProvider class form auth library 
provider.setCustomParameters({ prompt: 'select_account' });
//thos popup window provider 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;