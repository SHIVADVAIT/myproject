import React from "react";
import "./GuruSection.css";
import gurudevImg from "../images/gurudev.jpg"; // Adjust path based on your file structure

export default function Home() {
  return (
    <div className="guru-section">
      <div className="guru-card">
        <img src={gurudevImg} alt="Gurudev" className="guru-image" />
        <p className="guru-quote">
          गुरु कृपा से ही ये सद्विचार आया, अब हमें और कुछ भी नहीं चाहिए।
          
        </p>
      </div>

      {/* You can add more guru-cards here if needed */}
    </div>
  );
}
