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


// click login button - go to login page
// reg_list function-to show registered users list table



function logincheck() {
    let user_detail = document.getElementById("email").value
    let password = document.getElementById("password").value
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            if (data) {
                for (i = 0; i < data.length; i++) {

                    if ((data[i].email == user_detail) && (data[i].password == password)) {
                        alert("login successfully")

                        localStorage.setItem("loggeduser", true)
                        localStorage.setItem("loggedusername", data[i].name)
                        window.location = "home.html";
                        
                    }

                }
            }
        })
}





// click logout button - shows login page





function logoutcheck() {
    localStorage.removeItem("loggeduser")
    window.location = "login.html"
}



// window shows logged user page (welcome xxx,.., and registered list ) until logged out even it is refreshed or the window is closed
// reg_list function-to show registered users list table



function checklogin() {
    let loggedname = localStorage.getItem("loggedusername")

    if (localStorage.getItem("loggeduser")) {

        document.getElementById("wel").innerHTML = `<span> welcome ${loggedname}</span>`
        reg_list()

    }
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

    let reg_data = {
        name: reg_name,
        email: reg_email,
        password: reg_password,
    }

    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            if (data) {
                data.push(reg_data);
                db.ref('registeredUsers').set(data);
            }
            else {
                db.ref(`registeredUsers/${0}`).set(reg_data);
            }
        })
}




// add users in table dynamically
function reg_list() {
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            htmldata = ''

            for (let i = 0; i < data.length; i++) {
                htmldata = htmldata + ` <tr>
                           <td id="nameinput${[i]}">${data[i].name}</td>
                           <td>${data[i].email}</td>
                            <td><button id="edi" type="button" onclick="edit('${data[i].name}')">&#9998</button></td>
                            <td><button id="del" type="button" onclick="dele('${data[i].name}')" >&#128465</button></td>
                            </tr>`
            }
            document.getElementById("reprow").innerHTML = htmldata


        }
        )
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



// to secure users homepage-if logged out opening homepage redirect to front page




function userpage() {
    if (!localStorage.getItem("loggeduser")) {
        window.location = "front.html"
    }

}









