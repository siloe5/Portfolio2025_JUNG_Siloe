import React from "react";
import "./css/popup.css";

export default function Popup({ title, children, onClose, initialX, initialY, initialWidth, initialHeight }) {
  const style = {
    left: initialX,
    top: initialY,
    width: initialWidth,
    height: initialHeight,
  };

  return (
    <div className="popup" style={style}>
      <div className="popup-header">
        <span>{title}</span>
        <button className="popup-close-btn" onClick={onClose}>X</button>
      </div>
      <div className="popup-content">{children}</div>
    </div>
  );
}
