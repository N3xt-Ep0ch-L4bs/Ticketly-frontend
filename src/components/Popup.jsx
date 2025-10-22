// TicketSuccessPopup.jsx
import React from "react";
import "../App.css";

const TicketSuccessPopup = ({ isOpen, onClose, status, numberOfTickets }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div
        className={`popup-content ${
          status === "processing" ? "processing" : "success"
        }`}
      >
        {status === "processing" ? (
          <>
            <div className="spinner"></div>
            <h2 className="popup-title">Processing...</h2>
            <p className="popup-message">
              Please wait while we confirm your ticket purchase.
            </p>
          </>
        ) : (
          <>
            <div className="success-icon-container">
              <svg
                className="success-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark-check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            <h2 className="popup-title">Success!</h2>
            <p className="popup-message">
              You now own {numberOfTickets} tickets for this raffle.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default TicketSuccessPopup;
