import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LogInForm from "../components/Connexion/LogInForm";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import SignUpForm from "../components/Connexion/SignUpForm";
import { useState } from "react";

const Connexion = () => {
  // Récupère les valeurs "user" et "setUser" du contexte "UserContext"
  const { user, setUser } = useContext(UserContext);
  // Initialise l'état "alreadyHasAccount" à "true"
  const [ alreadyHasAccount, setAlreadyHasAccount ] = useState(true)

  return (
    <div>
      {/* Affiche le composant "NavBar" */}
      <NavBar />
      {
        // Si "alreadyHasAccount" est "true", affiche le formulaire de connexion et un lien pour créer un compte
        alreadyHasAccount ? 
          <div className="connexionFormContainer">
            {/* Affiche le composant "LogInForm" */}
            <LogInForm /> 
            {/* Affiche un paragraphe avec un lien pour créer un compte */}
            <p className="connexionP">Vous n'avez pas encore de compte ? <span className="connexionSpan" onClick={() => setAlreadyHasAccount(false)}>Créer un compte</span></p>
          </div>  
          : 
          // Sinon, affiche le formulaire d'inscription et un lien pour se connecter
          <div className="connexionFormContainer">
            {/* Affiche le composant "SignUpForm" */}
            <SignUpForm /> 
          <p className="connexionP">Vous avez déjà un compte ? <span className="connexionSpan" onClick={() => setAlreadyHasAccount(true)}>Connectez vous</span></p>
        </div>
      }
      <Footer />
    </div>
  );
};

export default Connexion;
