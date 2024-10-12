import React, { useState } from 'react';
import './GoogleReviews.css';
import reviewsData from '../data/googleReviews.json';

const googleMapsReviewUrl = "https://www.google.com/maps/place/Rohini+Ayurvedic+Wellness+center/@33.3390549,-86.8683855,17z/data=!4m8!3m7!1s0x888921c4e0f83da5:0x3037a606fa9f118e!8m2!3d33.3390549!4d-86.8683855!9m1!1b1!16s%2Fg%2F11rf6ss6v0?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D";

function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReviews = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % reviewsData.length);
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + reviewsData.length) % reviewsData.length);
  };

  const visibleReviews = [
    reviewsData[currentIndex],
    reviewsData[(currentIndex + 1) % reviewsData.length],
    reviewsData[(currentIndex + 2) % reviewsData.length],
  ];

  const overallRating = (reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length).toFixed(1);

  return (
    <div className="google-reviews">
      <h2>What Our Clients Say</h2>
      <div className="overall-rating">
        <div className="business-info">
          <h3>Rohini Ayurvedic Wellness Center</h3>
          <div className="rating-info">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="google-icon" />
            <span className="rating-number">{overallRating}</span>
            <div className="stars">{"★".repeat(Math.round(overallRating))}</div>
            <span className="review-count">({reviewsData.length} reviews)</span>
          </div>
        </div>
      </div>
      <div className="reviews-container">
        <button className="nav-button prev" onClick={prevReviews}>&lt;</button>
        <div className="reviews-grid">
          {visibleReviews.map((review, index) => (
            <a 
              key={index} 
              href={googleMapsReviewUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="review-card"
            >
              <div className="review-header">
                <span className="review-author">{review.author}</span>
                <span className="review-rating">{"★".repeat(review.rating)}</span>
              </div>
              <p className="review-text">{review.text}</p>
              <span className="review-date">{review.date}</span>
            </a>
          ))}
        </div>
        <button className="nav-button next" onClick={nextReviews}>&gt;</button>
      </div>
    </div>
  );
}

export default GoogleReviews;