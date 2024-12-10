import React, { useState } from "react";
import "./styles/Form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      errors.phone = "Valid phone number is required (10 digits)";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        {isSubmitted && <p className="success">Form submitted successfully!</p>}

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={formErrors.name ? "invalid" : ""}
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? "invalid" : ""}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={formErrors.phone ? "invalid" : ""}
          />
          {formErrors.phone && <p className="error">{formErrors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={formErrors.message ? "invalid" : ""}
          />
          {formErrors.message && <p className="error">{formErrors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
