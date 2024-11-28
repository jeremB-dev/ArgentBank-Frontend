import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/authSlice";
import Button from "../components/Button/Button";

// Composant de connexion gérant le formulaire d'authentification
const SignIn = () => {
  // États du formulaire
  const [username, setUsername] = useState(""); // Email de l'utilisateur
  const [password, setPassword] = useState(""); // Mot de passe
  const [rememberMe, setRememberMe] = useState(false); // Option "Se souvenir de moi"
  // Hooks React/Redux pour la gestion d'état et la navigation
  const dispatch = useDispatch(); // Dispatch des actions Redux
  const navigate = useNavigate(); // Navigation programmatique
  const { status, error } = useSelector((state) => state.auth); // État de l'authentification

  // Gère la soumission du formulaire : authentifie l'utilisateur et redirige vers son profil en cas de succès
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(
        loginUser({
          email: username,
          password,
          rememberMe,
        })
      );

      if (loginUser.fulfilled.match(resultAction)) {
        navigate("/user");
      }

      // Gère la persistance des données de connexion selon le choix "Se souvenir de moi"
      if (rememberMe) {
        localStorage.setItem("remeberedEmail", username);
        localStorage.setItem("token", resultAction.payload.token);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  // Met à jour l'état "Se souvenir de moi" selon la valeur de la checkbox
  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleRememberMe}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <Button
            btnText={status === "loading" ? "loading..." : "Sign In"}
            className="edit-button"
            type="submit"
            disabled={status === "loading"}
          />
        </form>
        {error && <p className="errorConexion">{error}</p>}
      </section>
    </main>
  );
};

export default SignIn;
