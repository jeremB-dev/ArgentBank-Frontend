import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

// Composant modal de modification du profil utilisateur
const Profile = ({ onClose, onSave, currentName }) => {
  // État local pour gérer la saisie du nouveau nom d'utilisateur
  const [userName, setUserName] = useState(currentName);

  // Gère la soumission du formulaire et la mise à jour du nom d'utilisateur
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userName);
  };

  return (
    <div className="edit-user-content">
      <form onSubmit={handleSubmit}>
        <div className="profile-input-wrapper">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="button-wrapper">
          <Button btnText="Save" className="edit-button" type="submit" />
          <Button btnText="Cancel" className="edit-button" onClick={onClose} />
        </div>
      </form>
    </div>
  );
};

Profile.propTypes = {
  onClose: PropTypes.func.isRequired, // Fonction de fermeture de la modal
  onSave: PropTypes.func.isRequired, // Fonction de sauvegarde du nom d'utilisateur
  currentName: PropTypes.string.isRequired, // Nom d'utilisateur actuel
};

export default Profile;
