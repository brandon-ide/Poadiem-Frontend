import React from "react";
import "./PlaceCard.css";

function PlaceCard({ name, address, rating, photoUrl, animationDelay }) {
    return (
      <div
        className="place-card"
        style={{
          animationDelay: animationDelay,
          backgroundImage: `url(${photoUrl})`,
        }}
      >
        <div className="place-image" style={{ backgroundImage: `url(${photoUrl})` }}></div>
        <div className="place-details">
          <h2 className="place-name">{name}</h2>
          <p className="place-address">{address}</p>
          <p className="place-rating">⭐ {rating ? rating : "N/A"}</p>
        </div>
      </div>
    );
  }
  

export default PlaceCard;
