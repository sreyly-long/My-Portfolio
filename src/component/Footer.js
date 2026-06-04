import { Link } from "react-router-dom";
import instagram from "../photo/insta.png";
import facebook from "../photo/fac.png";
import telegram from "../photo/tele.webp";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="row gy-4 align-items-center">
          <div className="col-md-4">
            <div className="footer-brand">Long Sreyly</div>
            <p className="text-body-secondary mb-0 mt-1" style={{ color: "var(--text-faint)" }}>
              Front-End Developer · React
            </p>
          </div>

          <div className="col-md-4 text-md-center">
            <nav className="footer-nav justify-content-md-center">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="col-md-4">
            <div className="social-row justify-content-md-end">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://t.me/+855763643789" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <span>© {year} Long Sreyly. All rights reserved.</span>
          <span>Built with React &amp; Bootstrap</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
