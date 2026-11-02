import heroImage from "../assets/img1.jpg";

const services = [
  { icon: "construction", title: "Welding & Fabrication", description: "Structural and piping repairs, offshore platform adjustments, and metal joining and fabrication work." },
  { icon: "format_paint", title: "Blasting & Coating", description: "Abrasive and hydro blasting onshore and offshore to preserve structural integrity against marine corrosion." },
  { icon: "biotech", title: "NDT Services", description: "Non-destructive testing (UT, MPT, RT, PAUT) assuring asset integrity without unnecessary downtime." },
  { icon: "paragliding", title: "Rope Access", description: "Specialist work at height for inspections, maintenance, and structural cleaning in restricted marine zones." },
  { icon: "propane_tank", title: "Tank Maintenance & Inspection", description: "Thorough testing, sludge removal, internal clearing, and tank inspection and maintenance support." },
  { icon: "precision_manufacturing", title: "Installation Services", description: "High-standard engineering setups, subsea rigging assembly, and heavy industrial instrumentation commissioning." },
];

const industries = [
  { icon: "oil_barrel", title: "Oil & Gas", detail: "Upstream & Downstream" },
  { icon: "bolt", title: "Energy", detail: "Generation & Transmission" },
  { icon: "apartment", title: "Construction", detail: "Civil & Heavy Civil Works" },
  { icon: "sailing", title: "Maritime", detail: "Offshore & Harbor Fleet" },
];

const reasons = [
  { title: "100% Indigenous Ownership", description: "Fully Nigerian owned enterprise backed by seamless foreign technical support networks." },
  { title: "Qualified Professionals", description: "Expert personnel with rigorous field experience handling critical industrial systems." },
  { title: "Industrial Equipment", description: "Calibrated modern machinery and tools engineered for reliable performance." },
  { title: "Local Content Commitment", description: "Dedicated to human capital empowerment and uncompromising technical delivery." },
];

const clients = [
  { icon: "apartment", name: "Eliminigwe Housing Estate Elelenwon" },
  { icon: "school", name: "Cedar Harvester Montessori Schools" },
  { icon: "corporate_fare", name: "Amobi Services Ltd." },
];

function SectionHeading({ title, description }) {
  return <div className="section-heading"><h2>{title}</h2><span className="section-rule" /><p>{description}</p></div>;
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="home-container hero-layout">
          <div className="hero-copy">
            <div className="compliance-pill"><span />INDIGENOUS TECHNICAL SERVICES</div>
            <h1>Professional Technical Services for Oil &amp; Gas, Energy, Construction &amp; Maritime Industries</h1>
            <p className="hero-description">Hazel PR Company Limited is a 100% indigenous owned company with foreign technical support partners focused on providing diverse technical services in Nigeria and beyond.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/contact">Contact Us</a>
              <a className="button button-secondary" href="/services">Explore Services <span className="material-symbols-outlined">arrow_forward</span></a>
            </div>
            <div className="hero-stats">
              <div><strong>100%</strong><span>Indigenous Equity</span></div>
              
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Industrial and offshore technical operations" />
            <div className="hero-image-shade" />
            <div className="hero-image-top">
              <span><span className="material-symbols-outlined">verified</span> TECHNICAL SERVICES</span>
              <span>PORT HARCOURT OPERATIONAL BASE</span>
            </div>
            <div className="deployment-card">
              <div className="deployment-heading"><span><span className="material-symbols-outlined">engineering</span>Technical Services</span><b>Onshore &amp; Offshore</b></div>
              <p>Technical support for industrial and infrastructure projects.</p>
              <div className="deployment-progress"><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section services-section">
        <div className="home-container">
          <SectionHeading title="What We Do" description="Leading engineering &amp; support services delivering precision and safety." />
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.title}>
              <div className="service-icon"><span className="material-symbols-outlined">{service.icon}</span></div>
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
              <a className="service-standard" href="/services">Explore service <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="home-section industries-section">
        <div className="home-container">
          <SectionHeading title="Industries We Serve" description="Providing mission-critical engineering solutions across essential economic infrastructure." />
          <div className="industry-grid">
            {industries.map((industry) => <article className="industry-card" key={industry.title}>
              <div className="industry-icon"><span className="material-symbols-outlined">{industry.icon}</span></div>
              <div><h3>{industry.title}</h3><p>{industry.detail}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="home-section reasons-section">
        <div className="home-container reasons-layout">
          <div className="reasons-intro">
            <SectionHeading title="Why Choose Hazel PR Company" description="Through strategic alliances, meticulous standard execution, and deep-rooted local proficiency, we establish dependable benchmarks across every operational theatre." />
            <div className="compliance-note"><strong>SERVICE APPROACH</strong><p>Direct alignment with applicable Nigerian regulatory requirements and relevant international industrial standards.</p></div>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason) => <article className="reason-card" key={reason.title}>
              <span className="reason-check material-symbols-outlined">check</span>
              <div><h3>{reason.title}</h3><p>{reason.description}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="security-callout">
        <div className="home-container security-panel">
          <div className="security-title"><div className="security-icon"><span className="material-symbols-outlined">security</span></div><div><span>SECURITY DIVISION</span><h2>Hazel Security — Our Security Division</h2></div></div>
          <div className="security-description"><p>Providing comprehensive security solutions including guard services, CCTV surveillance, access control, and private investigation across onshore assets and marine facilities.</p><a className="button button-primary" href="/hazel-security">Learn More</a></div>
        </div>
      </section>

      <section className="home-section clients-section">
        <div className="home-container">
          <SectionHeading title="Our Clients" description="Organizations listed by Hazel PR Company." />
          <div className="client-grid">
            {clients.map((client) => <article className="client-card" key={client.name}><span className="material-symbols-outlined">{client.icon}</span><h3>{client.name}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="home-section mission-section">
        <div className="home-container mission-grid">
          <article className="mission-card"><div className="mission-icon"><span className="material-symbols-outlined">flag</span></div><h2>Our Mission</h2><p>To serve customers with qualified professionals and the best technical skills with the highest standard of efficiency and integrity, assuring quality and satisfaction for even the most stringent requirements.</p><span className="mission-caption">INTEGRITY DRIVEN <i /> CLIENT FOCUSED</span></article>
          <article className="mission-card"><div className="mission-icon"><span className="material-symbols-outlined">visibility</span></div><h2>Our Vision</h2><p>To make a significant impact across the Oil &amp; Gas and non-oil sectors through efficient, enterprising, safe, and innovative operations that create value for shareholders, clients, and employees.</p><span className="mission-caption">SUSTAINABLE GROWTH <i /> GLOBAL STANDARDS</span></article>
        </div>
      </section>

      <section className="bottom-cta"><div className="home-container bottom-cta-content"><div><h2>Ready to Discuss Your Requirements?</h2><p>Connect with our engineering specialists in Port Harcourt today.</p></div><a className="button button-light" href="/contact">Get In Touch</a></div></section>
    </div>
  );
}
