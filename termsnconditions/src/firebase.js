import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

const firebaseConfig = {
  apiKey: "AIzaSyAdNRT0RigSHC8tbtCzGly94drh1D5Kb1E",
  authDomain: "employeehandbook-26278.firebaseapp.com",
  projectId: "employeehandbook-26278",
  storageBucket: "employeehandbook-26278.appspot.com",
  messagingSenderId: "164946364710",
  appId: "1:164946364710:web:ebfccd959e79e9066359e7",
  measurementId: "G-YMJHCQFPGV",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const auth = getAuth(app);
// Add a new document with a generated id.

export const getUserdata = async (employeedata) => {
  const docRef = await addDoc(collection(db, "users"), employeedata);
  console.log("Document written with ID: ", docRef.id);
};

export const getData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userData = querySnapshot.docs.map((doc) => doc.data());
    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
};