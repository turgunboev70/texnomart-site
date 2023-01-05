import firebase from "firebase"
import "firebase/app"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBy-XUOHBLbXx8L64XZE8vzarZEkRiaQas",
    authDomain: "texnomart-bc4a6.firebaseapp.com",
    projectId: "texnomart-bc4a6",
    storageBucket: "texnomart-bc4a6.appspot.com",
    messagingSenderId: "814350662071",
    appId: "1:814350662071:web:2210c0d6ffb96f36841032",
    measurementId: "G-E6RQ2V9NBT"
};

const backend = firebase.initializeApp(firebaseConfig)
const auth = backend.auth()

export {backend, auth}