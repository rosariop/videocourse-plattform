import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD15uPmbdoJpgOL4nKJ8j7GFakRDwUT8W4",
    authDomain: "stable-glass-258919.firebaseapp.com",
    databaseURL: "https://stable-glass-258919.firebaseio.com",
    projectId: "stable-glass-258919",
    storageBucket: "stable-glass-258919.appspot.com",
    messagingSenderId: "103863675984",
    appId: "1:103863675984:web:13ccfb8dca66b89a7f7555"
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);

export { firebaseApp };