import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {

const navigate = useNavigate();

  return (
    <div className="navbar__container">
      <p onClick={() => navigate("/about")} className="navbar__link">About</p>
      <p onClick={() => navigate("/bio")} className="navbar__link">Bio</p>
      <p onClick={() => navigate("/gallery")} className="navbar__link">Gallery</p>
    </div>
  );
}

export default NavBar;
