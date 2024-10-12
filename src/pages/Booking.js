import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';
import './Booking.css';

function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [healthCondition, setHealthCondition] = useState('');
  const [showCalendly, setShowCalendly] = useState(false);
  const { serviceType } = useParams();
  const [serviceName, setServiceName] = useState('');

  const getServiceName = (serviceType) => {
    const serviceNames = {
      'general': 'General Consultation',
      'panchakarma': 'Ayurvedic Detox/Panchakarma',
      'spring-detox': 'Spring Detox Program',
      'nadi-pareeksha': 'Nadi Pareeksha/Ayurvedic Pulse Analysis',
      'pain-management': 'Pain Management',
      'weight-management': 'Weight Management',
      'skin-care': 'Lepanam/Skin Care',
      'abhyangam': 'Abhyangam/Kati Basti',
      'shirodhara': 'Shirodhara',
      'allergies': 'Allergies Remedies',
      'gastritis': 'Gastritis/Amapitta'
    };
    return serviceNames[serviceType] || 'General Consultation';
  };

  useEffect(() => {
    if (serviceType) {
      setServiceName(getServiceName(serviceType));
    }
  }, [serviceType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  return (
    <div className="booking">
      <h1>Book an Appointment{serviceName ? ` for ${serviceName}` : ''}</h1>
      {!showCalendly ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="healthCondition">Present Health Condition</label>
            <textarea
              id="healthCondition"
              value={healthCondition}
              onChange={(e) => setHealthCondition(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Proceed to Book Appointment</button>
        </form>
      ) : (
        <InlineWidget
          url="https://calendly.com/roayur21/ayur-appointment-1"
          prefill={{
            name: `${name} - ${serviceName || 'General Consultation'}`,
            email: email,
            customAnswers: {
              a1: phone,
              a2: healthCondition
            }
          }}
          styles={{
            height: '1000px',
            minWidth: '320px'
          }}
        />
      )}
    </div>
  );
}

export default Booking;
