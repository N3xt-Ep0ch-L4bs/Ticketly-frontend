import React, { useState } from "react";
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
    endDate: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setRaffleData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="prize-setup-container">
      {/* ✅ STEP 1: Prize Setup */}
      {step === 1 && (
        <div className="prize-card">
          <h2 className="prize-title">Prize setup</h2>
          <p className="prize-subtitle">
            Tell us about the amazing prize you're offering
          </p>

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
              <input
                type="file"
                name="image"
                onChange={handleChange}
                hidden
              />
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

          <button className="next-btn" onClick={handleNext}>
            Next step →
          </button>
        </div>
      )}

      {/* ✅ STEP 2: Ticket Settings */}
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

      {/* ✅ STEP 3: Raffle Duration */}
      {step === 3 && (
        <div className="prize-card">
          <h2 className="prize-title">Raffle Duration</h2>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              className="input-field"
              value={raffleData.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              className="input-field"
              value={raffleData.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="nav-buttons">
            <button onClick={handleBack} className="back-btn">← Back</button>
            <button onClick={handleNext} className="next-btn">Review →</button>
          </div>
        </div>
      )}

      {/* ✅ STEP 4: Review & Confirm */}
      {step === 4 && (
        <div className="prize-card">
          <h2 className="prize-title">Review & Confirm</h2>
          <div className="review-section">
            {raffleData.image && (
              <img
                src={URL.createObjectURL(raffleData.image)}
                alt="Preview"
                className="preview-image"
              />
            )}
            <p><strong>Prize:</strong> {raffleData.title}</p>
            <p><strong>Description:</strong> {raffleData.description}</p>
            <p><strong>Type:</strong> {raffleData.type}</p>
            <p><strong>Ticket Price:</strong> {raffleData.ticketPrice}</p>
            <p><strong>Max Tickets:</strong> {raffleData.maxTickets}</p>
            <p><strong>Max Per Wallet:</strong> {raffleData.maxPerWallet}</p>
            <p><strong>Start Date:</strong> {raffleData.startDate}</p>
            <p><strong>End Date:</strong> {raffleData.endDate}</p>
          </div>

          <div className="nav-buttons">
            <button onClick={handleBack} className="back-btn">← Back</button>
            <button className="next-btn">Create Raffle ✅</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadRaffle;
