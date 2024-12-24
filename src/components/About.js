import Footer from './Footer';
import './styles/About.css';
import Image1 from './images/1082.jpg';
import Image2 from './images/2333.jpg';

const About = () => {
  return (
    <div>
      <header className="header about">
        <div className="primary-info">
          <p className="primary-paragraph"><span>About Us</span></p>
        </div>
      </header>
      <section className="values">
        <div>
           <h2>Expertise</h2>
           <p>Our team of experts has a deep understanding of the VISA application process and can guide you through every step of the way.</p>
        </div>
        <div>
           <h2>Stress-free</h2>
           <p>We understand that the VISA application process can be stressful, but we can take the burden off your shoulders and ensure that everything runs smoothly.</p>
        </div>
        <div>
           <h2>Customised solutions</h2>
           <p>We offer customised solutions based on your specific needs and circumstances, ensuring that you get the right type of VISA for your situation.</p>
        </div>
        <div>
           <h2>Time-saving</h2>
           <p>Applying for a VISA can be a lengthy and complicated process, but we can help you save time and effort by handling the paperwork and logistics for you.</p>
        </div>
      </section>
      <section className="home-about about-p">
        <div className="about-intro">
          <h2>About Us<br></br> <span>Who We Are</span></h2>
          <p>Welcome to Visionary Visa Consultanting! We’re here to help make getting your visa simple, whether you’re traveling within South Africa or heading to exciting international destinations. From quick advice to handling the entire visa process, we’re all about making sure you’re ready for your next adventure. Let us take the stress out of the paperwork so you can focus on planning the fun stuff. Ready to explore the world? We've got your back!</p>
          <button className="contact-btn btn">Enquire</button>
        </div>
        <div className="home-about-imgs abt">
          <img src={Image1} alt="Beautiful bridge" className="water-one"/>
          <img src={Image2} alt="Beautiful girl" className="water-two"/>
        </div>
      </section>
    </div>
  )
}

export default About
