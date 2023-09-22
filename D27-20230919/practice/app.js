
// click login button - go to login page
// reg_list function-to show registered users list table



function logincheck() {


    let login_email = document.getElementById("email").value;
    let login_password = document.getElementById("password").value;
    let detail = JSON.parse(localStorage.getItem("userdetails"))
    for (var i = 0; i < detail.length; i++) {
        if (detail[i].email == login_email && detail[i].password == login_password) {
            alert("success")

            localStorage.setItem("loggeduser", true)
            localStorage.setItem("loggedusername", detail[i].name)
            window.location = "home.html"
        }


    }

    console.log(detail)
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



function newuser() {


    let reg_email = document.getElementById("email1").value
    let reg_password = document.getElementById("password1").value
    let reg_username = document.getElementById("name").value


    let parselocalData = []
    if (localStorage.getItem("userdetails")) {
        parselocalData = JSON.parse(localStorage.getItem("userdetails"))
    }

    parselocalData.push({
        email: reg_email,
        password: reg_password,
        name: reg_username
    }
    )
    localStorage.setItem("userdetails", JSON.stringify(parselocalData))



}



// add users in table dynamically
function reg_list() {
    let reglistdata = JSON.parse(localStorage.getItem("userdetails"))



    localStorage.setItem("userdetails", JSON.stringify(reglistdata))
    htmldata = ""
    for (let i = 0; i < reglistdata.length; i++) {
        htmldata = htmldata + ` <tr>
            <td id="nameinput${[i]}">${reglistdata[i].name}</td>
            <td>${reglistdata[i].email}</td>
            <td><button id="edi" onclick="edit('${reglistdata[i].name}')">&#9998</button></td>
            <td><button id="del" onclick="dele('${reglistdata[i].name}')" >&#128465</button></td>
            </tr>`
    }
    document.getElementById("reprow").innerHTML = htmldata
}



// click delete icon - delete in table and localStorage
// reg_list fuction -in registered list user details deletes instantly even without refreshing



function dele(a) {
    let new_id = JSON.parse(localStorage.getItem("userdetails"))
    let new_data = []
    for (let i = 0; i < new_id.length; i++) {
        if (new_id[i].name != a) {
            new_data.push(new_id[i])
        }
    }
    localStorage.setItem("userdetails", JSON.stringify(new_data))
    reg_list()
}



// click pencil icon-edit user's details in table and local storage 
// call delete function for editing instantly(deletes old details)



function edit(b) {
    pre_edit = JSON.parse(localStorage.getItem("userdetails"))
    for (let i = 0; i < pre_edit.length; i++) {
        if (pre_edit[i].name == b) {
            new_name = pre_edit[i].name
            new_email = pre_edit[i].email
            new_password = pre_edit[i].password

            let edited_name = prompt("enter your updated name", new_name.innerHTML);
            let edited_email = prompt("enter your updated email", new_email.innerHTML);
            let edited_password = prompt("enter your updated password", new_password.innerHTML);


            edit_list = []
            if (localStorage.getItem("userdetails")) {
                edit_list = JSON.parse(localStorage.getItem("userdetails"))
            }
            edit_list.push({
                email: edited_email,
                name: edited_name,
                password: edited_password,
            })
            localStorage.setItem("userdetails", JSON.stringify(edit_list))
            dele(b)
        }

    }
}



// to secure users homepage-if logged out opening homepage redirect to front page




function userpage() {
    if (!localStorage.getItem("loggeduser")) {
        window.location = "front.html"
    }

}


