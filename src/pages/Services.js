import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const serviceCategories = [
  {
    category: "General Appointment",
    services: [
      {
        id: 'general',
        title: 'General Consultation',
        duration: '1 hr',
        price: 'Depends on Treatment plan',
        description: `Book a general service for an effortless appointment where we can discuss and find the perfect fit for you. If you already have something specific in mind, you'll discover a delightful array of Tailored Ayurvedic services to choose from. Feel free to reach out to us with any questions – we're here to make your journey with us a blissful one!`,
        bookingUrl: '/booking'
      }
    ]
  },
  {
    category: "Panchakarma",
    services: [
      {
        id: 'panchakarma',
        title: 'Ayurvedic Detox/Panchakarma',
        duration: '1 hr',
        price: 'Depends on the treatment',
        description: `Panchakarma takes you on a unique journey into a mind-body healing experience for detoxifying the body, strengthening the immune system, and restoring balance and wellbeing through five therapeutic treatments in a pure, spiritual, yogic environment.`,
        bookingUrl: '/booking/panchakarma'
      },
      {
        id: 'spring-detox',
        title: 'Spring Detox Program',
        duration: '1 hr',
        price: '$220-$700',
        description: `This program is a group event and consists of 3 days, 7 days, or 11 days program based on the physical ability of an individual after an assessment conducted by vaidya.`,
        bookingUrl: '/booking/spring-detox'
      }
    ]
  },
  {
    category: "Tailored Services",
    services: [
      {
        id: 'nadi-pareeksha',
        title: 'Nadi Pareeksha/Ayurvedic Pulse Analysis',
        duration: '1 hr',
        price: 'Price varies',
        description: `Pulse diagnosis or Nadi Pareeksha is done using the signals obtained from three precise locations on the wrist at the radial artery using the index, middle and ring fingers corresponding to Vata, Pitta, and Kapha.`,
        bookingUrl: '/booking/nadi-pareeksha'
      },
      {
        id: 'pain-management',
        title: 'Pain Management',
        duration: '1 hr',
        price: 'Depends on Treatment plan',
        description: `Pain management therapies at Ayurvedic clinic mostly focus on using natural ingredients such as herbal oils, plant extracts or pastes.`,
        bookingUrl: '/booking/pain-management'
      },
      {
        id: 'weight-management',
        title: 'Weight Management',
        duration: '1 hr',
        price: 'Depends on the treatment',
        description: `Ayurvedic treatment for Weight Loss offered at our Clinic is a combination of massage, lifestyle changes, and some special Ayurvedic medications.`,
        bookingUrl: '/booking/weight-management'
      },
      {
        id: 'skin-care',
        title: 'Lepanam/Skin Care',
        duration: '1 hr',
        price: 'Depends on the treatment',
        description: `By following a regular Ayurvedic skincare routine, you can avoid damage from pollutions, chemicals, harmful sunrays, etc.`,
        bookingUrl: '/booking/skin-care'
      },
      {
        id: 'abhyangam',
        title: 'Abhyangam/Kati Basti',
        duration: '1 hr',
        price: 'Depends on the treatment',
        description: `A full body massage (Head to Toe) done with medicated herbal oils. It relieves pains and aches in the joints by lubricating them, improves blood circulation and channelizes nerve endings.`,
        bookingUrl: '/booking/abhyangam'
      },
      {
        id: 'shirodhara',
        title: 'Shirodhara',
        duration: '1 hr',
        price: 'Depends on the treatment',
        description: `This healing massage involves the continuous pouring of medicated oil on the forehead with pendulum motion for a specific period of time.`,
        bookingUrl: '/booking/shirodhara'
      },
      {
        id: 'allergies',
        title: 'Allergies Remedies',
        duration: '1 hr',
        price: 'Depends on the treatment',
        description: `Ayurveda, which is the oldest surviving medicinal system, has suggested a few therapies to increase the body's natural Immunity to disease.`,
        bookingUrl: '/booking/allergies'
      },
      {
        id: 'gastritis',
        title: 'Gastritis/Amapitta',
        duration: '1 hr',
        price: 'At the time of Service',
        description: `Ayurveda describes chronic gastritis disease as Ama Pitta. The pitta dosha is vitiated and the person gets sour eructations, burning in the chest along with indigestion.`,
        bookingUrl: '/booking/gastritis'
      }
    ]
  }
];

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      {serviceCategories.map((category, index) => (
        <div key={index} className="service-category">
          <h2>{category.category}</h2>
          <div className="service-grid">
            {category.services.map((service) => (
              <div key={service.id} className="card">
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p className="service-details">
                    <span>{service.duration}</span> | <span>{service.price}</span>
                  </p>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="card-footer">
                  <Link to={`/booking/${service.id}`} className="button">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
