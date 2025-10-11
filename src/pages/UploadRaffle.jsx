import React, { useState } from "react";
import "./pages.css";

const UploadRaffle = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="prize-setup-container">
      <div className="prize-card">
        <h2 className="prize-title">Prize setup</h2>
        <p className="prize-subtitle">
          Tell us about the amazing prize you're offering
        </p>

        <div className="upload-section">
          <label className="upload-box">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="preview-image"
              />
            ) : (
              <div className="upload-placeholder">
                <span className="upload-icon">🖼️</span>
                <p>Upload Prize Image</p>
                <small>Drag and drop or click to browse</small>
              </div>
            )}
            <input type="file" onChange={handleImageUpload} hidden />
          </label>
          {!image && (
            <button className="browse-btn">Browse files</button>
          )}
        </div>

        <div className="form-group">
          <label>Define your prize</label>
          <input
            type="text"
            placeholder="Define your prize"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Prize Description</label>
          <textarea
            className="textarea-field"
            placeholder="Describe what makes this prize special"
          ></textarea>
        </div>


        <div className="form-group">
          <label>Prize type</label>
          <select className="select-field">
            <option>Select a prize type</option>
            <option>Physical</option>
            <option>Digital</option>
            <option>Service</option>
          </select>
        </div>

        <button className="next-btn">Next step →</button>
      </div>
    </div>
  );
};

export default UploadRaffle;
