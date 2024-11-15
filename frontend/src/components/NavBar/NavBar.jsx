// NavBar.jsx
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <div>
        <Link to="/sign-in" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <span>&nbsp;Sign In</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
