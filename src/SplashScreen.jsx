import { useState } from "react";
import "./css/splashScreen.css";

export default function SplashScreen({ onEnter }) {
  const [ended, setEnded] = useState(false);

  const handleEnd = () => {
    setEnded(true);
    onEnter();
  };

  const handleClick = () => {
    if (!ended) {
      setEnded(true);
      onEnter();
    }
  };

  return (
    <div className="splashscreen" >
      {!ended && (
        <video
          src="video/Intro.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleEnd}
        />
      )}
      {/* Optionnel : bouton Skip */}
      {!ended && (
        <button className="skip-btn" onClick={handleClick}>
          Skip
        </button>
      )}
    </div>
  );
}
