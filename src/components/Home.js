import Footer from './Footer';
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
          <button className="contact-btn btn">Enquire</button>
        </div>
        <div className="home-about-imgs">
          <img src={Image1} alt="beautiful waterfall" className="water-one"/>
          <img src={Images2} alt="Beautiful bridge" className="water-two"/>
        </div>
      </section>
      <section className="home-countries">
        <h2>Popular Countries</h2>
        <div className="countries">
          <div className="country uk">
            <div>
              <span>United Kingdom</span>
              <button className="country-btn">more info</button>
            </div>
          </div>
          <div className="country usa">
            <div>
              <span>USA</span>
              <button className="country-btn">more info</button>
            </div>
          </div>
          <div className="country can">
            <div>
              <span>Canada</span>
              <button className="country-btn">more info</button>
            </div>
          </div>
          <div className="country aust">
            <div>
              <span>Australia</span>
              <button className="country-btn">more info</button>
            </div>
          </div>
          <div className="country nz">
            <div>
              <span>New Zealand</span>
              <button className="country-btn">more info</button>
            </div>
          </div>
          <div className="country fran">
            <div>
              <span>France</span>
              <button className="country-btn">more info</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>South African Visa</h2>
        <div>
          <div>
            
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home;
