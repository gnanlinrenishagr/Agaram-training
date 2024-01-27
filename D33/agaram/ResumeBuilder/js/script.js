let resume_builder = {

}
let each_tmp = {

}
let username = "gnanlinrenisha"

let parsedata = (ele, p_key) => {
    if (p_key) {

        resume_builder[p_key] = {}

        if (resume_builder[p_key]) {

            resume_builder[p_key] = {
                ...resume_builder[p_key]
            }
        }

        resume_builder[p_key][ele.name] = ele.value
    }
    else {

        resume_builder[ele.name] = ele.value
    }

    display()
}

let handmulkey = (p_key, ski, ele = null) => {

    if (!resume_builder[p_key]) {

        resume_builder[p_key] = []
        console.log("hi")
    }
    if (ele) {
        let element = document.getElementById(ele)
        if (element.value) {

            resume_builder[p_key].push(element.value)
            display()
            element.value = ""
            displayarray(p_key, ski)
        }
        else {

            alert("Enter your" + " " + p_key + " " + "here")
            element.focus()
        }
    }

    else {
        resume_builder[p_key].push(each_tmp)

        for (let objects of resume_builder[p_key]) {
            keyofobject = Object.keys(objects)

            for (each of keyofobject) {
                document.getElementById(each).value = ""
            }
        }

        displayobject(p_key, ski)
        each_tmp = {}
        display()
    }


}



let displayarray = (p_key, ski) => {

    htmldata = ""
    for (let eachdata of resume_builder[p_key]) {

        htmldata = htmldata + `<badge class="p-2">${eachdata}</badge>` + `<button type="button" class="btn btn-primary close p-2" aria-label="Close" onclick="del('${p_key}','${eachdata}','${ski}')">
        <span aria-hidden="true">&times;</span>
      </button>`


    }
    document.getElementById(ski).innerHTML = htmldata
    display()
}


let del = (p_key, ele, ski) => {

    let del_list = resume_builder[p_key].filter((del_item) => del_item != ele)

    resume_builder[p_key] = del_list
    display()
    displayarray(p_key, ski)

}
let handmulobject = (ele) => {

    each_tmp[ele.name] = ele.value

}
let displayobject = (p_key, para) => {
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
let del1 = (p_key, ele, para) => {


    let data = resume_builder[p_key].filter((del_obj) => resume_builder[p_key][ele] != del_obj)

    resume_builder[p_key] = data
    display()
    displayobject(p_key, para)
}
let display = () => {
    document.getElementById("display_data").innerHTML = JSON.stringify(resume_builder, undefined, 2)
    submit()


}


let create = () => {

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
            //location.assign("Resume Bulider/index1.html")

        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
let seeresume = () => {
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
            for (let eachdata of data.data.length) {
                tabledata = tabledata + `<tr>
                <th>${eachdata.id}</th>
                <td>${eachdata.user}</td>
                <td><button type="button" class="btn btn-primary" onclick="delresume(${eachdata.id})">Delete</button></td>
                <td><a href="list.html?id=${eachdata.id}">Display My Resume</a></td>
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
let delresume = (id) => {
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


let listresume = (id) => {
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
let submit = () => {
    if (resume_builder.objective, resume_builder.name, resume_builder.address, resume_builder.email, resume_builder.desig, resume_builder.personal_details.father_name, resume_builder.personal_details.mother_name,
        resume_builder.declaration, resume_builder.phone, resume_builder.date_of_birth, resume_builder.personality, resume_builder.languages_known, resume_builder.skill,
        resume_builder.hobby, resume_builder.educational_qualification, resume_builder.project_details && resume_builder.experience_details) {
        $('#submit').prop('disabled', false)

    }
   
}

let unordered = (data, id) => {
    let item = ""
    for (let eachdata of data.length) {
        item = item + `<li>${eachdata}</li>`
    }
    $(id).html(item)


}
let table = (data, id) => {
    let table = ""
    for (eachdata of data) {
        let t_body = ""
        for (const keys in eachdata) {
            t_body = t_body + `<td>${eachdata[keys]}</td>`
        }
        table = table + `<tr>` + t_body + `</tr>`
    }


    $(id).html(table)
}

let generatepdf = () => {


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
