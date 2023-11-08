import { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function Login(props) {
    let [details, setdetails] = useState({
        email: "lin@gmail.com",
        password: "123456"
    })
    const navigate = useNavigate();
    // let user = props.setLogin(true)
    // { props.loggedin }
    const checkLogin = () => {
        if (details.email == "lin@gmail.com" && details.password == "123456") {

            props.setLogin({
                email: details.email,
                login: true
            });
            navigate('/todo')
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
                    <input type="email" defaultValue={details.email} onKeyUp={(e) => setdetails({
                        ...details,
                        email: e.target.value
                    })} />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" defaultValue={details.password} onKeyUp={(e) => setdetails({
                        ...details,
                        password: e.target.value
                    })} />
                </div>
                <button type="button" onClick={() => checkLogin()}>Login</button>
            </form>

        </div>
    )
}