import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Profile = () => {
  // Récupère les valeurs "user" et "setUser" du contexte "UserContext"
  const { user, setUser } = useContext(UserContext);
  // Initialise l'état "switchToUpdateForm" à "false"
  const [switchToUpdateForm, setSwitchToUpdateForm] = useState(false);
  // Initialise l'état "changePwd" à "false"
  const [changePwd, setChangePwd] = useState(false);

  // Initialise l'état "FormState" avec les valeurs du profil de l'utilisateur
  const [FormState, setFormState] = useState({
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
    password: user.password,
  });

  // Fonction qui envoie une requête "PATCH" à l'API pour mettre à jour le profil de l'utilisateur
  function updateProfile() {
    // Si "changePwd" est "true", envoie la requête avec la nouvelle valeur du mot de passe
    if (changePwd) {
      axios
        .patch("/users/" + user._id, {
          username: FormState.username,
          email: FormState.email,
          phoneNumber: FormState.phoneNumber,
          password: document.getElementById("newPwdInput").value,
        })
        .then(function (response) {
          console.log(response);
          setUser(response.data);
          setSwitchToUpdateForm(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .patch("/users/" + user._id, {
          username: FormState.username,
          email: FormState.email,
          phoneNumber: FormState.phoneNumber,
        })
        .then(function (response) {
          console.log(response);
          setUser(response.data);
          setSwitchToUpdateForm(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function handleChange(e) {
    setFormState({
      ...FormState,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <NavBar />
      <div className="profileContainer">
        <h1 className="profileTitle">Mon profil</h1>
        {switchToUpdateForm ? (
          <div className="profileUpdateForm">
            <form action="">
              <label htmlFor="">Pseudo : </label>
              <input
                type="text"
                name="username"
                value={FormState.username}
                onChange={handleChange}
              />
              <label htmlFor="">E-mail : </label>
              <input
                type="text"
                name="email"
                value={FormState.email}
                onChange={handleChange}
              />
              <label htmlFor="">Téléphone : </label>
              <input
                type="text"
                name="phoneNumber"
                value={FormState.phoneNumber}
                onChange={handleChange}
              />
              <label htmlFor="">Mot de passe : </label>
              {changePwd ? (
                <input type="text" name="password" id="newPwdInput" />
              ) : (
                <div className="button-bas">
                  <button onClick={() => setChangePwd(true)}>
                    Changer le mot de passe
                  </button>
                </div>
              )}
            </form>
            // Boutons de validation et d'annulation des modifications
            <div className="sendFormButtons">
              <button className="ValidButton" onClick={() => updateProfile()}>
                Valider
              </button>
              <button
                className="cancelButton"
                onClick={() => setSwitchToUpdateForm(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        ) : (
          // Affiche le profil de l'utilisateur et le bouton pour le mettre à jour
          <div className="profileCard">
            <img
              className="profilePP"
              src="/defaultpp.jpeg"
              alt="default profile picture"
            />
            <div>
              <h5>
                Pseudo : <span>{user.username}</span>
              </h5>
              <h5>
                E-mail : <span>{user.email}</span>
              </h5>
              <h5>
                Téléphone : <span>{user.phoneNumber}</span>
              </h5>
              <button onClick={() => setSwitchToUpdateForm(true)}>
                Modifier le profile
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
