import { useState } from 'react';
import Todos from './Items/Todo';
import Header from './Header';

export default function Login(props) {
    let [details, setdetails] = useState({
        email: "lin@gmail.com",
        password: "123456"
    })
    // let user = props.setLogin(true)
    // { props.loggedin }
    const checkLogin = () => {
        if (details.email == "lin@gmail.com" && details.password == "123456") {

            props.setLogin(true)

        }
        else {

            props.setLogin(false)

        }
    }

    return (
        <div className="App">
            {JSON.stringify(details)}
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
            <Header />
        </div>
    )
}