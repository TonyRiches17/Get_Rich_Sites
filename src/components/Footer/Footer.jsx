import "./Footer.css";
import instagram from "../../assets/instagram.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__email">Direct all inquiries to <span>
          <a href="mailto: GetRichSites@gmail.com" className="footer__email-link">GetRichSites@gmail.com</a>
          </span></p>
          <p className="footer__social">Visit GetRichSites on Instagram
            <a href="https://instagram.com/getrichsites" className="footer__social-link">
            <img src={instagram} alt="The Instagram logo" className="footer__social-image" /></a>
          </p>
      </div>
      <p className="footer__copyright">&copy; Ri₵h 2025</p>
    </div>
  )
}

export default Footer;