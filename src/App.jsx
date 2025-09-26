import { useState } from "react";
import SplashScreen from "./SplashScreen"; 
import Desktop from "./Desktop"; 

const App = () => {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <SplashScreen onEnter={() => setEntered(true)} />
      ) : (
        <main className="h-screen bg-hero-pattern bg-cover bg-center">
          {/* 👉 on passe la prop autoOpen */}
          <Desktop autoOpen="quisuisje" />
        </main>
      )}
    </>
  );
};

export default App;
