import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
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
  const [state, handleSubmit] = useForm("xannyddb");

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

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      handleSubmit(e);
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h2>Contact Us</h2>

        {isSubmitted && state.succeeded && <p className="success">Form submitted successfully!</p>}

        <table className="form-table">
          <tbody>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? "invalid" : ""}
                />
                <ValidationError field="name" prefix="Name" errors={state.errors} />
                {formErrors.name && <p className="error">{formErrors.name}</p>}
              </td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "invalid" : ""}
                />
                <ValidationError field="email" prefix="Email" errors={state.errors} />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
              </td>
            </tr>
            <tr>
              <td><label htmlFor="phone">Phone</label></td>
              <td>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={formErrors.phone ? "invalid" : ""}
                />
                {formErrors.phone && <p className="error">{formErrors.phone}</p>}
              </td>
            </tr>
            <tr>
              <td><label htmlFor="message">Message</label></td>
              <td>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? "invalid" : ""}
                />
                <ValidationError field="message" prefix="Message" errors={state.errors} />
                {formErrors.message && <p className="error">{formErrors.message}</p>}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="submit-row">
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ContactForm;
