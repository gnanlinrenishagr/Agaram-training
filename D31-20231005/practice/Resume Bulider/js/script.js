let resume_builder = {

}
let each_tmp = {

}
let username = "gnanlinrenisha"
function parsedata(ele, p_key) {

    if (p_key) {

        if (resume_builder[p_key]) {

            resume_builder[p_key] = {
                ...resume_builder[p_key]
            }
        }
        else {

            resume_builder[p_key] = {}
        }

        resume_builder[p_key][ele.name] = ele.value
    }
    else {

        resume_builder[ele.name] = ele.value
    }

    // display()
}
function handmulkey(p_key, ele, ski) {

    if (!resume_builder[p_key]) {

        resume_builder[p_key] = []
    }

    if (ele) {

        let element = document.getElementById(ele)

        if (element.value == "") {

            alert("Enter your" + " " + p_key + " " + "here")
            element.focus()
        }
        else {

            resume_builder[p_key].push(element.value)
            // display()
        }
        element.value = ""
        displayarray(p_key, ski)


    }
    else {

        resume_builder[p_key].push(each_tmp)
        for (i = 0; i < resume_builder[p_key].length; i++) {

            ndlist = Object.keys(resume_builder[p_key][i])

            for (i = 0; i < ndlist.length; i++) {

                document.getElementById(ndlist[i]).value = ""
            }


        }
        displayobject(p_key, ski)
        each_tmp = {}
        // display()
    }




}
function displayarray(p_key, ski) {

    let data = [...resume_builder[p_key]]
    htmldata = ""
    for (i = 0; i < data.length; i++) {

        htmldata = htmldata + `<badge class="p-2">${data[i]}</badge>` + `<button type="button" class="btn btn-primary close p-2" aria-label="Close" onclick="del('${p_key}','${data[i]}','${ski}')">
        <span aria-hidden="true">&times;</span>
      </button>`


    }
    document.getElementById(ski).innerHTML = htmldata
    // display()
}


function del(p_key, ele, ski) {

    let data = [...resume_builder[p_key]]
    let new_data = []


    for (i = 0; i < data.length; i++) {

        if (ele != data[i]) {

            new_data.push(data[i])

        }
    }

    resume_builder[p_key] = new_data

    // display()
    displayarray(p_key, ski)

}
function handmulobject(ele) {

    each_tmp[ele.name] = ele.value

}
function displayobject(p_key, para) {
    let html = ''
    for (i = 0; i < resume_builder[p_key].length; i++) {
        let data = resume_builder[p_key][i]
        let td_html = ''
        for (const key in data) {
            td_html = td_html + `<td>${data[key]}</td>`

            console.log(`${key}:${data[key]}`)

        }
        console.log(i)
        t_body = td_html + `<td><button type="button" class="btn btn-primary" onclick="del1('${p_key}','${i}','${para}')">Delete</button></td>`
        html = html + '<tr>' + t_body + '</tr>'
    }
    document.getElementById(para).innerHTML = html
}
function del1(p_key, ele, para) {


    let data = []

    for (i = 0; i < resume_builder[p_key].length; i++) {
        console.log("all", resume_builder[p_key])
        if (resume_builder[p_key][i] != resume_builder[p_key][ele]) {
            data.push(resume_builder[p_key][i])
        }
    }
    resume_builder[p_key] = data
    // display()
    displayobject(p_key, para)
}
// function display() {

//     document.getElementById("display_data").innerHTML = JSON.stringify(resume_builder, undefined, 2)
//     console.log(resume_builder)
// }
function create() {
    $.ajax({
        type: "post",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "create_resume",
            user: username,
            resume: resume_builder
        },

        success: function (res) {

            console.log("response", res)
            window.location = "index1.html"

        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
function seeresume() {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "get_user_resume",
            user: username,
        },

        success: function (res) {
            let data = JSON.parse(res)
            console.log("response", data)
            let tabledata = ""
            for (i = 0; i < data.data.length; i++) {
                tabledata = tabledata + `<tr>
                <th>${data.data[i].id}</th>
                <td>${data.data[i].user}</td>
                <td><button type="button" class="btn btn-primary" onclick="delresume(${data.data[i].id})">Delete</button></td>
                <td><a href="list.html?id=${data.data[i].id}">Display My Resume</a></td>
              </tr>`
            }
            $("#resume").html(tabledata)
            console.log(tabledata)

        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
function delresume(id) {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "delete_user_resume",
            user: username,
            id
        },

        success: function (res) {
            let data = JSON.parse(res)
            console.log("response", data)
            seeresume()


        },
        error: function (error) {
            console.log("err", error)
        }
    })
}


function listresume(id) {
    console.log("hi", id)
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "get_resume_by_id",
            user: username,
            id
        },

        success: function (res) {
            let data = JSON.parse(res)
            console.log(data)
            let resume_details = JSON.parse(data.data.data)
            $("#objective").html(resume_details.objective)
            $("#pro_name").html(resume_details.name)
            $("#pro_address").html(resume_details.address)
            $("#pro_email").html(resume_details.email)
            $("#pro_desig").html(resume_details.desig)
            $("#pro_fname").html(resume_details.personal_details.father_name)
            $("#pro_mname").html(resume_details.personal_details.mother_name)
            $("#pro_declaration").html(resume_details.declaration)
            $("#pro_phone").html(resume_details.phone)
            $("#pro_dob").html(resume_details.date_of_birth)
            unordered(resume_details.personality, "#pro_personality")
            unordered(resume_details.languages_known, "#pro_lang")
            unordered(resume_details.skill, "#pro_skills")
            unordered(resume_details.hobby, "#pro_hobby")
            table(resume_details.educational_qualification, "#pro_education")
            table(resume_details.project_details, "#pro_project")
            table(resume_details.experience_details, "#pro_experience")

            console.log(resume_details.experience_details)



        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
function unordered(data, id) {
    let item = ""
    for (i = 0; i < data.length; i++) {
        item = item + `<li>${data[i]}</li>`
    }
    $(id).html(item)


}
function table(data, id) {
    let table = ""
    for (i = 0; i < data.length; i++) {
        let t_body = ""
        for (const keys in data[i]) {
            t_body = t_body + `<td>${data[i][keys]}</td>`
        }
        table = table + `<tr>` + t_body + `</tr>`
    }


    $(id).html(table)
}

function generatepdf() {


    const page = document.getElementById('test');
    console.log(page)
    var opt = {
        margin:
            1,
        filename: 'Demopdf.pdf',
        image:
            { type: 'jpeg', quality: 0.98 },
        html2canvas:
            { scale: 2 },
        jsPDF:
            { unit: 'in', format: 'letter', orientation: 'portrait' }
    };


    html2pdf().set(opt).from(page).save();
}
