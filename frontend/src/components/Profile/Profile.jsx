import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Profile = ({ onClose, onSave, currentName }) => {
  const [firstName, setFirstName] = useState(currentName.split(" ")[0]);
  const [lastName, setLastName] = useState(currentName.split(" ")[1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(`${firstName} ${lastName}`);
  };

  return (
    <div className="edit-user-content">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="button-wrapper">
          <Button btnText="Save" onClick={handleSubmit} />
          <Button btnText="Cancel" onClick={onClose} />
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
