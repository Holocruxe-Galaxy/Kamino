import React, { useState } from "react";
import "./webcamcapture.css";

function WebcamCapture() {
  const [message, setMessage] = useState("");

  const handleCaptureClick = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/users/runPythonScript",
        { method: "POST" }
      );
      const data = await response.json();
      // Check if the 'photo_taken' message is received
      if (data.status === 'photo_taken') {
        // Play the beep sound
        const audio = new Audio('/beep.wav');
        audio.play();
      }
      console.log(data);
      setMessage("Thank you for your collaboration!");
    } catch (error) {
      console.error("Error running Python script:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const instructions = [
    { direction: "Up", arrow: "↑", animation: "moveUpAndDown" },
    { direction: "Down", arrow: "↓", animation: "moveUpAndDown reverse" },
    { direction: "Left", arrow: "←", animation: "moveLeftAndRight" },
    { direction: "Right", arrow: "→", animation: "moveLeftAndRight reverse" }
  ];

  return (
    <div className="webcam-capture-container">
      <div className="image-container">
        <img src="camphoto.jpeg" alt="Face" className="face-image" />
      </div>

      <div className="instructions">
        {instructions.map((inst, index) => (
          <div key={index}>
            {`Look ${inst.direction}`}
            <div style={{ display: "inline-block", animation: `${inst.animation} 1s infinite` }}>
              <span className="arrow">{inst.arrow}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="webcam-content">
        <h2 className="webcam-capture-heading">Webcam Capture</h2>
        <button onClick={handleCaptureClick}>Capture Face</button>
      </div>

      {message && (
        <div className="webcam-capture-message">
          {message}
          <button className="close-button" onClick={() => setMessage("")}>Close</button>
        </div>
      )}
    </div>
  );
}

export default WebcamCapture;
