import "../styles/Footer.css";
import playsonicLogo from "../assets/images/Playsonic_icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={playsonicLogo} alt="Playsonic Logo" />
        </div>

        <div className="footer-section">
          <h4>Playsonic</h4>
          <ul>
            <li>
              <a href="#">Download our app</a>
            </li>
            <li>
              <a href="#">Work with us</a>
            </li>
           
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Legal conditions</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Cancellation policy</a>
            </li>
            <li>
              <a id="account-deletion" href="#">
                Request account deletion
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow us</h4>
          <div className="rounded-social-buttons">
            <a
              className="social-button facebook"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="social-button linkedin"
              href="https://www.linkedin.com/company/playsonic"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
{  /*         <a
              className="social-button tiktok"
              href="https://www.tiktok.com/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a> */}
            <a
              className="social-button instagram"
              href="https://www.instagram.com/playsonicjo/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Playsonic All rights reserved.</p>
      </div>
    </footer>
  );
}