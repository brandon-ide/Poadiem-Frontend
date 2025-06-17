import React, { useState, useEffect } from "react";
import PlaceCard from "./placeCard";
import "./Form.css";
import "./loadingMessage.css";

function Form() {
  const [isSliding, setIsSliding] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [places, setPlaces] = useState([]);

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
      let cycleCount = 0;
      const interval = setInterval(() => {
        setLoadingIndex((prev) => {
          const next = (prev + 1) % loadingMessages.length;
          if (next === 0) cycleCount++;
          if (cycleCount >= 1 && next === 0) {
            clearInterval(interval);
            setTimeout(() => {
              setShowLoading(false);
              setShowCards(true);
              fetchPlaces();
            }, 2000);
          }
          return next;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showLoading]);

  const fetchPlaces = async () => {
    const fakePlaces = [
      {
        name: "Luna Coffee",
        address: "123 Bean Blvd, Kalamazoo",
        rating: 4.7,
        photoUrl: "https://s.hdnux.com/photos/01/36/02/51/24652370/1/1082x0.jpg",
      },
      {
        name: "Nature Preserve",
        address: "456 Trail Rd, Kalamazoo",
        rating: 4.5,
        photoUrl: "https://images.pexels.com/photos/443412/pexels-photo-443412.jpeg?cs=srgb&dl=pexels-punttim-443412.jpg&fm=jpg",
      },
      {
        name: "The Garden Ice Arena",
        address: "789 Hockey Ct, Kalamazoo",
        rating: 4.1,
        photoUrl: "https://www.thegardenicearena.com/uploads/1/3/0/0/130078704/l0a4750_orig.jpg",
      }
    ];
    setPlaces(fakePlaces);
  };

  return (
    <>
      {!showLoading && !showCards && (
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
              {Array.from({ length: 12 }, (_, i) => (
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

      {showCards && (
        <div className="cards-container">
          {places.map((place, index) => (
            <PlaceCard
              key={index}
              name={place.name}
              address={place.address}
              rating={place.rating}
              photoUrl={place.photoUrl}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Form;

