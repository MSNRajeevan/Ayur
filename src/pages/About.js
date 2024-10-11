import React from 'react';
import './About.css';
import drRohiniImage from '../assets/dr-rohini.jpg';
import Aboutreasons from '../assets/Aboutreasons.jpg';
import rohiniAyurvedicServices from '../assets/rohiniAyurvedicServices.jpeg';
import whatisayurveda from '../assets/whatisayurveda.PNG';
import telehealthservices from '../assets/telehealthservices.PNG';

function About() {
  const abhyangaReasons = [
    {
      title: "Calming down the nervous system",
      description: "Abhyanga calms the mind and the nervous system, eliminating emotional toxins stored as stress and tightness. It leaves you feeling peaceful, clear and light."
    },
    {
      title: "More awareness",
      description: "A balanced nervous system leads to more awareness, alertness and clarity. With Abhyanga, you feel more energized after the massage."
    },
    {
      title: "Tones and nourishes the skin",
      description: "Abhyanga percolates into body tissues, lubricating organs, muscles and joints while toning and nourishing the skin, keeping it soft even in harsh winters."
    },
    {
      title: "Boosts metabolism",
      description: "The massaging action boosts your body's metabolism, improving digestion and waste elimination. It prevents the production of Aama (toxins) in the body."
    },
    {
      title: "Perfect for detoxification",
      description: "Abhyanga is ideal for full body detoxification, calming Pitta which is vitiated during winters. It's especially beneficial during festive seasons when we tend to indulge."
    },
    {
      title: "Improves sleep quality",
      description: "For those struggling with sleep, Abhyanga is a must. Ayurveda experts recommend a 15 to 20-minute head and foot massage for better sleep quality."
    }
  ];

  return (
    <div className="about">
      <h1>About Rohini Ayurvedic Wellness Center Health Clinic</h1>
      
      <section className="card team-section">
        <h2>The Team</h2>
        <div className="team-member">
          <div className="team-member-info">
            <h3>Dr. Rohini</h3>
            <p>Our Vaidya Rohini is a seasoned Ayurveda practitioner with over 25 years of experience in the field. She holds a Bachelors in Ayurveda Medicine and Surgery (BAMS) from the prestigious TMAE college in India.</p>
            <p>After completing six rigorous training years in college, she joined her father Dr. PB PL N Annathacharyulu, BAMS, Retd. Assistant Professor – Rasa Sastra (Ayurvedic Pharmacology) at NRS Ayurvedic Medical College, Vijaywada, India. She trained under the able tutelage of her father and her first guru for several years.</p>
            <p>She has performed various surgeries and is well versed in allopathic treatment modalities too. As a result, her ayurvedic practice rests on treatments that do not interfere/interact with other treatment modalities.</p>
            <p>All her years of learning and practicing Ayurveda has made her a strong proponent and a staunch believer in the phrase – HEAL WITH NATURE. She aspires to dedicate her professional life in furthering this cause.</p>
            <p>Newly certified from...</p>
          </div>
          <div className="team-member-image">
            <img src={drRohiniImage} alt="Dr. Rohini" />
          </div>
        </div>
      </section>

      <div className="info-section">
        <div className="left-column">
          <section className="card wellness-center">
            <h2>Rohini Ayurvedic Wellness Center</h2>
            <img src={rohiniAyurvedicServices} alt="Rohini Ayurvedic Services Image" />
            <p>Rohini Ayurvedic Wellness Center (RAWC) will help you achieve a healthy and balanced life through herbal medications, ayurvedic oil therapies, detox procedures, lifestyle management and diet advice.</p>
            <p>Ayurveda aims at being both preventive and curative. Ayurvedic treatments help at developing and maintaining a healthy lifestyle by using five elements from nature to prevent/minimize acquiring various chronic medical illnesses. Ayurvedic treatments are highly individualized and consider body types like Vata, Pitta, and Kapha while developing a treatment plan.</p>
            <p>Ayurvedic pharmacology stresses heavily on using natural herbal medicines to alleviate distress from various chronic medical conditions.</p>
          </section>
        </div>

        <div className="right-column">
          <section className="card telehealth">
            <h2>Telehealth Services</h2>
            <img src={telehealthservices} alt="Telehealth Services Image" />
            <p>Sometimes there are obstacles to coming into a medical office, but help is still available. We can meet you over a HIPAA compliant connection. Same day appointments available!</p>
          </section>

          <section className="card ayurveda-intro">
            <h2>What is Ayurveda?</h2>
            <img src={whatisayurveda} alt="What is Ayurveda Image" />
            <p>"Ayurveda" is the system designed to distinctly explain the merits and demerits, state of happiness or otherwise good and bad for life and the life itself within their parameters.</p>
          </section>
        </div>
      </div>

      <section className="abhyanga-reasons">
    <h2>6 Reasons You Need Abhyanga This Winter</h2>
        <div className="reasons-grid">
          {abhyangaReasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <h3>{reason.title}</h3>
        <p>{reason.description}</p>
      </div>
        ))}
      </div>
      <img src={Aboutreasons} alt="About Reasons Image" />
    </section>
    </div>
  );
}

export default About;