import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./components.css";

export default function WinnerPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const raffle = state?.raffle || {};
  const user = state?.user || { name: "Winner" };
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    toast.success("🎉 Raffle claimed successfully!");
  };

  return (
    <div className="winner-container">
      <div className="winner-card">
        <img src={raffle?.image} alt={raffle?.title} className="winner-img" />

        {!claimed ? (
          <>
            <h2>🎉 Congratulations, {user.name}!</h2>
            <p className="winner-text">
              You’re the lucky winner of <strong>{raffle?.title}</strong>!
            </p>

            <div className="winner-buttons">
              <button className="btn-primary" onClick={handleClaim}>
                🎁 Claim Your Raffle
              </button>
              <button
                className="btn-secondary"
                onClick={() => navigate("/dashboard")}
              >
                🏠 Back to Dashboard
              </button>
              <button className="btn-tertiary" onClick={() => navigate("/")}>
                🔙 Return to Home
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>✅ Prize Claimed</h2>
            <p className="winner-text">
              Congratulations, {user.name}! You’ve successfully claimed your prize for{" "}
              <strong>{raffle?.title}</strong>.
            </p>
            <div className="winner-buttons">
              <button
                className="btn-secondary"
                onClick={() => navigate("/dashboard")}
              >
                🏠 Back to Dashboard
              </button>
              <button className="btn-tertiary" onClick={() => navigate("/")}>
                🔙 Return to Home
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
