import React, { useEffect, useState } from 'react';
import './GoogleReviewsWidget.css';

function GoogleReviewsWidget() {
  const [reviews, setReviews] = useState([]);
  const [placeName, setPlaceName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const PLACE_ID = process.env.REACT_APP_GOOGLE_PLACE_ID;

    if (window.google && window.google.maps && window.google.maps.places) {
      initMap();
    } else {
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          clearInterval(checkGoogleMaps);
          initMap();
        }
      }, 100);

      // Clear interval after 10 seconds if Google Maps doesn't load
      setTimeout(() => {
        clearInterval(checkGoogleMaps);
        if (!window.google || !window.google.maps || !window.google.maps.places) {
          setError('Failed to load Google Maps API');
        }
      }, 10000);
    }

    function initMap() {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: ['name', 'rating', 'reviews']
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPlaceName(place.name);
            setReviews(place.reviews || []);
          } else {
            setError('Error fetching place details');
          }
        }
      );
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="google-reviews">
      <h2>{placeName} Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p><strong>{review.author_name}</strong></p>
          <p>Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default GoogleReviewsWidget;