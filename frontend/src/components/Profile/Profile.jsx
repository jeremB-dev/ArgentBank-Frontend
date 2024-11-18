import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Profile = ({ onClose, onSave, currentName }) => {
  const [userName, setUserName] = useState(currentName);

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
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  currentName: PropTypes.string.isRequired,
};

export default Profile;
