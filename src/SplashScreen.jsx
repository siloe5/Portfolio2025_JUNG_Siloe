import { useState, useEffect } from "react";
import "./css/splashscreen.css";

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
    <div className="splashscreen" onClick={handleClick}>
      {!ended && (
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleEnd}
        >
          <source src="/video/Introessai.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
}
