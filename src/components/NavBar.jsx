import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="bg-neutral-800 text-white font-bold border-b-4 border-blue-400 fixed inset-x-0 max-w-7xl top-2 left-5 right-5 min-w-md rounded-xl mx-auto shadow-md shadow-blue-300">
            <div className="flex justify-between items-center mx-5 h-16 ">
                <Link className="bg-gradient-to-r from-blue-300 to-cyan-300 inline-block text-transparent bg-clip-text text-2xl" to="/">
                    Fake eCommerce
                </Link>
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
            </div>
        </header>
    );
};

export default NavBar;
