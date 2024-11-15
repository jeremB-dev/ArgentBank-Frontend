import { useState } from "react";
import Account from "../components/Account/Account";
import Profile from "../components/Profile/Profile";
import accountData from "../data/accountData";

const User = () => {
  const [userName, setUserName] = useState("Tony Jarvis");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditName = (newName) => {
    setUserName(newName);
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <Account
        userName={userName}
        onEdit={() => setIsEditing(true)}
        accountData={accountData}
      />

      {isEditing && (
        <Profile
          onClose={() => setIsEditing(false)}
          onSave={handleEditName}
          currentName={userName}
        />
      )}
    </main>
  );
};

export default User;
