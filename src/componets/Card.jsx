import React from 'react';
import "../styles.css";
import profilePic from "../assets/pic3.gif";


const Card = () => {
  return (
    <div className="card bg-white">
      <div className="circle">
        <img src={profilePic} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Card;
