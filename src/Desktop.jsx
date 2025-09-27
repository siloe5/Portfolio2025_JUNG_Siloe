// src/Desktop.jsx
import { useState, useEffect } from "react";
import Folder from "./Folder";
import Window from "./Window";
import Character3D from "./Character3D";

export default function Desktop({ autoOpen, showCharacter }) {
  const [windows, setWindows] = useState([]);

  // Fonction pour ouvrir une nouvelle fenêtre
  const openWindow = (type) => {
    if (windows.some((w) => w.type === type)) return; // évite les doublons

    const newWindow = {
      id: Date.now(),
      type,
      title:
        type === "quisuisje"
          ? "Qui suis-je"
          : type === "cv"
            ? "Mon CV"
            : type === "grapegirl"
              ? "Grape girl"
              : type === "book"
                ? "Mon Book"
                : type === "modelisation3D"
                  ? "Modélisation 3D"
                  : type === "fanzine"
                    ? "Fanzine"
                    : type === "jeuechec"
                      ? "Jeu d'échec"
                      : type === "croquis"
                        ? "Croquis"
                        : type === "calendrier"
                          ? "Calendrier"
                          : type === "flyer"
                            ? "Flyer réalité augmentée"
                            : "Réseaux",
      content:
        type === "quisuisje" ? (
          <img src="/images/Kisuisje.jpg" className="doc-image" title="À propos" />
        ) : type === "cv" ? (
          <img src="/images/CV_JUNG_Siloe.jpg" alt="CV JUNG Siloe" className="doc-imageportrait" />
        ) : type === "artzulejos" ? (
          <img src="/images/book20259.jpg" alt="Art'Zulejos" className="doc-image" />
        ) : type === "grapegirl" ? (
          <img src="/images/book20253.jpg" alt="Grape Girl" className="doc-image" />
        ) : type === "book" ? (
          <iframe src="/images/book2025.pdf" className="doc-imagepdf" title="Book JUNG Siloe" />
        ) : type === "modelisation3D" ? (
          <img src="/images/book20255.jpg" alt="Modélisation 3D" className="doc-image" />
        ) : type === "jeuechec" ? (
          <img src="/images/book20258.jpg" alt="Jeu d'échec" className="doc-image" />
        ) : type === "fanzine" ? (
          <img src="/images/book20257.jpg" alt="Fanzine" className="doc-image" />
        ) : type === "croquis" ? (
          <img src="/images/book202511.jpg" alt="Croquis" className="doc-image" />
        ) : type === "calendrier" ? (
          <img src="/images/book20256.jpg" alt="Calendrier" className="doc-image" />
        ) : type === "flyer" ? (
          <img src="/images/book202510.jpg" alt="Flyer réalité augmentée" className="doc-image" />
        ) : (
          <div className="contact-window">
            <span>Mes réseaux</span>
            <div className="contact-icons">
              <a href="https://www.instagram.com/siloe_jng/?hl=fr" target="_blank" rel="noopener noreferrer">
                <img src="/images/reseaux-01.png" alt="Instagram" className="img-contact" />
              </a>
              <a href="https://www.behance.net/dreammangaka" target="_blank" rel="noopener noreferrer">
                <img src="/images/reseaux-02.png" alt="Behance" className="img-contact" />
              </a>

              <a href="mailto:siloejung@gmail.com">
                <img src="/images/reseaux-03.png" alt="Mail" className="img-contact" />
              </a>
            </div>
          </div>
        ),
      x: 100,
      y: 100,
        width: type === "cv" ? "auto" : 600,   // <-- auto pour CV
  height: type === "cv" ? "auto" : 400,  // <-- auto pour CV
    };

    setWindows((prev) => [...prev, newWindow]);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

  // 👉 ouverture auto de la fenêtre après cutscene
  useEffect(() => {
    if (autoOpen) {
      openWindow(autoOpen);
    }
  }, [autoOpen]);

  return (
    <div className="desktop">
      

      {/* Dossiers infos */}
      <div className="desktop-folders">
         {showCharacter && <Character3D />}
        <div className="infos">
          <Folder title="Qui suis-je" icon="/images/Moiicone.png" onClick={() => openWindow("quisuisje")} />
          <Folder title="Mon CV" icon="/images/IconeDossier2.png" onClick={() => openWindow("cv")} />
          <Folder title="Mon Book" icon="/images/IconeDossier2.png" onClick={() => openWindow("book")} />
          <Folder title="Réseaux" icon="/images/partage.png" onClick={() => openWindow("reseaux")} />
        </div>
        <div className="projets">
          <Folder title="Modélisation 3D" icon="/images/IconeDossier1.png" onClick={() => openWindow("modelisation3D")} />
          <Folder title="Fanzine" icon="/images/IconeDossier1.png" onClick={() => openWindow("fanzine")} />
          <Folder title="Jeu d'échec" icon="/images/IconeDossier1.png" onClick={() => openWindow("jeuechec")} />
          <Folder title="Croquis" icon="/images/IconeDossier1.png" onClick={() => openWindow("croquis")} />
          <Folder title="Calendrier" icon="/images/IconeDossier1.png" onClick={() => openWindow("calendrier")} />
          <Folder title="Flyer réalité augmentée" icon="/images/IconeDossier1.png" onClick={() => openWindow("flyer")} />
          <Folder title="Grape Girl" icon="/images/IconeDossier1.png" onClick={() => openWindow("grapegirl")} />
          <Folder title="Art'Zulejos" icon="/images/IconeDossier1.png" onClick={() => openWindow("artzulejos")} />
        </div>
      </div>

      {/* Fenêtres */}
      {windows.map((w) => (
        <Window
          key={w.id}
          title={w.title}
          onClose={() => closeWindow(w.id)}
          initialX={w.x}
          initialWidth={w.width}
          initialHeight={w.height}
        >
          {w.content}
        </Window>
      ))}
    </div>
  );
}
