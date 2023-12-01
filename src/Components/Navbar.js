import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-links-container">
        <div className="home-nav">
          <Link to="/" as={NavLink} className="link"></Link>
        </div>
      </div>

      <div className="links-container">
      <Link to="/" as={NavLink} className="link">Home</Link>
        <Link to="/about" as={NavLink} className="link">About</Link>
        <Link to="/menu" as={NavLink} className="link">Menu</Link>
        <Link to="/reviews" as={NavLink} className="link">Reviews</Link>
      </div>

    </div>
  );
};


export default Navbar;