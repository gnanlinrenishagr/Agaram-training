import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Add } from './Add';
import Header from '../Header';
import axios from 'axios'
function Users() {

    let [timer, setTimer] = useState(0)
    let [isstart, setStart] = useState(true)
    useEffect(() => {
        if (isstart) { setTimer(timer + 1) }
    }, [timer, isstart])
    // let [User, ChangeUser] = useState(["gnanlin", "renlin", "lin", "reni"])


    // const del = (i) => {
    //     let updatedUser = User.filter((f, t) => t != i)
    //     ChangeUser(updatedUser)
    // }
    // let checkAxios = () => {
    //     axios({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.typicode.com/posts'
    //     })
    //         .then(function (response) {
    //             console.log(response)
    //         })
    // }
    // let checkpostAxios = () => {

    //     axios({
    //         method: 'post',
    //         url: 'https://jsonplaceholder.typicode.com/posts',
    //         data: {
    //             "userId": 1,
    //             "id": 1,
    //             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //             "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cum molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response)
    //         });
    // }
    // useEffect(() => {checkAxios() }, [User])
    return (
        <div className="App">
            <p style={{ marginTop: '300px' }}>Timer</p>
            <code style={{fontSize:'30px'}}><b>{timer}</b></code>
            <br></br>
            <button onClick={() => setStart(!isstart)}>{isstart ? "Stop" : "Start"}</button> {        }
            <button onClick={async () => { await setStart(false); setTimer(0) }}>Reset</button>
            {/* <h1>USERLIST</h1>
            <Table striped bordered hover variant="primary">
                <tr>
                    <th>Order</th>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
                {User.map((t, i) => <tr>
                    <td>{i + 1}</td>
                    <td>{t}</td>
                    <td><button type='button' onClick={() => del(i)}>Delete</button></td>
                </tr>)}
            </Table>
            <Add item={User} setitem={ChangeUser} />
            <button type="button" onClick={() => checkAxios()}>Get axios</button>
            <button type="button" onClick={() => checkpostAxios()}>Post axios</button>
            <Header /> */}
        </div>
    );
}

export default Users;

