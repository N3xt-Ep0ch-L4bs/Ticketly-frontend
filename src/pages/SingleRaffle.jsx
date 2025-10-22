import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import "./rafflegrid.css";
import TicketSuccessPopup from "../components/Popup"; // ✅ Popup component

export default function SingleRaffle() {
  const { id } = useParams();
  const location = useLocation();

  const savedRaffle = localStorage.getItem("raffleData");

  // --- Dummy fallback raffle data ---
  const dummyRaffle = {
    id: "123",
    title: "Win a Luxury Watch",
    description:
      "This isn't just a watch — it's a statement. The Rolex Submariner Date is one of the most iconic luxury watches ever made. Sleek, bold, and timeless, it's built for those who want more than just timekeeping — they want presence.",
    image: "https://via.placeholder.com/600x400?text=Luxury+Watch",
    endDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    ticketPrice: 0.5,
    maxTickets: 500,
    ticketsSold: 125,
    userTickets: 0,
    raffleOwner: "@raffle_creator",
  };

  // Use passed raffle or fallback
  const raffle =
    location.state?.raffle ||
    (savedRaffle ? JSON.parse(savedRaffle) : dummyRaffle);

  // --- Popup States ---
  const [popupStatus, setPopupStatus] = useState("processing");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [lastBoughtTickets, setLastBoughtTickets] = useState(0);

  // --- Other States ---
  const [timeLeft, setTimeLeft] = useState({});
  const [ticketQuantity, setTicketQuantity] = useState(1);

  // --- Countdown Timer ---
  const calculateTimeLeft = () => {
    if (!raffle?.endDate) return {};
    const end = new Date(raffle.endDate);
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return { message: "Raffle ended" };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [raffle]);

  const ticketsRemaining = raffle.maxTickets - (raffle.ticketsSold || 0);
  const winChance =
    ((raffle.userTickets || 0) + (parseInt(ticketQuantity) || 0)) /
    raffle.maxTickets *
    100;

  // --- Popup Handlers ---
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleBuyTicket = () => {
    const quantity = parseInt(ticketQuantity);
    if (quantity <= 0 || quantity > ticketsRemaining) {
      alert("Please enter a valid ticket quantity.");
      return;
    }

    console.log(`Attempting to buy ${quantity} tickets...`);

    // Step 1️⃣: Show "Processing" popup
    setLastBoughtTickets(quantity);
    setIsPopupOpen(true);
    setPopupStatus("processing");

    // Step 2️⃣: Simulate processing delay
    setTimeout(() => {
      // Step 3️⃣: Show success popup
      setPopupStatus("success");

      // Step 4️⃣: Auto-close after delay
      setTimeout(() => setIsPopupOpen(false), 3000);
    }, 2000);
  };

  // --- Timer Display Component ---
  const TimeBox = ({ value, label }) => (
    <div className="time-box">
      <span className="time-value">{String(value).padStart(2, "0")}</span>
      <span className="time-label">{label}</span>
    </div>
  );

  return (
    <div className="single-raffle-page">
      <div className="main-content-container">
        {/* --- RAFFLE DETAILS SECTION --- */}
        <section className="raffle-detail-card">
          <p className="raffle-owner">
            raffle by <span className="owner-handle">{raffle.raffleOwner}</span>
          </p>

          <div className="raffle-header">
            <h1 className="raffle-title">{raffle.title}</h1>
            <div className="ends-in-countdown">
              <span className="ends-in-label">Ends In:</span>
              {timeLeft.message ? (
                <p className="raffle-ended">{timeLeft.message}</p>
              ) : (
                <div className="countdown-boxes">
                  <TimeBox value={timeLeft.days} label="DAYS" />
                  <TimeBox value={timeLeft.hours} label="HOURS" />
                  <TimeBox value={timeLeft.minutes} label="MINUTES" />
                  <TimeBox value={timeLeft.seconds} label="SECONDS" />
                </div>
              )}
            </div>
          </div>

          <img
            src={raffle.image}
            alt={raffle.title}
            className="raffle-main-img"
          />

          <p className="raffle-description">{raffle.description}</p>
        </section>

        {/* --- PURCHASE SECTION --- */}
        <section className="raffle-purchase-card">
          <div className="purchased-tickets-section">
            <h2>Purchased tickets ({raffle.ticketsSold}/{raffle.maxTickets})</h2>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${(raffle.ticketsSold / raffle.maxTickets) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="join-raffle-section">
            <h2 className="section-title">Join Raffle</h2>
            <div className="ticket-info-row">
              <span className="label">Ticket Price</span>
              <span className="value">{raffle.ticketPrice} SUI</span>
            </div>

            <div className="ticket-info-row">
              <span className="label">Your Tickets</span>
              <span className="value">{raffle.userTickets}</span>
            </div>

            <div className="ticket-info-row quantity-input-row">
              <span className="label">Quantity</span>
              <input
                type="number"
                min="1"
                max={ticketsRemaining}
                value={ticketQuantity}
                onChange={(e) =>
                  setTicketQuantity(
                    Math.max(
                      1,
                      Math.min(parseInt(e.target.value) || 1, ticketsRemaining)
                    )
                  )
                }
                className="quantity-input"
              />
            </div>

            <button
              className="buy-ticket-btn"
              onClick={handleBuyTicket}
              disabled={
                timeLeft.message === "Raffle ended" ||
                ticketsRemaining <= 0 ||
                ticketQuantity < 1
              }
            >
              Buy Ticket
            </button>

            <p className="win-chance-text">
              Your chances of winning now is <strong>{winChance.toFixed(1)}%</strong>.
            </p>
          </div>
        </section>
      </div>

      {/* --- POPUP RENDER --- */}
      <TicketSuccessPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        numberOfTickets={lastBoughtTickets}
        status={popupStatus}
      />
    </div>
  );
}
