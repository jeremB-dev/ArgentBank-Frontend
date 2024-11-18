import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/authSlice";
import Account from "../components/Account/Account";
import Profile from "../components/Profile/Profile";
import accountData from "../data/accountData";

const User = () => {
  const dispatch = useDispatch();
  const { userData, token } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Effectue une action de type "getUserProfile" si le token et l'utilisateur sont présents.
   * Récupère les données de l'utilisateur si le token est present.
   */
  useEffect(() => {
    if (token && !userData) {
      dispatch(getUserProfile());
    }
  }, [dispatch, token, userData]);

  /**
   * Gere l'edition du nom de l'utilisateur.
   * @param {string} newName - Le nouveau nom de l'utilisateur.
   */
  const handleEditName = (newName) => {
    // Ici vous ajouterez plus tard la mise à jour du profil
    console.log(`New name: ${newName}`);
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <Account
        userName={userData ? `${userData.firstName} ${userData.lastName}` : ""}
        onEdit={() => setIsEditing(true)}
        accountData={accountData}
      />

      {isEditing && (
        <Profile
          onClose={() => setIsEditing(false)}
          onSave={handleEditName}
          currentName={
            userData ? `${userData.firstName} ${userData.lastName}` : ""
          }
        />
      )}
    </main>
  );
};

export default User;
