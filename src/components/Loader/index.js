import React, { useEffect, useState } from "react";
import Logo from "../../images/Befirst-Logos0.jpg";
import "./loader.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 2; 
      });
    }, 40); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <img src={Logo} alt="Loading..." className="loader-logo" />
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="progress-text">{progress}%</p>
    </div>
  );
};

export default Loader;
