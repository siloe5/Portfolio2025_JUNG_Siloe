import { useState, useEffect } from "react";
import "./css/splashscreen.css";

export default function SplashScreen({ onEnter }) {
  const [ended, setEnded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 601);
  }, []);

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
        <>
          {isMobile ? (
            <img src="/images/Introtel.jpg" alt="Splash mobile" className="splash-image" />
          ) : (
            <video autoPlay muted playsInline onEnded={handleEnd} className="splash-video">
              <source src="/video/Intro.mp4" type="video/mp4" />
            </video>
          )}
        </>
      )}
    </div>
  );
}
