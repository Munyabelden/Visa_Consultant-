import Footer from './Footer';
import './styles/Home.css';
import Image1 from './images/home-about (2).jpg';
import Images2 from './images/home-about (1).jpg';
import Icon from './images/document_7025969.png';
import Perm_Visa from './images/rb_90416.png';
import Temp_Visa from './images/south-bg.jpg';

const Home = () => {
  return (
    <div>
      <header className="header">
          <div className="primary-info">
              <p className="primary-paragraph">Get a Visa to <br></br> <span>Any Destination</span></p>
              <button className="contact-btn btn">Enquire</button>
              {/* <div className="visa">
                <button className="south-btn">
                  <h2>South African Visa</h2>
                </button>
                <button className="global-btn">
                  <h2>International Visa</h2>
                </button>
              </div> */}
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
      <section className="visa-classes">
        <h2>South African Visa Categories</h2>
        <p>At Visionary Visa Consultant, we take the complexity out of your immigration process, whether it's for personal or corporate purposes. Our experienced team handles all the intricate paperwork, ensuring your application is accurate and stress-free. From the initial consultation to the moment your permit is approved, we are with you every step of the way. You can focus on planning your exciting new life in South Africa, while we navigate the legal and administrative aspects for you. Trust us to make your immigration journey smooth and hassle-free.</p>
        <div className="perm-visa">
          <div>
            <img src={Icon} alt="Document icon"/>
            <p>Permanent Residence Permits</p>
            <button>Permanent Residence Categories Here</button>
          </div>
          <img src={Perm_Visa} alt="Passport"/>
        </div>
        <div className="temp-visa">
          <div>
            <img src={Icon} alt="Document icon"/>
            <p>Temporary Residence Visa</p>
            <button>Temporary Residence Categories Here</button>
          </div>
          <img src={Temp_Visa} alt="SA Flag"/>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home;
