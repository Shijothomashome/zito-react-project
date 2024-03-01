// NoInternet.js
import React from 'react';

// NoInternet component to display when there's no internet connection
// This is working based on useOnline custom hook
const NoInternet = () => {
  return (
    <div className="no-internet-container">
      <h2 className="no-internet-heading">No Internet Connection</h2>
      <p className="no-internet-message">Please check your internet connection and try again.</p>
    </div>
  );
};

export default NoInternet;
