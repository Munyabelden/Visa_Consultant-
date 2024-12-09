import './styles/Home.css';
import Image1 from './images/home-about (2).jpg';
import Images2 from './images/home-about (1).jpg';

const Home = () => {
  return (
    <div>
      <header className="header">
          <div className="primary-info">
              <p className="primary-paragraph">Get a Visa to <br></br> <span>Any Destination</span></p>
              <button className="contact-btn btn">Enquire</button>
              <div className="visa">
                <button className="south-btn">
                  <h2>South African Visa</h2>
                </button>
                <button className="global-btn">
                  <h2>International Visa</h2>
                </button>
              </div>
          </div>
      </header>
      <section className="home-about">
        <div className="about-intro">
          <h2>We are <br></br> <span>Visionary Visa Consultanting</span></h2>
          <p>Welcome to Visionary Visa Consultanting! We’re here to help make getting your visa simple, whether you’re traveling within South Africa or heading to exciting international destinations. From quick advice to handling the entire visa process, we’re all about making sure you’re ready for your next adventure. Let us take the stress out of the paperwork so you can focus on planning the fun stuff. Ready to explore the world? We've got your back!</p>
        </div>
        <div className="home-about-imgs">
          <img src={Image1} alt="beautiful waterfall" className="water-one"/>
          <img src={Images2} alt="Beautiful bridge" className="water-two"/>
        </div>
      </section>
    </div>
  )
}

export default Home;
