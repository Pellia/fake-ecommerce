import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="bg-neutral-800 text-white font-bold">
            <nav>
                <ul className="flex gap-5 justify-center p-2 text-lg">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
