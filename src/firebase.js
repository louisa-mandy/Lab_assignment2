// // JavaScript 
// // src/firebase.js 

// import { initializeApp } from "firebase/app"
// import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore" 


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA3tx3uwsMCT_MITUXeMBSdvryZFGXds70",
//   authDomain: "todo-app-a66ed.firebaseapp.com",
//   projectId: "todo-app-a66ed",
//   storageBucket: "todo-app-a66ed.firebasestorage.app",
//   messagingSenderId: "800582880289",
//   appId: "1:800582880289:web:f8da68d826f7f3a887e760",
//   measurementId: "G-GH55PC58BG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

// export { auth, db, googleProvider, githubProvider };

// src/firebase.js

import { initializeApp } from "firebase/app";
// import { auth } from "./firebase"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3tx3uwsMCT_MITUXeMBSdvryZFGXds70",
    authDomain: "todo-app-a66ed.firebaseapp.com",
    projectId: "todo-app-a66ed",
    // storageBucket: "todo-app-a66ed.appspot.com",
    storageBucket: "todo-app-a66ed.firebasestorage.app",
    messagingSenderId: "800582880289",
    appId: "1:800582880289:web:f8da68d826f7f3a887e760",
    measurementId: "G-GH55PC58BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Firebase Authentication
export const db = getFirestore(app); // Firestore Database

// Authentication Functions
export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
    return signOut(auth);
};

// Firestore Functions 
export const addTodo = async (task) => {
    return await addDoc(collection(db, "todos"), {
        task,
        completed: false,
        createdAt: new Date(),
    });
};

export const getTodos = async () => {
    const snapshot = await getDocs(collection(db, "todos"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateTodo = async (id, updatedTask) => {
    return await updateDoc(doc(db, "todos", id), { task: updatedTask });
};

export const deleteTodo = async (id) => {
    return await deleteDoc(doc(db, "todos", id));
};

