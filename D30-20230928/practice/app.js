const firebaseConfig = {
    apiKey: "AIzaSyAzlPncURT81m5HTo2mV7Lw-Yi47ct7XIg",
    authDomain: "my-web-app-75454.firebaseapp.com",
    databaseURL: "https://my-web-app-75454-default-rtdb.firebaseio.com",
    projectId: "my-web-app-75454",
    storageBucket: "my-web-app-75454.appspot.com",
    messagingSenderId: "676123523125",
    appId: "1:676123523125:web:6ad8d5d3f62b7cc21dd97c"
};

firebase.initializeApp(firebaseConfig)

var db = firebase.database();
var dataRef = db.ref("registeredUsers")
var auth = firebase.auth()
console.log(auth)

// click login button - go to login page
// reg_list function-to show registered users list table



function logincheck() {
    let user_detail = document.getElementById("email").value
    let password = document.getElementById("password").value
    let user_name = document.getElementById("name").value
    auth.signInWithEmailAndPassword(user_detail, password)
        .then((userCredential) => {
            alert("Loggedin Sucessfully")


            const user = auth.currentUser;
            var userid = user.uid
            console.log(userid)
            let u_details = {
                username: user_name,
                useremail: user_detail,
                loggedin: true,
            }
            db.ref("registeredUsers/" + userid).set(u_details)
            window.location = "home.html";
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        });



    
}





// click logout button - shows login page





function logoutcheck() {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            var userid = user.uid;
            db.ref(`registeredUsers/${userid}`).once("value")
                .then(function (snapshot) {
                    var data = snapshot.val();
                    if (data.loggedin == true) {
                        let log = {
                            loggedin: false
                        }
                        db.ref(`registeredUsers/` + userid).set(log);
                        window.location = "home.html"

                    }


                })
        }
    });
}



// window shows logged user page (welcome xxx,.., and registered list ) until logged out even it is refreshed or the window is closed
// reg_list function-to show registered users list table



function checklogin() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var userid = user.uid;
            db.ref(`registeredUsers/${userid}`).once("value")
                .then(function (snapshot) {
                    var data = snapshot.val();
                    if (data.loggedin == true) {
                        document.getElementById("wel").innerHTML = data.username
                        reg_list()

                    }
                })

        }
    });
    // let loggedname = localStorage.getItem("loggedusername")

    // if (localStorage.getItem("loggeduser")) {


    // }
}



// click register button-go to registration page



function main() {
    window.location = "registration.html"

}



//add new user's details in local storage



function register_firebase() {

    let reg_email = document.getElementById("email1").value
    let reg_password = document.getElementById("password1").value
    let reg_name = document.getElementById("name1").value
    auth.createUserWithEmailAndPassword(reg_email, reg_password)
        .then((userCredential) => {
            alert("Registered Sucessfully")
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        });



}




// add users in table dynamically
function reg_list() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            var uid = user.uid;
            db.ref(`registeredUsers/${uid}`).once('value')
                .then(function (snapshot) {
                    let data = snapshot.val();
                    console.log(data);
                    let htmldata = ''
                    htmldata = htmldata + ` <tr>
                         <td >${data.username}</td>
                         <td>${data.useremail}</td>
                          <td><button id="edi" type="button" onclick="edit('${data.useremail}')">&#9998</button></td>
                          <td><button id="del" type="button" onclick="dele('${data.useremail}')" >&#128465</button></td>
                          </tr>`
                    document.getElementById("reprow").innerHTML = htmldata
                }
                )


            // for (let i = 0; i < data.length; i++) {
            //     console.log(data.uid.username)
            //     htmldata = htmldata + ` <tr>
            //          <td id="nameinput${[i]}">${data[i]}</td>
            //          <td>${data[i]}</td>
            //           <td><button id="edi" type="button" onclick="edit('${data[i]}')">&#9998</button></td>
            //           <td><button id="del" type="button" onclick="dele('${data[i]}')" >&#128465</button></td>
            //           </tr>`
            // }
            // document.getElementById("reprow").innerHTML = htmldata


            // }
            // )
        }
    });

}



// click delete icon - delete in table and localStorage
// reg_list fuction -in registered list user details deletes instantly even without refreshing



function dele(a) {
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            let new_data = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].name != a) {
                    new_data.push(data[i])

                }
            }

            db.ref('registeredUsers').set(new_data);
            reg_list()
        })


}



// click pencil icon-edit user's details in table and local storage 
// call delete function for editing instantly(deletes old details)



function edit(b) {
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == b) {
                    new_name = data[i].name
                    new_email = data[i].email
                    new_password = data[i].password

                    let edited_name = prompt("enter your updated name", new_name.innerHTML);
                    let edited_email = prompt("enter your updated email", new_email.innerHTML);
                    let edited_password = prompt("enter your updated password", new_password.innerHTML);

                    edit_list = []
                    if (data) {
                        edit_list = data
                    }

                    edit_list.push({
                        email: edited_email,
                        name: edited_name,
                        password: edited_password,
                    })

                    db.ref('registeredUsers').set(edit_list);
                    dele(b)
                }

            }
        })

}
function secure() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            var uid = user.uid;
            db.ref(`registeredUsers/${uid}`).once('value')
                .then(function (snapshot) {
                    let data = snapshot.val();
                    if (data.loggedin==false){
                        window.location="front.html"
                    }
                })
        }
    })
}



function  loginbut(){
    // window.location="login.html"
    // checklogin()
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            var uid = user.uid;
            db.ref(`registeredUsers/${uid}`).once('value')
                .then(function (snapshot) {
                    let data = snapshot.val();
                    if (data.loggedin==true){
                        window.location="home.html"
                    }
                    else{
                        window.location="login.html"
                    }
                })
        }
    })
}








