import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header