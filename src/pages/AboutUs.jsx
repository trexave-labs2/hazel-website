import aboutImage from "../assets/img2.jpg";

const industries = [
  { icon: "oil_barrel", title: "Oil & Gas", text: "Upstream and midstream production support, pipeline servicing, and mechanical pipeline integrity." },
  { icon: "bolt", title: "Energy", text: "Power generation systems, grid distribution support, renewable integration, and facility electrical audits." },
  { icon: "construction", title: "Construction", text: "Structural civil projects, industrial plant erection, shoreline stabilisation, and foundation engineering." },
  { icon: "directions_boat", title: "Maritime", text: "Vessel chartering, offshore support logistics, harbour operations, and marine safety." },
];

const focusAreas = [
  ["Continuous Value", "Commitment to constant growth and improvement for value-added solutions."],
  ["Turnaround Time", "Competent staff trained to deliver results within reasonable turnaround times."],
  ["Standard Procedures", "Appropriate equipment and developed industrial-standard procedures."],
  ["Field Leadership", "Principal engineers with extensive hands-on experience."],
  ["Technical Acumen", "Knowledge and practical experience across engineering and technical disciplines."],
  ["HSE Integrity", "Professional, versatile, and quality services delivered safely and responsibly."],
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-layout">
          <div className="about-hero-copy">
            <span className="about-eyebrow"><i /> Institutional Overview</span>
            <h1>About Hazel PR Company Limited</h1>
            <p>A frontline Nigerian indigenous enterprise driving engineering precision, offshore operational capability, and technical compliance across high-demand industrial sectors.</p>
            <div className="about-registry">
              <div><span>Corporate Registry</span><strong>RC: 1946114</strong></div>
              <i />
              <div><span>Ownership Standard</span><strong>100% Indigenous</strong></div>
            </div>
          </div>
          <div className="about-hero-image">
            <img src={aboutImage} alt="Hazel PR Company industrial operations" />
            <div className="about-image-caption">
              <div><span>Technical Infrastructure</span><strong>Operational Capability & Field Support</strong></div>
              <span className="material-symbols-outlined">verified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-section-heading"><h2>Introduction</h2><i /></div>
          <div className="about-intro-grid">
            <aside className="about-entity-card">
              <span className="about-kicker">Company Overview</span>
              <h3>Who We Are</h3>
              <p>Hazel PR Company Limited (RC: 1946114) is incorporated in Nigeria to provide competent services to the oil and gas and energy industries.</p>
              <div><span>Statutory Registration</span><strong>RC 1946114 / Federal Republic of Nigeria</strong></div>
            </aside>
            <div className="about-intro-copy">
              <p className="about-lead">Hazel PR Company Limited is a 100% indigenous-owned company, with foreign technical support partners focused on providing diverse technical services to the oil and gas, energy, construction, and maritime industries in Nigeria and beyond.</p>
              <p>Supported by strategic international alliances and domestic operational experience, our approach brings together regulatory awareness, practical field execution, appropriate equipment, and technical support.</p>
              <div className="about-strength-grid">
                <article><span className="material-symbols-outlined">corporate_fare</span><h3>Domestic Reach</h3><p>Operational experience across the Niger Delta and wider Nigerian market.</p></article>
                <article><span className="material-symbols-outlined">handshake</span><h3>Foreign Partners</h3><p>Technical support networks and equipment-sourcing relationships.</p></article>
                <article><span className="material-symbols-outlined">engineering</span><h3>Skilled Workforce</h3><p>Qualified local and international technical professionals.</p></article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-industries">
        <div className="container">
          <div className="about-centered-heading"><h2>Key Industries</h2><p>Core Operational Verticals</p></div>
          <div className="about-industry-grid">
            {industries.map((item) => <article className="about-industry-card" key={item.title}><span className="material-symbols-outlined">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="about-charter">
        <div className="container about-charter-grid">
          <article className="about-charter-card"><div className="about-charter-top"><span>Charter 01</span><i className="material-symbols-outlined">target</i></div><h2>Our Mission</h2><p>To serve customers with qualified professionals and strong technical skills, maintaining high standards of efficiency and integrity while meeting demanding requirements.</p><div className="about-charter-note"><span className="material-symbols-outlined">verified_user</span> Standard: Efficiency & Integrity</div></article>
          <article className="about-charter-card"><div className="about-charter-top"><span>Charter 02</span><i className="material-symbols-outlined">visibility</i></div><h2>Our Vision</h2><p>To make a significant impact across oil and gas and non-oil and gas operations through efficient, enterprising, safe, and innovative service that creates value for clients, employees, and shareholders.</p><div className="about-charter-note"><span className="material-symbols-outlined">trending_up</span> Goal: Multi-Sector Value Creation</div></article>
        </div>
      </section>

      <section className="about-focus">
        <div className="container">
          <div className="about-section-heading"><h2>Our Core Focus</h2><i /></div>
          <div className="about-focus-grid">{focusAreas.map(([title, text]) => <article key={title}><div><i /> <span>{title}</span></div><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="about-policies">
        <div className="container">
          <div className="about-section-heading"><h2>Corporate Policies</h2><i /></div>
          <div className="about-policy-grid">
            <article><div className="about-policy-kicker"><span className="material-symbols-outlined">flag</span> Local Participation</div><h3>Local Content Policy</h3><p>Committed to narrowing the skills gap between expatriate and Nigerian workers through local participation, staff training, and continuous development.</p><div><span>Local Content Commitment</span><p>Human-capital advancement and indigenous technology transfer.</p></div></article>
            <article><div className="about-policy-kicker"><span className="material-symbols-outlined">workspace_premium</span> Quality Management Approach</div><h3>Quality Policy</h3><p>Meeting customer requirements, continually evaluating our quality systems, and delivering services in line with agreed contractual obligations.</p><div><span>Contract Quality Procedures</span><p>Systematic reviews and adherence to applicable contract specifications.</p></div></article>
          </div>
        </div>
      </section>

      <section className="about-cta"><div className="container"><h2>Want to Learn More?</h2><p>Speak with our team about procurement inquiries, capability statements, or potential partnerships.</p><a className="button button-primary" href="/contact">Contact Us <span className="material-symbols-outlined">arrow_forward</span></a></div></section>
    </div>
  );
}
