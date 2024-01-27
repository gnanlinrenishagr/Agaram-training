
function check_ajax() {
    $("#tittle").toggle()
    $.ajax({
        type: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {},
        success: function (response) {

            let tabledata = ""
            for (i = 0; i < response.length; i++) {
                tabledata = tabledata + `<tr>
               <th scope="col">${response[i].userId}</th>
               <th scope="col">${response[i].title}</th>
               <th scope="col"><button onclick="comments(${response[i].id})">${response[i].id}</button></th>
               <th scope="col">${response[i].body}</th>
             </tr>
              `
            }
            $("#data").html(tabledata)
            console.log("response", tabledata)

        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
function comments(id) {
    $.ajax({
        type: "get",
        url: "https://jsonplaceholder.typicode.com/posts/" + id,
        data: {},
        success: function (response) {
            console.log(response)

        },
        error: function (error) {
            console.log("err", error)
        }
    })
    $.ajax({
        type: "get",
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        data: {},
        success: function (response) {
            console.log(response)

        },
        error: function (error) {
            console.log("err", error)
        }
    })
    $.ajax({
        type: "get",
        url: "https://jsonplaceholder.typicode.com/comments?postId=1",
        data: {},
        success: function (response) {
            console.log(response)

        },
        error: function (error) {
            console.log("err", error)
        }
    })
}
function new_input() {
    $("#forminput").toggle()

}
let tempele = {

}
function temp(ele) {

    tempele[ele.name] = ele.value
    console.log(tempele)

}
function add() {

    $.ajax({
        type: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {tempele},

        success: function (res) {
            // nd = res.push(tempele)
            //   let res=ori_data
            console.log("response",res)
            // console.log()
        },
        error: function (error) {
            console.log("err", error)
        }
    })


}

