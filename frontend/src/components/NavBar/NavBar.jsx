import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, getUserProfile } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, userData } = useSelector((state) => state.auth);

  // Effectue une action de type "getUserProfile" si le token et l'utilisateur sont presents.
  useEffect(() => {
    if (token && !userData) {
      dispatch(getUserProfile());
    }
  }, [dispatch, token, userData]);

  // Gere la deconnexion de l'utilisateur.
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Logo />
      <div className="main-nav-links">
        {token ? (
          <>
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              <span>
                &nbsp;
                {userData
                  ? `${userData.firstName} ${userData.lastName}`
                  : "User"}
              </span>
            </Link>
            <Link to="/" className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              <span>&nbsp;Sign Out</span>
            </Link>
          </>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <span>&nbsp;Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
