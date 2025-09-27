import { useState, useEffect } from "react";
import "./css/character.css";

export default function CharacterVideo() {
    const [message, setMessage] = useState("");
    const [showBubble, setShowBubble] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("/video/anim2.webm");

    const randomMessages = [
        "Pourquoi tu me regardes alors que tu pourrais lire mon CV?",
        "Tu regardes tous mes projets hein?",
        "😎",
        "T'as regardé mes réseaux?",
        "N'hésitez pas à vous perdre dans tous ces onglets..."
    ];

    const videos = [
        "/video/anim2.webm",
        "/video/anim3.webm",
        "/video/anim4.webm",
        "/video/anim5.webm",
        "/video/anim6.webm",
        "/video/anim7.webm",
        "/video/anim8.webm",
        "/video/anim9.webm",


    ];

    const randomMessagesClick = [
        "Je cherche un stage de 3 mois!",
        "Hésite pas à regarder mon cv ou mon book!",
        "Tu reste encore un peu?",
        "On danse tout ca tout ca"
    ];

    // Messages auto
    useEffect(() => {
        const interval = setInterval(() => {
            const random = randomMessages[Math.floor(Math.random() * randomMessages.length)];
            setMessage(random);
            setShowBubble(true);
            setTimeout(() => setShowBubble(false), 5000);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    // Clique sur le perso
    const handleClick = () => {
        const random = randomMessagesClick[Math.floor(Math.random() * randomMessagesClick.length)];
        setMessage(random);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 5000);
    };



    // Vidéo suivante quand finie
    const handleVideoEnd = () => {
        let nextVideo;
        do {
            nextVideo = videos[Math.floor(Math.random() * videos.length)];
        } while (nextVideo === currentVideo);

        setCurrentVideo(nextVideo);
    };

    return (
        <div className="personne3D">
            <div className="character-wrapper" onClick={handleClick}>
                <video
                    key={currentVideo}
                    src={currentVideo}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    style={{ filter: "brightness(1) contrast(1.2)" }}
                />

                {showBubble && (
                    <div className="speech-bubble">
                        {message}

                    </div>
                )}
            </div>
        </div>
    );
}
