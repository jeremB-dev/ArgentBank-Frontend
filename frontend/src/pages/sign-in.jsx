import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/authSlice";
import Button from "../components/Button/Button";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(
        loginUser({
          email: username,
          password,
        })
      );

      if (loginUser.fulfilled.match(resultAction)) {
        navigate("/user");
      }

      // Si "rememberMe" est coché, stocker le token dans le localStorage
      if (rememberMe) {
        localStorage.setItem("remeberedEmail", username);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

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
