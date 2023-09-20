import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div className="nav">
      <nav >
        < NavLink className="mr-4 hover:bg-lime-200 py-2 px-4 rounded-xl" to={"/"}>
          Home
        </ NavLink>
        < NavLink
          className="mr-4 hover:bg-lime-200 py-2 px-4 rounded-xl"
          to={"/post"}
        >
          Post
        </ NavLink>
        < NavLink
          className="mr-4 hover:bg-lime-200 py-2 px-4 rounded-xl"
          to={"/about"}
        >
          About
        </ NavLink>
        < NavLink
          className="mr-4 hover:bg-lime-200 py-2 px-4 rounded-xl"
          to={"contact"}
        >
          Contact
        </ NavLink>
        < NavLink className="hover:bg-lime-200 py-2 px-4 rounded-xl" to={"users"}>
          Users
        </ NavLink>
      </nav>
    </div>
  );
};

export default Header;
