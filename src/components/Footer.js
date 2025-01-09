import './styles/Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="footer">
        <div className="footer-about">
          <h2>Visionary Visa Consulting</h2>
          <p>We’re here to help make getting your visa simple, whether you’re traveling within South Africa or heading to exciting international destinations. From quick advice to handling the entire visa process, we’re all about making sure you’re ready for your next adventure. Let us take the stress out of the paperwork so you can focus on planning the fun stuff. Ready to explore the world?</p>
        </div>
        <div className="footer-contacts">
          <h3>Contact Our Agents</h3>
          <div>
            <div>
              <h4>Tatenda</h4>
              <a href="mailto:tatenda@visionaryvisaconsultation.co.za?subject=Inquiry&body=Visa Consultation Enquiry">tatenda@visionaryvisaconsultation.co.za</a><br />
              <a href="https://wa.me/+27720663578" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
              <span>or call +27 72 066 3578</span>
            </div>
            <div>
              <h4>Henry</h4>
              <a href="mailto:henry@visionaryvisaconsultation.co.za?subject=Inquiry&body=Visa Consultation Enquiry">henry@visionaryvisaconsultation.co.za</a><br />
              <a href="https://wa.me/+27 64 225 6536" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
              <span>or call +27 64 225 6536</span>
            </div>
          </div>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/services')}>Services</li>
            <li onClick={() => navigate('/about')}>About</li>
            <li onClick={() => navigate('/contact')}>Contact</li>
            <li>
              <a href="mailto:info@visionaryvisaconsultation.co.za?subject=Inquiry&body=Visa Consultation Enquiry">
                info@visionaryvisaconsultation.co.za
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Visionary Visa Consultant. All rights reserved.</p>
        <p>by Nate~Mel</p>
      </div>
    </div>
  );
};

export default Footer;
