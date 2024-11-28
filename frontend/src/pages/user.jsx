import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateUserProfile } from "../store/authSlice";
import HeaderAccount from "../components/Header-account/headerAccount";
import Account from "../components/Account/Account";
import Profile from "../components/Profile/Profile";
import accountData from "../data/accountData";
import Button from "../components/Button/Button";

const User = () => {
  const dispatch = useDispatch();
  const { userData, token } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  // Effectue une action de type "getUserProfile" si le token et l'utilisateur sont presents.
  // Récupère les données de l'utilisateur si le token est present.
  useEffect(() => {
    if (token && !userData) {
      dispatch(getUserProfile());
    }
  }, [dispatch, token, userData]);

  //Gere l'edition du nom de l'utilisateur.
  // @param {string} newName - Le nouveau nom de l'utilisateur.

  const handleEditName = (newName) => {
    dispatch(updateUserProfile({ userName: newName }));
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <HeaderAccount userName={userData ? userData.userName : ""} />

      {/* Affichage conditionnel du bouton ou du formulaire */}
      {!isEditing ? (
        <div className="user-actions">
          <Button
            btnText="Edit Name"
            className="edit-button"
            onClick={() => setIsEditing(true)}
          />
        </div>
      ) : (
        <div className="edit-user-content">
          <Profile
            onClose={() => setIsEditing(false)}
            onSave={handleEditName}
            currentName={userData ? userData.userName : ""}
          />
        </div>
      )}

      <Account accountData={accountData} />
    </main>
  );
};

export default User;
