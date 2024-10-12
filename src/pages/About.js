import React from 'react';
import './About.css';
import drRohiniImage from '../assets/dr-rohini.jpg';
import Aboutreasons from '../assets/Aboutreasons.jpg';
import rohiniAyurvedicServices from '../assets/rohiniAyurvedicServices.jpeg';
import whatisayurveda from '../assets/whatisayurveda.PNG';
import telehealthservices from '../assets/telehealthservices.PNG';
import drRohiniImage2 from '../assets/drrohini2.jpeg';

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
            <p>With over 25 years of dedicated experience in Ayurveda, Vaidya Rohini is a seasoned practitioner committed to holistic healing. She earned her Bachelor’s in Ayurveda Medicine and Surgery (BAMS) from the prestigious TMAE College in India, where she underwent six rigorous years of training.</p>
            <p>Following her education, Vaidya Rohini trained under the guidance of her father, Dr. PB PL N Annathacharyulu, a retired Assistant Professor of Rasa Sastra (Ayurvedic Pharmacology) at NRS Ayurvedic Medical College in Vijayawada, India.</p>
            <p>This mentorship shaped her understanding of Ayurvedic principles and practices, allowing her to integrate traditional knowledge with modern healing techniques.</p>
            <p>Vaidya Rohini is proficient in a variety of treatment modalities, having performed numerous surgeries and developed a strong foundation in allopathic treatments. This unique combination allows her to provide comprehensive care that respects the integrity of both Ayurvedic and modern medicine, ensuring that her treatments do not interfere or interact negatively with other medical approaches.</p>
            <p>A staunch believer in the philosophy of “Heal with Nature,” Vaidya Rohini is passionate about using natural remedies to promote health and well-being. She is committed to furthering this cause throughout her professional journey.</p>
            <p>Additionally, she has received certification from the National Ayurvedic Medical Association and the AAPNA (Association of Ayurveda Professionals of North America). Vaidya Rohini also completed a 200-hour Yoga Teacher Training program, which enhances her ability to provide holistic care to her clients.</p>
            <p>Explore the healing power of Ayurveda with Vaidya Rohini and experience a journey towards balance and wellness.</p>
          </div>
          <div className="team-member-image">
            <img src={drRohiniImage} alt="Dr. Rohini" />
            <img src={drRohiniImage2} alt="Dr. Rohini" />
          </div>
        </div>
      </section>
      
      {/* <section className="card team-section">
        <h2>The Team</h2>
        <div className="team-member">
          <div className="team-member-info">
            <h3>Dr. Rohini</h3>
            <p>With over 25 years of dedicated experience in Ayurveda, Vaidya Rohini is a seasoned practitioner committed to holistic healing. She earned her Bachelor’s in Ayurveda Medicine and Surgery (BAMS) from the prestigious TMAE College in India, where she underwent six rigorous years of training.</p>
            <p>Following her education, Vaidya Rohini trained under the guidance of her father, Dr. PB PL N Annathacharyulu, a retired Assistant Professor of Rasa Sastra (Ayurvedic Pharmacology) at NRS Ayurvedic Medical College in Vijayawada, India.</p>
            <p>This mentorship shaped her understanding of Ayurvedic principles and practices, allowing her to integrate traditional knowledge with modern healing techniques.</p>
            <p>Vaidya Rohini is proficient in a variety of treatment modalities, having performed numerous surgeries and developed a strong foundation in allopathic treatments. This unique combination allows her to provide comprehensive care that respects the integrity of both Ayurvedic and modern medicine, ensuring that her treatments do not interfere or interact negatively with other medical approaches.</p>
            <p>A staunch believer in the philosophy of “Heal with Nature,” Vaidya Rohini is passionate about using natural remedies to promote health and well-being. She is committed to furthering this cause throughout her professional journey.</p>
            <p>Additionally, she has received certification from the National Ayurvedic Medical Association and the AAPNA (Association of Ayurveda Professionals of North America). Vaidya Rohini also completed a 200-hour Yoga Teacher Training program, which enhances her ability to provide holistic care to her clients.</p>
            <p>Explore the healing power of Ayurveda with Vaidya Rohini and experience a journey towards balance and wellness.</p>
          </div>
          <div className="team-member-image">
            <img src={drRohiniImage} alt="Dr. Rohini" />
          </div>
          <div className="team-member-image">
            <img src={drRohiniImage2} alt="Dr. Rohini" />
          </div>
        </div>
      </section> */}

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