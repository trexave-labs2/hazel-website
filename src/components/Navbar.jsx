import { NavLink } from "react-router-dom";
import hazelLogo from "../assets/logo.jpg";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/hazel-security", label: "Hazel Security" },
  { to: "/clients", label: "Our Clients" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar home-container" aria-label="Main navigation">
        <NavLink className="brand-lockup" to="/" aria-label="Hazel PR Company home">
          <img className="brand-logo" src={hazelLogo} alt="Hazel PR Company logo" />
          <span className="brand-copy"><strong>HAZEL PR</strong><small>COMPANY LTD</small></span>
        </NavLink>
        <div className="nav-links">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end}>{label}</NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <NavLink className="nav-contact" to="/contact">Contact Us</NavLink>
          <span className="nav-user" aria-hidden="true"><span className="material-symbols-outlined">person</span></span>
        </div>
      </nav>
    </header>
  );
}
