import { useState } from "react";
import servicesImage from "../assets/img3.jpg";

const serviceGroups = [
  {
    title: "Surface Treatment",
    services: [
      ["format_paint", "Blasting & Painting (Abrasive & Hydro Blasting)", "Offshore, onshore and workshop blasting for tanks, barges, flow stations, gas terminals and FPSOs. High-tolerance surface profiling and coating systems."]
    ]
  },
  {
    title: "Inspection & Testing",
    services: [
      ["fact_check", "Inspection Services", "Quality assurance, structural verification, industrial standards checks, vendor assessment and commissioning validation."],
      ["valve", "Leak/Pressure Testing", "Onshore and offshore piping, tank and vessel integrity testing using calibrated telemetry and hydro-testing assemblies."],
      ["biotech", "NDT Services", "UT, MPT, RT, VI, PT, AUT, PAUT, EC and PEC. Non-destructive testing for critical components without operational disruption."]
    ]
  },
  {
    title: "Specialist Services",
    services: [
      ["electric_meter", "Electrical & Instrumentations", "Sensor calibration and equipment power setups, loop verification, switchboard maintenance and hazardous-area requirements."],
      ["cable", "Cable Pulling", "Industrial electrical configurations, subsea umbilical lay-ins, cable-tray routing and termination testing."],
      ["downhill_skiing", "Rope Access", "Technicians for hard-to-reach inspection areas, including riser, flare-stack and hull interventions."],
      ["device_thermostat", "Thermal Insulation", "Temperature-critical cladding and pipe works, including cryogenic and high-heat insulation to help prevent corrosion under insulation."],
      ["local_fire_department", "Fire Proofing", "Structural safety applications and passive fire barriers, including cementitious and intumescent coating installations."],
      ["view_column", "Scaffold Activities", "Scaffold erection, audits and load-safety checks for marine environments and complex offshore configurations."]
    ]
  },
  {
    title: "Industrial Cleaning",
    services: [
      ["cleaning_services", "Work at Height Industrial Cleaning", "Rope-access and facility cleaning, window cleaning and pressure washing for critical process structures."]
    ]
  },
  {
    title: "Welding & Fabrication",
    services: [
      ["handyman", "Welding & Weld Repairs (Structural & Piping)", "Structural and piping weld repairs, rig and platform repairs, boat-landing fabrication and hot-work execution."]
    ]
  },
  {
    title: "Mechanical Services",
    services: [
      ["forklift", "Rigging (Aerial Rigging at Height)", "Specialist rig setups, cable operations and high-altitude rigging, with lifting-gear calculations and load analysis."],
      ["construction", "Fitting/Bolting Services (Bolt Tensioning & Hot Bolting)", "Hydraulic torque tensioning and live-process flange refurbishment for platforms, petrochemical plants and drilling rigs."],
      ["build_circle", "Installation Services", "Component integration and systems setup, including skid alignment, valve replacement and auxiliary equipment mounting."]
    ]
  },
  {
    title: "Maintenance & Support",
    services: [
      ["domain", "Facility Maintenance", "Industrial facilities and administrative structures, including routine integrity management, HVAC maintenance and structural remediation."],
      ["storage", "Tank Maintenance & Inspection", "Tank evaluation, annular-plate inspection, clean-up, repair and protective lining, with inspection support."],
      ["water_damage", "Tank Clearing Services", "Sludge management, safe entry, gas-freeing, waste disposal and environmentally responsible handling."],
      ["autorenew", "Shutdown/Turnaround Maintenance", "Coordinated, time-critical refinery and facility maintenance designed to reduce operational downtime."],
      ["apartment", "High Rise Building Maintenance", "Rope-access facade upkeep, glass replacement, structural sealant renewal and anchor testing."]
    ]
  },
  {
    title: "Workforce & Emergency",
    services: [
      ["groups", "Manpower Supply", "Qualified engineers and technicians for multidisciplinary roles across upstream, midstream and downstream operations."],
      ["emergency", "Emergency Rescue Standby Service", "Trained rescue teams for work at height and confined-space activities, with extraction readiness and medical staging."],
      ["account_tree", "Projects Support (Onshore & Offshore)", "Project administration, logistics coordination, procurement support and onshore fabrication liaison."]
    ]
  }
];

function ServiceIcon({ name }) {
  return <span className="material-symbols-outlined" aria-hidden="true">{name}</span>;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({ name: "", email: "", scope: "" });

  const openEnquiry = (service) => {
    setSelectedService(service);
    setForm({ name: "", email: "", scope: "" });
  };

  const closeEnquiry = () => setSelectedService("");

  const submitEnquiry = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Service enquiry: ${selectedService}`);
    const body = encodeURIComponent(
      `Selected service: ${selectedService}\nFull name: ${form.name}\nCorporate email: ${form.email}\nLocation / scope: ${form.scope}`
    );
    window.location.href = `mailto:hazelprcompanyltd12@gmail.com?subject=${subject}&body=${body}`;
  };

  const serviceCount = serviceGroups.reduce((total, group) => total + group.services.length, 0);

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container services-hero-layout">
          <div className="services-hero-copy">
            <div className="services-eyebrow"><i />Comprehensive Capabilities Matrix</div>
            <h1>Our Services &amp; Activities</h1>
            <p>Integrated offshore, onshore and specialized technical operations delivered with a focus on quality assurance, applicable industry standards and safe field execution.</p>
            <div className="services-hero-actions">
              <a className="services-button services-button-primary" href="#matrix">Browse Directory <ServiceIcon name="south" /></a>
              
            </div>
          </div>

          <div className="services-showcase">
            <div className="services-showcase-head">
              <span><ServiceIcon name="precision_manufacturing" />Field Operations // HAZEL-PR</span>
              <b>Capabilities</b>
            </div>
            <div className="services-showcase-image">
              <img src={servicesImage} alt="Industrial operations image representing Hazel PR Company's technical services" />
              <div className="services-image-caption">Technical Services • Onshore &amp; Offshore Operations</div>
            </div>
            <div className="services-metrics">
              <div><span>Service Divisions</span><strong>08</strong></div>
              <div><span>Field Modules</span><strong>{serviceCount}</strong></div>
              <div><span>Availability</span><strong>Project-based</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-directory" id="matrix">
        <div className="container services-directory-inner">
          <div className="services-directory-heading">
            <div><span>Operational Scope</span><h2>Technical Services Directory</h2></div>
            <p>8 Core Divisions <i /> {serviceCount} Listed Services</p>
          </div>

          {serviceGroups.map((group) => (
            <section className="services-category" key={group.title}>
              <div className="services-category-title"><i /><h3>{group.title}</h3></div>
              <div className="services-card-grid">
                {group.services.map(([icon, title, description]) => (
                  <article className="services-card" key={title}>
                    <div className="services-card-content">
                      <div className="services-card-icon"><ServiceIcon name={icon} /></div>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                    <button type="button" className="services-enquire" onClick={() => openEnquiry(title)}>
                      Enquire Service <ServiceIcon name="arrow_forward" />
                    </button>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="services-bottom-cta">
        <div className="container">
          <div className="services-support-icon"><ServiceIcon name="support_agent" /></div>
          <h2>Discuss Your Requirements</h2>
          <p>Contact our Port Harcourt team for project enquiries, technical consultations and service planning.</p>
          <a className="services-button services-button-light" href="/contact">Contact Us</a>
        </div>
      </section>

      {selectedService && (
        <div className="services-modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeEnquiry();
        }}>
          <section className="services-modal" role="dialog" aria-modal="true" aria-labelledby="services-modal-title">
            <button type="button" className="services-modal-close" aria-label="Close enquiry form" onClick={closeEnquiry}><ServiceIcon name="close" /></button>
            <div className="services-modal-kicker"><ServiceIcon name="assignment" />Procurement Desk</div>
            <h2 id="services-modal-title">Service Request</h2>
            <p>Share your contact details and a brief description of the work required.</p>
            <form onSubmit={submitEnquiry}>
              <label>Selected Capability<input value={selectedService} readOnly /></label>
              <div className="services-form-row">
                <label>Full Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your full name" /></label>
                <label>Corporate Email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="name@company.com" /></label>
              </div>
              <label>Operational Location / Scope Notes<textarea rows="4" value={form.scope} onChange={(event) => setForm({ ...form, scope: event.target.value })} placeholder="Include the site location, scope of work and expected schedule." /></label>
              <div className="services-modal-actions">
                <button type="button" className="services-cancel" onClick={closeEnquiry}>Cancel</button>
                <button type="submit" className="services-send">Continue by Email <ServiceIcon name="arrow_forward" /></button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
