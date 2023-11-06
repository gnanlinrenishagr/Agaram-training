import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function App() {
  let [Todo, Changetodo] = useState(["charger", "power bank", "bedsheet", "mobile phone"])
  let [inputvalue, changeinputvalue] = useState("")

  const del = (i) => {
    let updatedtodo = Todo.filter((f, t) => t != i)
    Changetodo(updatedtodo)
  }
  return (
    <div className="App ">
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
      <form>
        <input type="test" onKeyUp={(e) => changeinputvalue(e.target.value)} />
        <button type="button" onClick={() => Changetodo([...Todo, inputvalue])} >Add</button>
      </form>


    </div>
  );
}
export default App;
