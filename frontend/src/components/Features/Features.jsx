import { PropTypes } from "prop-types";
// Import des images
import chatIcon from "../../assets/img/icon-chat.webp";
import moneyIcon from "../../assets/img/icon-money.webp";
import securityIcon from "../../assets/img/icon-security.webp";

const Features = ({ paragraph, title, image, alt }) => {
  // mapping des images
  const imageMap = {
    "icon-chat": chatIcon,
    "icon-money": moneyIcon,
    "icon-security": securityIcon,
  };
  // Extrait le nom de l'image sans le chemin et l'extension du fichier
  const imageName = image.split("/").pop().split(".")[0];

  return (
    <div className="feature-item">
      <img
        src={imageMap[imageName]}
        alt={alt}
        className="feature-icon"
        loading="lazy"
        width={100}
        height={100}
      />
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
