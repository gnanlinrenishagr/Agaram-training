let resume_builder = {

}
let each_tmp = {

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

    if (ele && ski) {

        let element = document.getElementById(ele)

        if (element.value == "") {

            alert("Enter your" + " " + p_key + " " + "here")
            element.focus()
        }
        else {

            resume_builder[p_key].push(element.value)
        }
        element.value = ""
        displayarray(p_key)

    }
    else {

        resume_builder[p_key].push(each_tmp)
        for (i = 0; i < resume_builder[p_key].length; i++) {

            ndlist = Object.keys(resume_builder[p_key][i])

            for (i = 0; i < ndlist.length; i++) {

                document.getElementById(ndlist[i]).value = ""
            }
        

        }
        displayarrayobject(each_tmp)
        each_tmp = {}

    }


    display()

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
function displayarrayobject(each_tmp){
    
    htmldata=""
    for (const key in each_tmp){
        
        console.log(`${key}:${each_tmp[key]}`)
    }
    
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
function display() {

    document.getElementById("display_data").innerHTML = JSON.stringify(resume_builder, undefined, 2)
}

function handmulobject(ele) {

    each_tmp[ele.name] = ele.value

}

