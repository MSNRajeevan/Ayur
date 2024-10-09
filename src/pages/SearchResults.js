import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SearchResults.css';

function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (searchQuery) {
      // Perform the search
      const searchResults = performSearch(searchQuery);
      setResults(searchResults);
    }
  }, [searchQuery]);

  const performSearch = (query) => {
    // This is where you'd implement your actual search logic
    // For now, we'll use a mock search function
    const allContent = [
      { type: 'service', title: 'Ayurvedic Consultation', url: '/services#ayurvedic-consultation' },
      { type: 'service', title: 'Panchakarma Therapy', url: '/services#panchakarma' },
      { type: 'product', title: 'Ayurvedic Tea', url: '/products#ayurvedic-tea' },
      { type: 'contact', title: 'Contact Information', url: '/contact' },
      { type: 'about', title: 'About Us', url: '/about' },
    ];

    return allContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="search-results">
      <h1>Search Results for "{searchQuery}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <Link to={result.url}>{result.title}</Link>
              <span className="result-type">{result.type}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{searchQuery}"</p>
      )}
    </div>
  );
}

export default SearchResults;