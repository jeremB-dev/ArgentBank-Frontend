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

  // Récupère le profil utilisateur si le token existe mais que les données utilisateur ne sont pas encore chargées
  useEffect(() => {
    if (token && !userData) {
      dispatch(getUserProfile());
    }
  }, [dispatch, token, userData]);

  // Déconnecte l'utilisateur, vide le state et redirige vers la page d'accueil
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
                {userData ? userData.userName : "User"}
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
