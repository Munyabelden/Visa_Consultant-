import './styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-about">
        <h2>Visionary Visa Cosnulting</h2>
        <p>We’re here to help make getting your visa simple, whether you’re traveling within South Africa or heading to exciting international destinations. From quick advice to handling the entire visa process, we’re all about making sure you’re ready for your next adventure. Let us take the stress out of the paperwork so you can focus on planning the fun stuff. Ready to explore the world?</p>
      </div>
      <div className="footer-contacts">
        <h3>Contact Our Agents</h3>
        <div>
          <div>
            <h4>Tatenda</h4>
            <a href="mailto:your-email@example.com?subject=Inquiry&body=Visa Consultation Enquiry">tatenda862@gmail.com</a>
            <a href="https://wa.me/+27720663578"><i className="fa-brands fa-whatsapp"></i></a>
            <span>or call +27 72 066 3578</span>
          </div>
          <div>
            <h4>Henry</h4>
            <a href="mailto:your-email@example.com?subject=Inquiry&body=Visa Consultation Enquiry">tatenda862@gmail.com</a>
            <a href="https://wa.me/+27 64 225 6536"><i className="fa-brands fa-whatsapp"></i></a>
            <span>or call +27 64 225 6536</span>
          </div>
        </div>
      </div>
      <div className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
      <p>&copy; 2024 Visionary Visa Consulting. All rights reserved.</p>
      <p>by Nate~Mel</p>
      </div>
    </div>
  )
}

export default Footer;
