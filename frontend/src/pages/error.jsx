// src/pages/Error/Error.jsx
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <main className="main bg-dark">
      <div className="error-content">
        <h2>404</h2>
        <p>Oops! Page Not Found</p>
        <button className="transaction-button" onClick={() => navigate("/")}>
          Return to Home
        </button>
      </div>
    </main>
  );
};

export default Error;
