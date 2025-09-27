import { Rnd } from "react-rnd";
import "./css/window.css";

export default function Window({ title, onClose, children }) {
  // Taille et position initiales sur desktop
  const defaultWidth = 820;   // largeur initiale en px
  const defaultHeight = 620;  // hauteur initiale en px
  const defaultX = 300;       // position X initiale
  const defaultY = 120;       // position Y initiale

  // Détecte mobile
  const isMobile = window.innerWidth < 768;

  // Ajuste position et taille sur mobile mais garde la taille sur desktop
  const initialProps = {
    x: isMobile ? defaultX * 0 : defaultX,
    y: isMobile ? defaultY * 1 : defaultY,
    width: isMobile ? defaultWidth * 0.8 : defaultWidth,
    height: isMobile ? defaultHeight * 0.8 : defaultHeight,
  };

  return (
    <Rnd
      default={initialProps}
      minWidth={200}          // ne pas devenir trop petit sur mobile
      minHeight={150}
      dragHandleClassName="window-header"
      bounds="parent"
      cancel=".window-header button" //
    >
      <div className="window-container">
        {/* Header */}
        <div className="window-header">
          <h2>{title}</h2>
           <button onClick={onClose}>X</button>
        </div>

        {/* Contenu */}
        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
}
