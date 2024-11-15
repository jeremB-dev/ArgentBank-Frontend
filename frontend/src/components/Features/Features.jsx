import { PropTypes } from "prop-types";
// Import des images
import chatIcon from "../../assets/img/icon-chat.png";
import moneyIcon from "../../assets/img/icon-money.png";
import securityIcon from "../../assets/img/icon-security.png";

const Features = ({ paragraph, title, image, alt }) => {
  // mapping des images
  const imageMap = {
    "../assets/img/icon-chat.png": chatIcon,
    "../assets/img/icon-money.png": moneyIcon,
    "../assets/img/icon-security.png": securityIcon,
  };

  return (
    <div className="feature-item">
      <img src={imageMap[image]} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

Features.propTypes = {
  paragraph: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Features;
