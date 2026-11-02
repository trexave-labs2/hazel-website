import securityImage from "../assets/img4.jpg";

const securityServices = [
  { icon: "home_work", title: "Residential & Commercial Guard Service", description: "Securing premises, residential estates, high-value commercial properties, and corporate headquarters." },
  { icon: "factory", title: "Industrial & Corporate Guard Service", description: "Asset integrity and perimeter access governance for factories, oil installations, and corporate office parks." },
  { icon: "groups_3", title: "Ceremonial & Rally Guard Service", description: "Crowd dynamics coordination, VIP movement safeguarding, and static line defence during large events." },
  { icon: "pets", title: "Dog Service", description: "Canine (K9) sniffing and patrol units trained for contraband detection, search and rescue, and deterrence." },
  { icon: "school", title: "Security Training", description: "Tactical workshops, defensive protocols, risk mitigation drills, and compliant corporate staff education." },
  { icon: "policy", title: "Private Investigation", description: "Discreet factual inquiries, loss investigation, background auditing, and evidentiary data compilation." },
  { icon: "videocam", title: "Surveillance Service at Location", description: "Real-time localized video observation, recording feeds, and perimeter sensor evaluation." },
];

const solutions = [
  { icon: "badge", title: "Access Control", detail: "Biometric & RFID" },
  { icon: "local_police", title: "Perimeter Patrol", detail: "Mobile Units" },
  { icon: "notifications_active", title: "Intruder Alarm Systems", detail: "Infrared Sensors" },
  { icon: "timer", title: "Time Attendance", detail: "Logging Portals" },
  { icon: "local_fire_department", title: "Fire Alarm Systems", detail: "Early Detection" },
  { icon: "nest_cam_outdoor", title: "CCTV", detail: "HD Continuous Recording" },
];

const duties = [
  "Trained security personnel on morning and night shifts",
  "Records of moveable and immovable items",
  "Kit and accessories for personnel",
  "Day and night patrol supervision",
  "Regular on-the-job training",
  "Prevent unauthorized access",
];

const training = [
  "General guard duties",
  "Code of conduct",
  "Loss prevention",
  "Report writing & record keeping",
  "Safety and security management",
];

function SectionHeading({ children }) {
  return <div className="security-section-heading"><h2>{children}</h2><span /></div>;
}

export default function HazelSecurity() {
  const enquirySubject = encodeURIComponent("Request for Hazel Security Services");
  const enquiryBody = encodeURIComponent("Hello Hazel Security,\n\nI would like to enquire about your security services.\n\nName / Organisation:\nService required:\nLocation:\nDetails:\n\nThank you.");
  return (
    <div className="security-page">
      <section className="security-hero">
        <div className="home-container security-hero-layout">
          <div className="security-hero-copy">
            <div className="security-eyebrow"><i />Tactical &amp; Industrial Guard Operations</div>
            <h1>Hazel Security</h1>
            <p className="security-division">A Division of Hazel PR Company Limited</p>
            <p className="security-hero-summary">Security services for residential, commercial and industrial environments.</p>
          </div>
          <div className="security-hero-visual">
            <img src={securityImage} alt="Hazel Security operations and personnel" />
            <div className="security-image-overlay">
              <span><span className="material-symbols-outlined">verified_user</span>COMMAND &amp; RESPONSE UNIT</span>
              <b>SECURITY OPERATIONS</b>
            </div>
          </div>
        </div>
      </section>

      <section className="security-intro security-section">
        <div className="home-container">
          <SectionHeading>Introduction</SectionHeading>
          <p className="security-intro-copy">Hazel Security provides comprehensive security solutions. With our wealth of experience in the provision of security services, our personnel will have no difficulty in handling your peculiar security needs.</p>
          <div className="security-feature-grid">
            <article><span className="material-symbols-outlined">security</span><div><h3>Vigilance First</h3><p>Continuous field threat monitoring and defensive operational posture.</p></div></article>
            <article><span className="material-symbols-outlined">model_training</span><div><h3>Personnel &amp; Procedures</h3><p>Service delivery guided by agreed procedures and client requirements.</p></div></article>
            <article><span className="material-symbols-outlined">precision_manufacturing</span><div><h3>Integrated Tech</h3><p>Seamless blend of human patrol vigilance and automated telemetry.</p></div></article>
          </div>
        </div>
      </section>

      <section className="security-services security-section">
        <div className="home-container">
          <SectionHeading>Our Services</SectionHeading>
          <div className="security-service-list">
            {securityServices.map((service) => <article key={service.title}>
              <div className="security-service-icon"><span className="material-symbols-outlined">{service.icon}</span></div>
              <div className="security-service-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
              <span className="material-symbols-outlined security-chevron">chevron_right</span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="security-solutions security-section">
        <div className="home-container">
          <div className="security-centered-heading"><span>HARDENED INFRASTRUCTURE</span><h2>Integrated Security Solutions</h2></div>
          <div className="security-solution-grid">
            {solutions.map((solution) => <article key={solution.title}>
              <span className="material-symbols-outlined">{solution.icon}</span><h3>{solution.title}</h3><p>{solution.detail}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="security-duties security-section">
        <div className="home-container">
          <SectionHeading>Our Scope of Service and Duties</SectionHeading>
          <div className="security-duty-grid">
            {duties.map((duty, index) => <article key={duty}><strong>{index + 1}.</strong><span>{duty}</span></article>)}
          </div>
        </div>
      </section>

      <section className="security-training security-section">
        <div className="home-container">
          <SectionHeading>Personnel Training Programme</SectionHeading>
          <div className="security-training-content"><h3>All staff trained under full knowledge of:</h3><ul>{training.map((item) => <li key={item}><i />{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="security-contact security-section">
        <div className="home-container security-contact-layout">
          <div className="security-contact-copy">
            <h2>Contact Hazel Security</h2>
            <div className="security-contact-details">
              <p><span className="material-symbols-outlined">location_on</span><span><strong>Address:</strong> 54 Ivigwe Road, Woji, Port Harcourt, Rivers State</span></p>
              <p><span className="material-symbols-outlined">call</span><span><strong>Tel:</strong> 0814 015 7380, 0818 472 0864, 0806 416 6710</span></p>
              <p><span className="material-symbols-outlined">mail</span><span><strong>Email:</strong> hazelsecurity12@gmail.com</span></p>
              <p><span className="material-symbols-outlined">language</span><span><strong>Website:</strong> www.hazelsecurity.com</span></p>
            </div>
          </div>
          <div className="security-contact-action">
            <a href={`mailto:hazelsecurity12@gmail.com?subject=${enquirySubject}&body=${enquiryBody}`}><span className="material-symbols-outlined">shield</span>Request Security Services</a>
            <span>Contact the Hazel Security team to discuss your deployment requirements.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
