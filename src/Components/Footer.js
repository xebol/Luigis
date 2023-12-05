import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="address">
          <h3>Address</h3>
          <p>123 Rainbow Road</p>
        </div>
        <div className="number">
          <h3>Phone Number</h3>
          <p>55-555-555</p>
        </div>
        <div className="hours">
          <h3>Hours</h3>
          <p>24/7</p>
        </div>
        <div className="social">
        <h3>Socials</h3>
          <div className="icons">
          <FontAwesomeIcon icon={faSquareInstagram} className="fa-icon fa-2x" />
          <FontAwesomeIcon icon={faTwitter} className="fa-icon fa-2x" />
          <FontAwesomeIcon icon={faSquareFacebook} className="fa-icon fa-2x" />
        </div>
        </div>
      </div>
    </div>
  );
};



export default Footer;