import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Add } from './Add';
import Header from '../Header';
function Todos(props) {
  let [Todo, Changetodo] = useState(["charger", "power bank", "bedsheet", "mobile phone"])

  const del = (i) => {
    let updatedtodo = Todo.filter((f, t) => t != i)
    Changetodo(updatedtodo)
  }


  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <Table striped bordered hover variant="primary">
        <tr>
          <th>Order</th>
          <th>Value</th>
          <th>Delete</th>
        </tr>
        {Todo.map((t, i) => <tr>
          <td>{i + 1}</td>
          <td>{t}</td>
          <td><button type='button' onClick={() => del(i)}>Delete</button></td>
        </tr>)}
      </Table>
      <Add item={Todo} setitem={Changetodo} />
      {props.loggedin.login ? <h1>welcome {(props.loggedin.email)}</h1> : <h1>"login first</h1>}
      <Header />
    </div>
  );
}

export default Todos;
