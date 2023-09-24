<script type="module">
   {/* // Import the functions you need from the SDKs you need */}
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
    import {getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

    {/* // Your web app's Firebase configuration */}
    const firebaseConfig = {
        apiKey: "AIzaSyAkPgAR0Hs6v5oNlmxYxI2OGh-S8YA2OWU",
    authDomain: "creativetutorial-43ba7.firebaseapp.com",
    projectId: "creativetutorial-43ba7",
    storageBucket: "creativetutorial-43ba7.appspot.com",
    messagingSenderId: "52869654198",
    appId: "1:52869654198:web:0a19740d1f26ade1066817"
            };

    {/* // Initialize Firebase */}
    const app = initializeApp(firebaseConfig);

    {/* //get ref to database services */}
    const db = getDatabase(app);

    document.getElementById("submit").addEventListener('click', function(e){
        e.preventDefault();
    set(ref(db, 'user/' + document.getElementById("username").value),
    {

        username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    PhoneNumber: document.getElementById("phone").value

              });
    alert("Login Sucessfull  !");
             })
</script>
