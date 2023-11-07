import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Add } from './Add';
import Header from '../Header';
function Users() {
    let [User, ChangeUser] = useState(["gnanlin", "renlin", "lin", "reni"])


    const del = (i) => {
        let updatedUser = User.filter((f, t) => t != i)
        ChangeUser(updatedUser)
    }
    return (
        <div className="App">
            <h1>USERLIST</h1>
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
            <Header />
        </div>
    );
}

export default Users;

