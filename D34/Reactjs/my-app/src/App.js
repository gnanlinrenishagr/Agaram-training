import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todos from './Items/Todo';
import Users from './Items/User';
import Login from './login';
import { useState } from 'react';

function App() {
  let [isuser, setisuser] = useState({
    login: false,
    email: ""
  })

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Login loggedin={isuser} setLogin={setisuser} />,
    },
    {
      path: "/todo",
      element: <Todos loggedin={isuser} setLogin={setisuser} />,
    },
    {
      path: "/user",
      element: <Users />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
