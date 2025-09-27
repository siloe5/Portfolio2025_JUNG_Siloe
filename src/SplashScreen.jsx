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
        <video autoPlay muted playsInline onEnded={handleEnd} className="splash-video">
          <source src="/video/Intro.mp4" media="(min-width: 769px)" />
          <source src="/images/essai.png" media="(max-width: 768px)" />
        </video>
      )}
    </div>
  );
}
