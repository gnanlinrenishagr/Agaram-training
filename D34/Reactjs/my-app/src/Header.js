import { Link } from "react-router-dom";

export default function Header() {
    return (<ul>
        <li>
            <Link to={`/`}>Login</Link>
        </li>
        <li>
            <Link to={`/user`}>Users</Link>
        </li>
        <li>
            <Link to={`/todo`}>Todo</Link>
        </li>

    </ul>)
}