import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import "./pages.css";

const UploadRaffle = () => {
  const [step, setStep] = useState(1);

const [raffleData, setRaffleData] = useState({
  image: null,
  title: "",
  description: "",
  type: "",
  ticketPrice: "",
  maxTickets: "",
  maxPerWallet: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
});


  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const reviewRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setRaffleData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleShare = async () => {
    if (!reviewRef.current) return;
    const canvas = await html2canvas(reviewRef.current);
    const imageURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "raffle_review.png";
    link.click();
  };

 const calculateTimeLeft = () => {
  if (!raffleData.startDate || !raffleData.endDate) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, message: "Set dates to start countdown" };
  }

  const startDateTime = new Date(`${raffleData.startDate}T${raffleData.startTime || "00:00"}`);
  const endDateTime = new Date(`${raffleData.endDate}T${raffleData.endTime || "00:00"}`);
  const now = new Date();

  if (now < startDateTime) {
    const difference = startDateTime - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      message: "Raffle has not started yet",
    };
  }

  if (now > endDateTime) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, message: "Raffle ended" };
  }

  const difference = endDateTime - now;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    message: "Raffle running",
  };
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, [raffleData]);

  return (
    <div className="prize-setup-container">
      {/* STEP 1 */}
      {step === 1 && (
        <div className="prize-card">
          <h2 className="prize-title">Prize setup</h2>
          <p className="prize-subtitle">Tell us about the amazing prize you're offering</p>

          <div className="upload-section">
            <label className="upload-box">
              {raffleData.image ? (
                <img
                  src={URL.createObjectURL(raffleData.image)}
                  alt="Preview"
                  className="preview-image"
                />
              ) : (
                <div className="upload-placeholder">
                  <span className="upload-icon">
                    <img src="src/assets/image.png" alt="upload icon" />
                  </span>
                  <p>Upload Prize Image</p>
                  <small>Drag and drop or click to browse</small>
                </div>
              )}
              <input type="file" name="image" onChange={handleChange} hidden />
            </label>
          </div>

          <div className="form-group">
            <label>Define your prize</label>
            <input
              type="text"
              name="title"
              placeholder="Define your prize"
              className="input-field"
              value={raffleData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Prize Description</label>
            <textarea
              name="description"
              className="textarea-field"
              placeholder="Describe what makes this prize special"
              value={raffleData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Prize type</label>
            <select
              name="type"
              className="select-field"
              value={raffleData.type}
              onChange={handleChange}
            >
              <option value="">Select a prize type</option>
              <option>Physical</option>
              <option>Cash rewards</option>
              <option>Service</option>
            </select>
          </div>

          <button className="next" onClick={handleNext}>
            Next step →
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="prize-card">
          <h2 className="prize-title">Ticket Settings</h2>

          <div className="form-group">
            <label>Ticket Price</label>
            <input
              type="number"
              name="ticketPrice"
              className="input-field"
              placeholder="Enter ticket price"
              value={raffleData.ticketPrice}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Max Tickets</label>
            <input
              type="number"
              name="maxTickets"
              className="input-field"
              placeholder="Enter max tickets"
              value={raffleData.maxTickets}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Max Tickets Per Wallet</label>
            <input
              type="number"
              name="maxPerWallet"
              className="input-field"
              placeholder="Enter max tickets per wallet"
              value={raffleData.maxPerWallet}
              onChange={handleChange}
            />
          </div>

          <div className="nav-buttons">
            <button onClick={handleBack} className="back-btn">← Back</button>
            <button onClick={handleNext} className="next-btn">Next →</button>
          </div>
        </div>
      )}

      {step === 3 && (
  <div className="prize-card">
    <h2 className="prize-title">Raffle Duration</h2>

    {/* Countdown */}
    
    {/* Start Date & Time */}
    <div className="form-group">
      <label>Start Date</label>
      <input
        type="date"
        name="startDate"
        className="input-field"
        value={raffleData.startDate}
        onChange={handleChange}
      />
      <label>Start Time</label>
      <input
        type="time"
        name="startTime"
        className="input-field"
        value={raffleData.startTime}
        onChange={handleChange}
      />
    </div>

    {/* End Date & Time */}
    <div className="form-group">
      <label>End Date</label>
      <input
        type="date"
        name="endDate"
        className="input-field"
        value={raffleData.endDate}
        onChange={handleChange}
      />
      <label>End Time</label>
      <input
        type="time"
        name="endTime"
        className="input-field"
        value={raffleData.endTime}
        onChange={handleChange}
      />
    </div>
    {raffleData.endDate && (
      <div className="countdown">
        {timeLeft.message && <p>{timeLeft.message}</p>}
        <span>{timeLeft.days}d </span>
        <span>{timeLeft.hours}h </span>
        <span>{timeLeft.minutes}m </span>
        <span>{timeLeft.seconds}s</span>
      </div>
    )}


    <div className="nav-buttons">
      <button onClick={handleBack} className="back-btn">← Back</button>
      <button onClick={handleNext} className="next-btn">Review →</button>
    </div>
  </div>
)}


      {/* STEP 4 & 5 REMAIN THE SAME */}
      {step === 4 && (
        <div className="review-card" ref={reviewRef}>
          <div className="prize-title">
            <h2 className="prize-title">Review & Confirm</h2>
            <p>Double check the below before creating your raffle</p>
          </div>
          <div className="review-section">
            {raffleData.image && (
              <img
                src={URL.createObjectURL(raffleData.image)}
                alt="Preview"
                className="preview-image"
              />
            )}
            <div className="review-p">
              <p><strong>Prize:</strong> {raffleData.title}</p>
              <p><strong>Description:</strong> {raffleData.description}</p>
              <p><strong>Type:</strong> {raffleData.type}</p>
              <p><strong>Ticket Price:</strong> {raffleData.ticketPrice}</p>
              <p><strong>Max Tickets:</strong> {raffleData.maxTickets}</p>
              <p><strong>Max Per Wallet:</strong> {raffleData.maxPerWallet}</p>
              <p><strong>Start Date:</strong> {raffleData.startDate}</p>
              <p><strong>End Date:</strong> {raffleData.endDate}</p>
            </div>
          </div>

          <div className="nav-buttons">
            <button onClick={handleBack} className="back-btn">← Back</button>
            <button onClick={handleNext} className="next-btn">Create Raffle </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="congratulations-card">
          <div className="congratulations-title">
            <img src="src/assets/🎉.png" />
            <h2>Your Raffle is live</h2>
          </div>
          <div className="congratulation-btn">
            <button className="share-btn" onClick={handleShare}>
              <img src="src/assets/share.png" /> Share Raffle
            </button>
            <button className="view-btn"><img src="src/assets/eye.png" />View Raffle</button>
            <button className="backto-btn"><img src="src/assets/home.png" />Back to Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadRaffle;
