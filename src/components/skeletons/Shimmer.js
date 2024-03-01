import React from "react";
import "./shimmer.css"; 


const Shimmer = () => {
  return (
    <div className="shimmer-wrapper overflow-hidden absolute top-0 left-0 w-full h-full">
      <div className="shimmer w-full h-full "></div>
    </div>
  );
};

export default Shimmer;
