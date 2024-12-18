import Footer from './Footer';
import ContactForm from './Form';

const Contact = () => {
  return (
    <div>
        <ContactForm />
        <div className="contact-section">
          <h3>Contact Our Agents</h3>
          <div className="agent-list">
            <div className="agent-card">
              <h4>Tatenda</h4>
              <a href="mailto:tatenda862@gmail.com?subject=Inquiry&body=Visa Consultation Enquiry">
                tatenda862@gmail.com
              </a><br />
              <a href="https://wa.me/+27720663578" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <span>or call +27 72 066 3578</span>
            </div>
            <div className="agent-card">
              <h4>Henry</h4>
              <a href="mailto:your-email@example.com?subject=Inquiry&body=Visa Consultation Enquiry">
                tatenda862@gmail.com
              </a><br />
              <a href="https://wa.me/+27 64 225 6536" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <span>or call +27 64 225 6536</span>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact;
