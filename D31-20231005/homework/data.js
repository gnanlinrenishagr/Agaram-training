let resume_builder = {

}
let each_tmp = {

}
function parseData(ele, p_key) {
    if (p_key) {
        if (resume_builder[p_key]) {
            resume_builder[p_key] = { ...resume_builder[p_key] }

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
function handlemulkey(p_key, ele, para) {
    if (!resume_builder[p_key]) {
        resume_builder[p_key] = []
    }
    if (ele) {
        element = document.getElementById(ele)
        if (element.value == "") {
            alert("Enter your" + " " + p_key)
            element.focus()
        }
        else {
            resume_builder[p_key].push(element.value)
        }

        element.value = ""
        display()
        displaylist(p_key, para)
    }
    else {
        console.log("hi")
        resume_builder[p_key].push(each_tmp)
        for (i = 0; i < resume_builder[p_key].length; i++) {
            keyofobject = Object.keys(resume_builder[p_key][i])
            for (i = 0; i < keyofobject.length; i++) {
                document.getElementById(keyofobject[i]).value = ""
            }
        }
        displayobject(p_key, ski)
        each_tmp = {}
        display()

    }

}
function displaylist(p_key, para) {
    html = ''
    data = [...resume_builder[p_key]]
    for (i = 0; i < data.length; i++) {
        html = html + `<badge class="p-2">${data[i]}<badge/>` + `<button type="button" class="btn btn-outline-primary" onclick="del('${p_key}','${data[i]}','${para}')">Delete</button>
        `
    }
    document.getElementById(para).innerHTML = html
    display()

}
function del(p_key, data, para) {
    olddata = [...resume_builder[p_key]]
    newdata = []
    for (i = 0; i < olddata.length; i++) {
        if (data != olddata[i]) {
            newdata.push(olddata[i])
        }
    }
    resume_builder[p_key] = newdata
    display()
    displaylist(p_key, para)
}
function parseData1(ele) {
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
}