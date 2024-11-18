import PropTypes from "prop-types";

const Button = ({ btnText, onClick, type, className, ariaLabel }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Button;
