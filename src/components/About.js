import Footer from './Footer';
import './styles/About.css';

const About = () => {
  return (
    <div>
      <header className="header about">
        <div className="primary-info">
          <p className="primary-paragraph"><span>About Us</span></p>
        </div>
      </header>
      <section>
        <div>
           <h2>Expertise</h2>
           <p>Our team of experts has a deep understanding of the VISA application process and can guide you through every step of the way.</p>
        </div>
        <div>
           <h2>Stress-free</h2>
           <p>We understand that the VISA application process can be stressful, but we can take the burden off your shoulders and ensure that everything runs smoothly.</p>
        </div>
        <div>
           <h2></h2>
           <p></p>
        </div>
        <div>
           <h2></h2>
           <p></p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
