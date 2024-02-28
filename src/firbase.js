import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL-o4oU5kKZVh5C_RFZ-HGFKaocNBdmC0",
  authDomain: "todo-4558f.firebaseapp.com",
  projectId: "todo-4558f",
  storageBucket: "todo-4558f.appspot.com",
  messagingSenderId: "210628715657",
  appId: "1:210628715657:web:71889e809843d1a0d99258",
  measurementId: "G-XFXLXCY97T"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app)
export const db = getFirestore(app);