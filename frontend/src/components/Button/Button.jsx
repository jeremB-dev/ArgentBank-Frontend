import PropTypes from "prop-types";

const Button = ({ btnText, onClick, type, className }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
