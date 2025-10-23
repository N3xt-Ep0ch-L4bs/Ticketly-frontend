import React from "react";
import { useNavigate } from "react-router-dom";
import "./components.css";

export default function LoserPage() {
  const navigate = useNavigate();

  return (
    <div className="loser-container">
      <div className="loser-card">
        <h2>😔 Better Luck Next Time!</h2>
        <p className="loser-text">
          Unfortunately, you didn’t win this raffle.
        </p>
        <p className="loser-subtext">
          Don’t give up — more raffles are waiting for you!
        </p>

        <div className="loser-buttons">
          <button className="btn-secondary" onClick={() => navigate("/dashboard")}>
            🎟️ View Other Raffles
          </button>
          <button className="btn-tertiary" onClick={() => navigate("/")}>
            🏠 Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
