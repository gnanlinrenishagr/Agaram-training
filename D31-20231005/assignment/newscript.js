let resume_builder = {
    "Objective": "To become a good developer",
    "Name": "Gnanlin Renisha G R",
    "Address": "25-7/a1",
    "Email": "gnaninrenisha@gmail.com",
    "personal_details": {
        "Father Name": "S Gnanaseelan",
        "Mother Name": "M Renuka"
    },
    "DOB": "16-04-2002",
    "Skill": [
        "html",
        "css",
        "javascript"
    ],
    "hobby": [
        "music",
        "playing chess",
        "gardening"
    ],
    "Educational Qualification": [
        {
            "inst_name": "CMHSS",
            "level": "12",
            "year": "2019",
            "Percentage": "80"
        },
        {
            "inst_name": "CMHSS",
            "level": "10",
            "year": "2017",
            "Percentage": "96"
        }
    ],
    "Project Details": [
        {
            "projecttitle": "Measuring the growth of economic freedom",
            "description": "An index of economic index",
            "pyear": "2023"
        }
    ],
    "Declaration": "I hereby declare the above given information is true unto my knowledge"
}
// alert(resume_builder.Objective)

let each_tmp = {

}
function storeddata(){
    document.getElementById("inputobj").value=resume_builder.Objective
    document.getElementById("inputname").value=resume_builder.Name
    document.getElementById("inputadd").value=resume_builder.Address
    document.getElementById("inputmail").value=resume_builder.Email
    document.getElementById("inputdec").value=resume_builder.Declaration
    document.getElementById("inputfn").value=resume_builder.personal_details["Father Name"]
    document.getElementById("inputmn").value=resume_builder.personal_details["Mother Name"]
    document.getElementById("dob").value=resume_builder.DOB
    for(i=0;i<resume_builder.resume_Skill.length;i++){
        document.getElementById("skillitem").value=resume_builder.resume_Skill[i]
    }

}

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
    display()
    
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
            display()
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
        display()
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
    display()
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

    display()
    displayarray(p_key, ski)

}
function handmulobject(ele) {

    each_tmp[ele.name] = ele.value

}
function displayobject(p_key, para) {
    let html = ''
    for (i = 0; i < resume_builder[p_key].length; i++) {
        let data = resume_builder[p_key][i]
        for (const key in data) {
            html = html + `<tr><td>${key}</td><td>${data[key]}</td><td><button type='button'class='btn btn-primary' onclick="del1('${p_key}','${data[key]}','${key}','${para}')">Delete</button></td></tr>`

            console.log(`${key}:${data[key]}`)
        }
    }
    document.getElementById(para).innerHTML = html
}
function del1(p_key, dkey, key, para) {
    console.log("hi")
    let data = []
    for (i = 0; i < resume_builder[p_key].length; i++) {

        let keysof = resume_builder[p_key]
        let nd = keysof[i][key]
        console.log(nd)
        if (nd != dkey) {
            data.push(keysof[i])
        }
    }
    resume_builder[p_key] = data
    display()
    displayobject(p_key, para)
}
function display() {

    document.getElementById("display_data").innerHTML = JSON.stringify(resume_builder, undefined, 2)
    console.log(resume_builder)
}
storeddata()