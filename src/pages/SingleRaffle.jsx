import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./pages.css";
import TicketSuccessPopup from "../components/Popup";
import toast from "react-hot-toast";

export default function SingleRaffle({ raffle: passedRaffle }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const savedRaffle = localStorage.getItem("raffleData");

  const dummyRaffle = {
    id: "123",
    title: "Win a Luxury Watch",
    description:
      "This isn't just a watch — it's a statement. The Rolex Submariner Date is one of the most iconic luxury watches ever made.",
    image: "https://via.placeholder.com/600x400?text=Luxury+Watch",
    endDate: new Date(Date.now() + 10 * 1000).toISOString(), // 10s for demo
    ticketPrice: 0.5,
    maxTickets: 500,
    ticketsSold: 125,
    userTickets: 5,
    raffleOwner: "@raffle_creator",
  };

  const raffle =
    passedRaffle ||
    location.state?.raffle ||
    (savedRaffle ? JSON.parse(savedRaffle) : dummyRaffle);

  if (!raffle.endDate)
    raffle.endDate = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();

  const [timeLeft, setTimeLeft] = useState({});
  const [raffleStatus, setRaffleStatus] = useState("active");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [popupStatus, setPopupStatus] = useState("processing");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [lastBoughtTickets, setLastBoughtTickets] = useState(0);

  // countdown logic
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = new Date(raffle.endDate) - now;

      if (diff <= 0) {
        setTimeLeft({ message: "Raffle ended" });
        setRaffleStatus("expired");
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [raffle.endDate]);

  const ticketsRemaining = raffle.maxTickets - (raffle.ticketsSold || 0);
  const winChance =
    (((raffle.userTickets || 0) + (parseInt(ticketQuantity) || 0)) /
      raffle.maxTickets) *
    100;

  // buy ticket handler
  const handleBuyTicket = () => {
    const quantity = parseInt(ticketQuantity);
    if (quantity <= 0 || quantity > ticketsRemaining) {
      alert("Please enter a valid ticket quantity.");
      return;
    }
    setLastBoughtTickets(quantity);
    setIsPopupOpen(true);
    setPopupStatus("processing");

    setTimeout(() => {
      setPopupStatus("success");
      setTimeout(() => setIsPopupOpen(false), 3000);
    }, 2000);
  };

  // ✅ show toast only once when raffle ends
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (timeLeft.message === "Raffle ended" && !toastShownRef.current) {
      toastShownRef.current = true; // mark toast as shown
      toast.success("Raffle has ended!");

      const userIsWinner = Math.random() > 0.5; // demo logic
      setTimeout(() => {
        if (userIsWinner) {
          navigate("/winner", { state: { raffle, user: { name: "Samuel" } } });
        } else {
          navigate("/loser", { state: { raffle } });
        }
      }, 2000);
    }
  }, [timeLeft, navigate, raffle]);

  const TimeBox = ({ value, label }) => (
    <div className="time-box">
      <span className="time-value">{String(value).padStart(2, "0")}</span>
      <span className="time-label">{label}</span>
    </div>
  );

  return (
    <div className="single-raffle-page">
      <div className="main-content-container">
        <section className="raffle-detail-card">
          <p className="raffle-owner">
            raffle by <span className="owner-handle">{raffle.raffleOwner}</span>
          </p>

          <div className="raffle-header">
            <h1 className="raffle-title">{raffle.title}</h1>
            <div className="ends-in-countdown">
              <span className="ends-in-label">
                {raffleStatus === "active" ? "Ends In:" : "Expired:"}
              </span>
              {timeLeft.message ? (
                <p className="raffle-ended">Expired - Check Winner</p>
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

        {raffleStatus === "active" && (
          <section className="raffle-purchase-card">
            <div className="purchased-tickets-section">
              <h2>
                Purchased tickets ({raffle.ticketsSold}/{raffle.maxTickets})
              </h2>
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
                Your chances of winning now is{" "}
                <strong>{winChance.toFixed(1)}%</strong>.
              </p>
            </div>
          </section>
        )}
      </div>

      <TicketSuccessPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        numberOfTickets={lastBoughtTickets}
        status={popupStatus}
      />
    </div>
  );
}
