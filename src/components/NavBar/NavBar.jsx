import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar__container">
      <Link to="/about">
      <p className="navbar__link">About</p>
      </Link>
      <Link to="/gallery">
      <p className="navbar__link">Gallery</p>
      </Link>
    </div>
  );
}

export default NavBar;
