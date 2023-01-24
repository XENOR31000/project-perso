import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Profile from "./pages/Profile";
import Vehicule from "./pages/vehicule";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/connexion" element={<Connexion />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route path="/vehicule" element={<Vehicule/>}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
