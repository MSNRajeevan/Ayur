import React from 'react';
import { Link } from 'react-router-dom';
import './PatientResources.css';

function PatientResources() {
  return (
    <div className="patient-resources">
      <h1>Patient Resources</h1>
      
      <div className="resource-card">
        <section className="educational-materials">
          <h2>Educational Materials</h2>
          <p>Discover the principles of Ayurveda, its benefits, and how it can improve your overall well-being.</p>
          <Link to="/blog" className="resource-link">Visit Our Blog</Link>
        </section>

        <section className="insurance-billing">
          <h2>Billing</h2>
          <p>We offer a range of payment options to make your healthcare experience as seamless as possible.</p>
          <p>If you have any questions about our services or billing, please don't hesitate to reach out to us.</p>
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </section>
      </div>
    </div>
  );
}

export default PatientResources;