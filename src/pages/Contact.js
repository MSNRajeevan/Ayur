import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_zi3y8hl',
      'template_jg3qrbh', 
      {
        to_email: 'roayur21@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'j2i2dzxt_mv5JEf8G'
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <h2>Our Address</h2>
            <p>Rohini Ayurvedic Wellness Center</p>
            <p>1500 Scout Trace, Hoover, Alabama 35244, United States</p>
          </div>
          <div className="contact-card">
            <h2>Get in Touch</h2>
            <p>Email: <a href="mailto:drpbrohini@rohiniayur.com">drpbrohini@rohiniayur.com</a></p>
            <p>Email: <a href="mailto:roayur21@gmail.com">roayur21@gmail.com</a></p>
            <p>Phone: <a href="tel:205-920-1971">205-920-1971</a></p>
          </div>
          <div className="contact-card whatsapp-card">
            <h2>WhatsApp Us</h2>
            <a href="https://api.whatsapp.com/send/?phone=12059201971&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
              <i className="fab fa-whatsapp"></i> Message on WhatsApp
            </a>
          </div>
          <div className="contact-card map-card">
            <h2>Find Us</h2>
            <div className="map-container">
              <iframe
                title="Rohini Ayurvedic Wellness Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0765694961297!2d-86.83899568479757!3d33.49732798075879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888922e293c0ec6f%3A0x3f0d9b5d1e1e8f3a!2s1500%20Scout%20Trace%2C%20Hoover%2C%20AL%2035244%2C%20USA!5e0!3m2!1sen!2s!4v1621234567890!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1500+Scout+Trace,+Hoover,+Alabama+35244,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-button"
            >
              <i className="fas fa-map-marker-alt"></i> Get Directions
            </a>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-note">
            <p>Note: We aim to respond to all inquiries within 24-48 hours. For urgent matters, please call us directly at 205-920-1971. Your privacy is important to us, and all information submitted through this form will be kept confidential.</p>
          </div>
          <div className="additional-note">
            <p>Please note that this contact form is for general inquiries only. If you are experiencing a medical emergency, please call 911 or visit the nearest emergency room.</p>
            <p>For appointment scheduling or rescheduling, please call our office directly or use our online booking system.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;