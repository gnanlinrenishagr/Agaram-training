
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.4.0/database-app.js";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMXxqcOJnhnvDeURwpXGGhqRSBesCN_nM",
    authDomain: "creative-4edd1.firebaseapp.com",
    projectId: "creative-4edd1",
    storageBucket: "creative-4edd1.appspot.com",
    messagingSenderId: "260680340251",
    appId: "1:260680340251:web:cd8007efe5bf6c378cb9be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// get ref to database services
const db = getDatabase(app);



document.getElementById("submit").addEventListener("click", function (e) {
    set(ref(db, "user" + document.getElementById("username").value), {
        username: document.getElementById(username).value,
        email: document.getElementById(email).value,
        PhoneNumber: document.getElementById(phone).value
    })
    alert("login Sucessfull !")
})