import React, { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  const handleClick = (star) => {
    setRating(star);
  };

  const resetRating = () => {
    setRating(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Star Rating</h2>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleClick(star)}
            style={{
              fontSize: "30px",
              color: star <= rating ? "gold" : "gray",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label={`${star} star`}
          >
            ★
          </button>
        ))}
      </div>
      <button
        onClick={resetRating}
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
      <p style={{ marginTop: "10px" }}>
        Your Rating: {rating} {rating === 1 ? "star" : "stars"}
      </p>
    </div>
  );
}
