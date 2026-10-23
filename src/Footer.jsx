import { Link } from "react-router-dom";
import { business } from "./business.js"
import PrivacyNotice from "./privacy.jsx";

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="/#about">
        <img className="brand-logo" src="/images/bb-paw-logo.png" alt="" />
        {business.name}
      </a>
      <span>
        <Link to="/terms">Terms &amp; Conditions</Link>
      </span>
      <span>
        <Link to="/privacy">Privacy Notice</Link>
      </span>
      <span>
        © {new Date().getFullYear()} {business.name}
      </span>
      <a href="/#about">Back to the top ↑</a>
    </footer>
  );
}

export default Footer;
