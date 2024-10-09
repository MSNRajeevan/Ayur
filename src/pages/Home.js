import React, { useState } from 'react';
import GoogleReviewsWidget from '../components/GoogleReviewsWidget';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import './Home.css';

console.log('Firestore instance:', firestore);

function Home() {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, 'subscribers'), { 
        email,
        subscriptionDate: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Error adding subscriber: ', error);
      alert(`Failed to subscribe. Error: ${error.message}`);
    }
  };

  const featuredServices = [
    { title: 'Ayurvedic Consultation', icon: 'fa-user-md', description: 'Personalized health assessment and treatment plan.' },
    { title: 'Panchakarma Therapy', icon: 'fa-spa', description: 'Deep cleansing and rejuvenation treatments.' },
    { title: 'Nadi Pareeksha', icon: 'fa-heartbeat', description: 'Ayurvedic pulse diagnosis for holistic health assessment.' },
    { title: 'Pain Management', icon: 'fa-band-aid', description: 'Natural therapies for chronic pain relief.' },
    { title: 'Weight Management', icon: 'fa-weight', description: 'Ayurvedic approach to healthy weight loss.' },
    { title: 'Skin Care', icon: 'fa-leaf', description: 'Herbal treatments for radiant, healthy skin.' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Rohini Ayurvedic Wellness Center Health Clinic</h1>
        <p>Discover the ancient wisdom of Ayurveda for holistic well-being</p>
      </section>

      <section className="intro">
        <h2>Embrace the Wisdom of Ayurveda</h2>
        <p>
          At Rohini Ayurvedic Wellness Center Health Clinic, we offer a range of services to help you maintain your health and well-being. From preventative care to chronic disease management, our team of healthcare professionals is here for you every step of the way.
        </p>
      </section>

      <section className="cta-section">
        <div className="cta-card cta-book">
          <h2>Ready to Start Your Ayurvedic Journey?</h2>
          <p>Book your consultation today and take the first step towards holistic health.</p>
          <Link to="/booking" className="cta-button">Book Your Appointment Now</Link>
        </div>

        <div className="cta-card cta-newsletter">
          <h2>Stay Updated with Ayurvedic Wisdom</h2>
          <p>Sign up for our newsletter to receive tips, recipes, and insights from Ayurveda.</p>
          <form onSubmit={handleNewsletterSignup}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-button">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="featured-services">
        <h2>Our Holistic Offerings</h2>
        <div className="service-grid">
          {featuredServices.map((service, index) => (
            <div key={index} className="service-card">
              <i className={`fas ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="service-button">Learn More</Link>
            </div>
          ))}
        </div>
        <Link to="/services" className="cta-button">Explore All Services</Link>
      </section>

      <section className="about-us">
        <h2>Meet Our Team</h2>
        <p>Our team is made up of highly skilled and compassionate healthcare professionals who are dedicated to providing you with the best possible care. Get to know our team and learn more about their areas of expertise.</p>
        <Link to="/about" className="cta-button">Learn More About Our Practice</Link>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <GoogleReviewsWidget />
      </section>

      <section className="patient-resources">
        <h2>Patient Resources</h2>
        <p>We believe that healthcare is a partnership between patients and providers. That's why we offer a range of resources to help you stay informed and engaged in your care, including educational materials and online tools.</p>
        <Link to="/resources" className="cta-button">Explore Patient Resources</Link>
      </section>

      <section className="insurance-billing">
        <h2>Insurance and Billing</h2>
        <p>We accept most major insurance plans and offer a range of payment options to make your healthcare experience as seamless as possible.</p>
        <Link to="/insurance" className="cta-button">Learn More About Billing</Link>
      </section>

      <GoogleReviewsWidget />

    </div>
  );
}

export default Home;
