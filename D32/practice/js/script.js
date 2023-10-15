user_details = {}
function parsedata(ele) {
    user_details[ele.name] = ele.value


}

function create() {

    console.log(user_details.name)



    $.ajax({
        type: "post",
        url: "http://agaram.academy/api/action.php",

        data: {
            request: "create_candidate",
            name: user_details.name,
            email: user_details.email,
            password: user_details.password,
            aadhar: user_details.aadhar,
            address: user_details.address,
            phone: user_details.phone,
            city: user_details.city,
            area: user_details.area,
            pin: user_details.pin,
        },
        success: function (res) {
            console.log("sucess", res)
            window.location = "login.html"
        },
        error: function (err) {
            console.log("err", err)
        }
    })
}

function get_members() {

    $.ajax({
        type: 'get',
        url: 'http://agaram.academy/api/action.php',
        data: {
            request: "getAllMembers"
        },

        success: function (res) {
            console.log("list", JSON.parse(res))
            let all_data = JSON.parse(res).data
            table = ""
            for (i = 0; i < all_data.length; i++) {
    
                table = table + `<tr><td>${all_data[i].id}</td><td>${all_data[i].name}</td><td>${all_data[i].email}</td>
                <td>${all_data[i].aadhar}</td><td>${all_data[i].address}</td><td>${all_data[i].phone}</td><td>${all_data[i].city}</td><td>${all_data[i].area}</td><td>${all_data[i].pin}</td></tr>`
            }
            $("#t_body").html(table)

        },
        error: function (err) {
            console.log("err", err)
        }
    })
}

function login_members() {
    let email = $("#inputemail").val()
    let password = $("#inputpass").val()
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "candidate_login",
            email: email,
            password: password,
        },

        success: function (res) {
            console.log("list", res)
            window.location = "list.html"
        },
        error: function (err) {
            console.log("err", err)
        }
    })

}



