import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from 'axios';
import { Navigate } from 'react-router-dom'

const LogInForm = () => {
  // Récupère le contexte "UserContext" et les fonctions "user" et "setUser"
  const { user, setUser } = useContext(UserContext);
  // Initialise l'état "connected" à "false"
  const [ connected, setConnected ] = useState(false);

  // Fonction qui sera exécutée lorsque le bouton "soumettre" est cliqué
  function onSubmitHandler() {
    // Récupère la valeur du champ "usernameInput"
    const username = document.getElementById("usernameInput").value;
    // Récupère la valeur du champ "passwordInput"
    const password = document.getElementById("passwordInput").value;

    // Envoie une requête POST à l'URL "/users/login" avec les données "username" et "password"
    axios.post("/users/login", {
      username: username,
      password: password
    }).then(function (response) {
        // Si la réponse contient un état "true", met à jour l'état "user" avec les données de l'utilisateur et "connected" avec "true"
        if(response.data.state) {
          setUser(response.data.user);
          setConnected(true);
        } else {
          // Sinon, affiche un message d'erreur
          console.log('mauvais mot de passe ou username')
        }
        console.log(response);
      })
      // Si une erreur se produit, affiche l'erreur dans la console
      .catch(function (error) {
        console.log(error);
      });
    }
  
    return (
      <div>
        <div className="logInFormContainer">
          <h1>Connexion</h1>
          <form className="logInForm" action="">
            <div className="logInInputsContainer">
              <label htmlFor="usernameInput">Pseudo :</label>
              <input className="logInInputs" type="text" name="usernameInput" id="usernameInput" />
            </div>
            <div className="logInInputsContainer">
              <label htmlFor="passwordInput">Mot de passe :</label>
              <input className="logInInputs" type="password" name="passwordInput" id="passwordInput" />
            </div>
          </form>
          {/* Ajoute un événement "onClick" qui exécute la fonction "onSubmitHandler" lorsque le bouton est cliqué */}
          <button onClick={() => onSubmitHandler()}>soumettre</button>
          {/* Si "connected" est "true", affiche le composant "Navigate" qui redirige vers la route "/home" */}
          {connected ? <Navigate to='/home' /> : null}
        </div>
      </div>
    );
  };
  
  export default LogInForm;