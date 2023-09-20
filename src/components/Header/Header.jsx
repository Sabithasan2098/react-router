import { Link } from "react-router-dom";

 

const Header = () => {
    return (
        <div>
            <nav  >
                <Link className="mr-4 hover:bg-lime-200 py-2 px-4 rounded-xl" to={"/"}>Home</Link>
                <Link className="mr-4 hover:bg-lime-200 py-2 px-4 rounded-xl" to={"/post"}>Post</Link>
                <Link className="mr-4 hover:bg-lime-200 py-2 px-4 rounded-xl" to={"/about"}>About</Link>
                <Link className="mr-4 hover:bg-lime-200 py-2 px-4 rounded-xl" to={"contact"}>Contact</Link>
                <Link className="hover:bg-lime-200 py-2 px-4 rounded-xl" to={"users"}>Users</Link>
            </nav>
        </div>
    );
};

export default Header;