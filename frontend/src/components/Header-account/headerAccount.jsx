import PropTypes from "prop-types";
import Button from "../Button/Button";

const Header = ({ userName, onEdit }) => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      <Button btnText="Edit Name" onClick={onEdit} className="edit-button" />
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Header;
