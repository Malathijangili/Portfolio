import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);

      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      setTimeout(() => {
        window.location.href = `mailto:malavikapateljangili@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      }, 1200);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Feel free to reach out for learning opportunities, project discussions, or academic collaborations.
          </p>
          <div className="section-underline"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card card">
            <h3>Contact Information</h3>
            <p className="contact-info-desc">
              I am open to internships, mentorships, project collaborations, and full-stack/AI learning opportunities.
            </p>

            <div className="contact-methods">
              <a href="mailto:malavikapateljangili@gmail.com" className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">malavikapateljangili@gmail.com</span>
                </div>
              </a>

              <a
                href="https://github.com/Malathijangili"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon-box">
                  <GithubIcon size={20} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/Malathijangili</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jangili-malathi-3a0299397/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon-box">
                  <LinkedinIcon size={20} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/jangili-malathi-3a0299397</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card card">
            <h3>Send a Message</h3>
            
            {submitted ? (
              <div className="form-success-message">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Thanks for reaching out!</h4>
                <p>
                  Your message draft has been prepared. Opening your email app to complete sending...
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={14} /> {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
