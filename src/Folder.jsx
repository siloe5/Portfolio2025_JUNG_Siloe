import { Rnd } from "react-rnd";
import "./css/folder.css";

export default function Folder({ title, icon, onClick }) {
  return (
    <div onClick={onClick} className="folder">
      <img
  src={icon}
  alt={title}
/>
      <span>{title}</span>
    </div>
  );
}
