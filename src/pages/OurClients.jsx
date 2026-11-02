import { Link } from "react-router-dom";
import cedarLogo from "../assets/logo-cedarharvestermontessorischools.jpg";
import amobiLogo from "../assets/logo-amobiservicesltd.jpg";

const clients = [
  {
    name: "Cedar Harvester Montessori Schools",
    category: "Education",
    logo: cedarLogo,
    alt: "Cedar Harvester Montessori Schools logo",
  },
  {
    name: "Eliminigwe Housing Estate Elelenwon",
    category: "Residential",
    icon: "domain",
  },
  {
    name: "Amobi Services Ltd.",
    category: "Energy / Maritime",
    logo: amobiLogo,
    alt: "Amobi Services Ltd. logo",
  },
];

function ClientLogo({ client }) {
  if (client.logo) {
    return (
      <div className="clients-logo-frame">
        <img src={client.logo} alt={client.alt} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="clients-logo-placeholder" aria-hidden="true">
      <span className="material-symbols-outlined">{client.icon}</span>
      <span>ORGANIZATION</span>
    </div>
  );
}

export default function OurClients() {
  return (
    <div className="clients-page">
      <section className="clients-hero">
        <div className="container">
          <div className="clients-hero-glow" />
          <div className="clients-eyebrow">
            <span className="material-symbols-outlined">groups</span>
            <span>Organizations</span>
          </div>
          <div className="clients-hero-copy">
            <h1>Our Clients</h1>
            <p>
              The organizations listed below are identified as clients of Hazel PR Company.
            </p>
          </div>
          <div className="clients-hero-standards">
            <div><i /><span>Service Enquiries</span></div>
            <div><i /><span>Technical & Support Services</span></div>
          </div>
         </div>
      </section>

      <section className="clients-directory">
        <div className="container clients-directory-inner">
          <div className="clients-directory-heading">
            <div>
              <span>Client Directory</span>
              <h2>Organizations</h2>
            </div>
          </div>

          <div className="clients-account-grid">
            {clients.map((client) => (
              <article className="clients-account-card" key={client.name}>
                <ClientLogo client={client} />
                <div className="clients-account-copy">
                  <div className="clients-account-meta">
                    <span>{client.category}</span>
                    </div>
                  <h3>{client.name}</h3>
                </div>
              </article>
            ))}
          </div>

       </div>
      </section>

      <section className="clients-enquiry">
        <div className="container">
          <div>
            <h2>Interested in Our Services?</h2>
            <p>
              Connect with our deployment specialists to architect tailored
              physical security, offshore logistics, or procurement operations
              for your facility.
            </p>
          </div>
          <div className="clients-enquiry-actions">
            <Link className="clients-enquiry-primary" to="/contact">
              Make an Enquiry
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link className="clients-enquiry-secondary" to="/services">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
