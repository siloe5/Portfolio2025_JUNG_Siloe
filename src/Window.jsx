import { Rnd } from "react-rnd";
import "./css/window.css";

export default function Window({ title, onClose, children }) {
  return (
    <Rnd
      default={{ x: 300, y: 120, width: "auto", height: "auto" }}
      dragHandleClassName="window-header"
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
