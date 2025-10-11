import "../App.css";

 function RaffleCard({ raffle }) {
  return (
    <div className="raffle-card">
      <img src={raffle.img} alt={raffle.title} className="raffle-img" />

      <div className="raffle-info">
        <h3 className="raffle-title">{raffle.title}</h3>
        <p className="raffle-desc">
          A unique chance to win a premium {raffle.title.toLowerCase()}!
        </p>

        <div className="details">
          <p><span>Ticket Price:</span> {raffle.price}</p>
          <p><span>Time remaining:</span> {raffle.time}</p>
          <p><span>Participants:</span> {raffle.participants}</p>
        </div>

        <button
          className={`raffle-btn ${
            raffle.status === "Check winner" ? "expired" : ""
          }`}
        >
          {raffle.status}
        </button>
      </div>
    </div>
  );
}
export default RaffleCard