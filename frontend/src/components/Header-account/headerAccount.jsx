import PropTypes from "prop-types";

const Header = ({ userName }) => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
