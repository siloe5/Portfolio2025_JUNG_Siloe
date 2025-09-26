import { useState } from "react";
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
          src="video/Intro.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleEnd}
        />
      )}
    </div>
  );
}
