// src/pages/Error/Error.jsx
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <main className="main bg-dark">
      <div className="error-content">
        <div className="error-group">
          <div className="shadow-container">
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
          <h2>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h2>
        </div>
        <p>Oops! Page Not Found</p>
        <button className="transaction-button" onClick={() => navigate("/")}>
          Return to Home
        </button>
      </div>
    </main>
  );
};

export default Error;
