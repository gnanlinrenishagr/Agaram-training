import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'
export default function Login(props) {
    let [details, setdetails] = useState({
        email: "",
        password: ""
    })
    // const navigate = useNavigate();
    // let user = props.setLogin(true)
    // { props.loggedin }
    const checkLogin = () => {
        // axios({
        //     method: 'post',
        //     url: 'http://agaram.academy/api/action.php',
        //     data: {
        //         request: "candidate_login",
        //         email: details.email,
        //         password: details.password
        //     }
        // })
        //     .then(function (response) {
        //         console.log("res",response)
        //     })
        // axios({
        //     method: 'get',
        //     url: 'http://agaram.academy/api/action.php',
        //     data: {
        //       request:"“getAllMembers"
        //     }
        // })
        //     .then(function (response) {
        //         console.log(response)
        //     })

        if (details.email == "lin@gmail.com" && details.password == "123456") {

            props.setLogin({
                email: details.email,
                login: true
            });
            // navigate('/todo')
        }
        else {

            props.setLogin(false)

        }
    }
  
    return (
        <div className="App">
            {/* {JSON.stringify(details)} */}
            <form>
                <div className="mb-3">
                    <label >Email address</label>
                    <input type="email" onKeyUp={(e) => setdetails({
                        ...details,
                        email: e.target.value
                    })} />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" onKeyUp={(e) => setdetails({
                        ...details,
                        password: e.target.value
                    })} />
                </div>
                <button type="button" onClick={() => checkLogin()}>Login</button>
            </form>

        </div>
    )
}