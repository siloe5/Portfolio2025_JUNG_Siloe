// src/Window.jsx
import { Rnd } from "react-rnd";
import "./css/window.css";

// 1. Ajoute les props dans les parenthèses ici
export default function Window({ 
  title, 
  onClose, 
  children, 
  initialX, 
  initialY, 
  initialWidth, 
  initialHeight, 
  customClass 
}) {
  
  const isMobile = window.innerWidth < 768;

  // 2. On utilise les props si elles existent, sinon on met une valeur de secours
  const xPos = initialX !== undefined ? initialX : 300;
  const yPos = initialY !== undefined ? initialY : 120;
  const widthPos = initialWidth || 820;
  const heightPos = initialHeight || 620;

  const initialProps = {
    x: isMobile ? 10 : xPos,
    y: isMobile ? 50 : yPos,
    width: isMobile ? "90%" : widthPos,
    height: isMobile ? "auto" : heightPos,
  };

  return (
    <Rnd
      default={initialProps}
      enableResizing={{
        bottomRight: true,
      }}
      // 3. Supprime lockAspectRatio ou mets le à "false" 
      // pour que les vidéos et images gardent leur propre format
      lockAspectRatio={false} 
      minWidth={200}
      minHeight={150}
      maxWidth={1200}
      maxHeight={1000}
      dragHandleClassName="window-header"
      cancel=".window-header button"
      // Pas de bounds="window" pour pouvoir dépasser de l'écran
    >
      <div className={`window-container ${customClass || ''}`}>
        <div className="window-header">
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </div>

        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
}