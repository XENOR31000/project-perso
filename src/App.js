import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Profile from "./pages/Profile";

function App() {
    // Initialise l'état "user" à "null"
    const [user, setUser] = useState(null);
  
    return (
      <div className="App">
        {/* Utilise le composant "BrowserRouter" de "react-router-dom" pour gérer la navigation entre les routes */}
        <BrowserRouter>
          {/* Fournit les valeurs "user" et "setUser" au contexte "UserContext" */}
          <UserContext.Provider value={{ user, setUser }}>
            {/* Définit les routes de l'application et spécifie les composants à afficher pour chaque route */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/connexion" element={<Connexion />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              {/* La dernière route "*" correspond à toutes les autres routes, et affiche le composant "Home" */}
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;