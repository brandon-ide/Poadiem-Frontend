import React, { useState, useEffect } from "react";
import "./Form.css";
import "./loadingMessage.css";

function Form() {
  const [isSliding, setIsSliding] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);

  const loadingMessages = [
    "🔍 Searching every Encyclopedia...",
    "📡 Reticulating Splines...",
    "🌍 Scouring the Earth...",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSliding(true);
  };

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setShowLoading(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isSliding]);

  useEffect(() => {
    if (showLoading) {
      const interval = setInterval(() => {
        setLoadingIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showLoading]);

  return (
    <>
      {!showLoading && (
        <div className={`form-wrapper ${isSliding ? "slide-left" : ""}`}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="zip">Enter your ZIP code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              maxLength="9"
              pattern="\d{1,9}"
              required
              placeholder="e.g. 49001"
            />

            <label htmlFor="budget">Enter your budget</label>
            <select id="budget" name="budget" required>
              <option value="">-- Select Budget --</option>
              <option value="Free">Free</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </select>

            <label htmlFor="time">Enter Window of Time</label>
            <select id="time" name="time" required>
              <option value="">-- Select Time --</option>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} hour{i + 1 > 1 ? "s" : ""}
                </option>
              ))}
            </select>

            <label id="activities" htmlFor="activity">
              What are you interested in for today?
            </label>
            <div className="interestBoxes">
              <label>
                <input type="checkbox" name="interests" value="Art" /> Art
              </label>
              <label>
                <input type="checkbox" name="interests" value="Music" /> Music
              </label>
              <label>
                <input type="checkbox" name="interests" value="Nature" /> Nature
              </label>
              <br />
              <label>
                <input type="checkbox" name="interests" value="Sports" /> Sports
              </label>
              <label>
                <input type="checkbox" name="interests" value="Coffee" /> Coffee
              </label>
              <label>
                <input type="checkbox" name="interests" value="Food" /> Food
              </label>
            </div>

            <button className="formSubmit" type="submit">
              Make Your Plan
            </button>
          </form>
        </div>
      )}

      {showLoading && (
        <div className="loading-container">
          <p className="fade">{loadingMessages[loadingIndex]}</p>
        </div>
      )}
    </>
  );
}

export default Form;
