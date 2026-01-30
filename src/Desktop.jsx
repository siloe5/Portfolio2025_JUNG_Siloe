// src/Desktop.jsx
import { useState, useEffect } from "react";
import Folder from "./Folder";
import Window from "./Window";
import Character3D from "./Character3D";

export default function Desktop({ autoOpen, showCharacter }) {
  const [windows, setWindows] = useState([]);

  const PROJECTS = {
    tron: {
      title: "Tron",
      image: "/images/bookimg5.jpg",
      video: "/video/Tron.mp4",
    },
    grapegirl: {
      title: "Grape Girl",
      image: "/images/bookimg2.jpg",
      video: "/video/Grape.mp4", // optionnel
    },
    fool: {
      title: "The Fool",
      image: "/images/bookimg4.jpg",
      video: "/video/Jester.mp4", // optionnel
    },
   flyer: {
      title: "Flyer réalité augmenté",
      image: "/images/bookimg12.jpg",
      video: "/video/Tynaire.mp4", // optionnel
    },
  };
const openWindow = (type) => {
  const project = PROJECTS[type];

  // 🎯 CAS PROJET AVEC IMAGE (+ VIDÉO OPTIONNELLE)
  if (project) {

    // 🖼️ fenêtre image
    if (!windows.some(w => w.type === `${type}-image`)) {
      setWindows(prev => [
        ...prev,
        {
          id: Date.now(),
          type: `${type}-image`,
          title: project.title,
          content: (
            <img src={project.image} className="doc-image" />
          ),
          x: 300,
          y: 120,
          width: 640,
          height: 420,
        }
      ]);
    }

    // 🎥 fenêtre vidéo (plus petite + décalée)
    if (project.video && !windows.some(w => w.type === `${type}-video`)) {
      setWindows(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          type: `${type}-video`,
          title: `${project.title} — Vidéo`,
          content: (
            <video
              src={project.video}
              className="doc-video"
              controls
              playsInline
            />
          ),
          x: 750,
          y: 150,
          width: 420,
          height: 260,
        }
      ]);
    }

    return;
  }

  // ⬇️ ICI ton ancien code pour les autres fenêtres (cv, réseaux, etc.)


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
                  : type === "jeuechec"
                    ? "Jeu d'échec"
                    : type === "croquis"
                      ? "Croquis"
                      : type === "calendrier"
                        ? "Calendrier"
                        : type === "jeuvid"
                          ? "Jeu Vidéo"
                          : type === "stage"
                            ? "Rapport de Stage"
                            : type === "the fool"
                              ? "Fool"
                              : type === "tron"
                                ? "Tron"
                                : type === "fanzine"
                                  ? "Fanzine"
                                  : type === "cartevoeux"
                                    ? "Carte de Voeux"
                                    : type === "trophée"
                                      ? "Trophée"
                                      : type === "flyer"
                                        ? "Flyer réalité augmentée"
                                        : "Réseaux",
      content:
        type === "quisuisje" ? (
          <img src="/images/Kisuisje.jpg" className="doc-image" title="À propos" />
        ) : type === "cv" ? (
          <img src="/images/CV_JUNG_Siloe.jpg" alt="CV JUNG Siloe" className="doc-imageportrait" />
        ) : type === "artzulejos" ? (
          <img src="/images/bookimg11.jpg" alt="Art'Zulejos" className="doc-image" />
        ) : type === "grapegirl" ? (
          <img src="/images/bookimg2.jpg" alt="Grape Girl" className="doc-image" />
        ) : type === "book" ? (
          <iframe src="/images/Book.pdf" className="doc-imagepdf" title="Book JUNG Siloe" />
        ) : type === "fanzine" ? (
          <img src="/images/bookimg14.jpg" alt="Fanzine" className="doc-image" />
        ) : type === "modelisation3D" ? (
          <img src="/images/bookimg15.jpg" alt="3D" className="doc-image" />
        ) : type === "jeuechec" ? (
          <img src="/images/bookimg9.jpg" alt="Jeu d'échec" className="doc-image" />
        ) : type === "croquis" ? (
          <img src="/images/bookimg13.jpg" alt="Croquis" className="doc-image" />
        ) : type === "calendrier" ? (
          <img src="/images/bookimg8.jpg" alt="Calendrier" className="doc-image" />
        ) : type === "jeuvid" ? (
          <img src="/images/bookimg7.jpg" alt="Jeu Vidéo" className="doc-image" />
        ) : type === "stage" ? (
          <img src="/images/bookimg6.jpg" alt="Rapport de Stage" className="doc-image" />
        ) : type === "fool" ? (
          <img src="/images/bookimg4.jpg" alt="The fool" className="doc-image" />
        ) : type === "tron" ? (
          <img src="/images/bookimg5.jpg" alt="Tron" className="doc-image" />

        ) : type === "trophée" ? (
          <img src="/images/bookimg16.jpg" alt="Trophée" className="doc-image" />
        ) : type === "cartevoeux" ? (
          <img src="/images/bookimg10.jpg" alt="Carte de Voeux" className="doc-image" />
        ) : type === "flyer" ? (
          <img src="/images/bookimg12.jpg" alt="Flyer réalité augmentée" className="doc-image" />
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

              <a href="mailto:jungsiloe@gmail.com">
                <img src="/images/reseaux-03.png" alt="Mail" className="img-contact" />
              </a>
            </div>
          </div>
        ),
      x: 300,
      y: 120,
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
          <div className="côté">

            <Folder title="Tron" icon="/images/IconeDossier1.png" onClick={() => openWindow("tron")} />
            <Folder title="The fool" icon="/images/IconeDossier1.png" onClick={() => openWindow("fool")} />
            <Folder title="Grape Girl" icon="/images/IconeDossier1.png" onClick={() => openWindow("grapegirl")} />
          </div>
          <div className="côté">

            <Folder title="Calendrier" icon="/images/IconeDossier1.png" onClick={() => openWindow("calendrier")} />
            <Folder title="Flyer réalité augmentée" icon="/images/IconeDossier1.png" onClick={() => openWindow("flyer")} />
            <Folder title="Carte de voeux" icon="/images/IconeDossier1.png" onClick={() => openWindow("cartevoeux")} />
            <Folder title="Fanzine" icon="/images/IconeDossier1.png" onClick={() => openWindow("fanzine")} />
          </div>
          <div className="côté">

            <Folder title="Trophée" icon="/images/IconeDossier1.png" onClick={() => openWindow("trophée")} />
            <Folder title="Jeu d'échec" icon="/images/IconeDossier1.png" onClick={() => openWindow("jeuechec")} />
          </div>
          <div className="côté">

            <Folder title="Jeu Vidéo" icon="/images/IconeDossier1.png" onClick={() => openWindow("jeuvid")} />
            <Folder title="Rapport de Stage" icon="/images/IconeDossier1.png" onClick={() => openWindow("stage")} />
            <Folder title="Art'Zulejos" icon="/images/IconeDossier1.png" onClick={() => openWindow("artzulejos")} />
            <Folder title="3D" icon="/images/IconeDossier1.png" onClick={() => openWindow("modelisation3D")} />
            <Folder title="Croquis" icon="/images/IconeDossier1.png" onClick={() => openWindow("croquis")} />
          </div>
        </div>

      </div>

      {/* Fenêtres */}
{windows.map((w) => (
  <Window
    key={w.id}
    title={w.title}
    onClose={() => closeWindow(w.id)}
    initialX={w.x}      // X est bien là
    initialY={w.y}      // <--- IL MANQUAIT CELUI-CI !
    initialWidth={w.width}
    initialHeight={w.height}
    // Si tu as ajouté la classe pour le CV (voir étape précédente) :
    customClass={w.type === 'cv' ? 'window-cv-style' : ''}
  >
    {w.content}
  </Window>
))}
    </div >
  );
}
