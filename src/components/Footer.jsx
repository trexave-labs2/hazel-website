import { Link } from "react-router-dom";
import hazelLogo from "../assets/logo.jpg";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Hazel Security", "/hazel-security"],
  ["Our Clients", "/clients"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="home-container footer-main">
        <div className="footer-about">
          <Link className="brand-lockup" to="/">
            <img className="brand-logo" src={hazelLogo} alt="Hazel PR Company logo" />
            <span className="brand-copy"><strong>HAZEL PR</strong><small>COMPANY LTD</small></span>
          </Link>
          <p>100% indigenous owned company with foreign technical support partners providing diverse technical services in Nigeria and beyond.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <div className="footer-links">{links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</div>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <div className="footer-contact">
            <p><span className="material-symbols-outlined">location_on</span><span>54 Ivigwe Road, Woji, Port Harcourt, Rivers State</span></p>
            <p><span className="material-symbols-outlined">call</span><span>Tel: 0814 015 7380, 0818 472 0864</span></p>
            <p><span className="material-symbols-outlined">mail</span><span>hazelprcompanyltd12@gmail.com</span></p>
            <p><span className="material-symbols-outlined">language</span><span>www.hazelprcompanyltd.com</span></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><div className="home-container footer-bottom-inner"><span>© {new Date().getFullYear()} Hazel PR Company Limited. All rights reserved.</span><span>Professional Technical Services</span></div></div>
    </footer>
  );
}
