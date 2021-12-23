import { Routes, Route, Link } from "react-router-dom";


function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Cats">Cats</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
