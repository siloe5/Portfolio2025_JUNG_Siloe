import { useState } from "react";
import SplashScreen from "./SplashScreen";
import Desktop from "./Desktop";

const App = () => {
  const [entered, setEntered] = useState(false);

  return (
    <main className="h-screen bg-hero-pattern bg-cover bg-center relative">
      {/* Desktop toujours affiché */}
      <Desktop autoOpen={entered ? "quisuisje" : null} showCharacter={entered} />

      {/* SplashScreen par-dessus tant qu’il n’est pas terminé */}
      {!entered && (
        <div className="absolute inset-0 z-50">
          <SplashScreen onEnter={() => setEntered(true)} />
        </div>
      )}
    </main>
  );
};

export default App;
