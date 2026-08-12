import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaClock,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

const Contact = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject =
        "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message should contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    /*
      Simulating a successful submission.

      Later, this can be connected to:
      - EmailJS
      - Formspree
      - Your backend API
    */

    setTimeout(() => {
      setIsSubmitting(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});

      if (onSuccess) {
        onSuccess({
          title: "Message Sent Successfully!",
          message:
            "Thank you for reaching out. Your message has been received. I'll get back to you as soon as possible.",
        });
      }
    }, 1000);
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:yourmail@example.com";
  };

  const handlePhone = () => {
    window.location.href =
      "tel:+910000000000";
  };

  const handleLocation = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Bengaluru+India",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="contact-section">

      <div className="section-container">

        {/* ================= HEADER ================= */}

        <div className="section-heading">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Start a
            <span> Conversation</span>
          </h2>

          <p>
            Have a project, opportunity or simply want
            to say hello? I'd love to hear from you.
          </p>

        </div>

        {/* ================= CONTACT CONTENT ================= */}

        <div className="contact-container">

          {/* ================= LEFT SIDE ================= */}

          <div className="contact-information">

            <div className="contact-info-heading">

              <span>
                CONTACT DETAILS
              </span>

              <h3>
                I'm always open to
                <br />
                new opportunities.
              </h3>

              <p>
                Whether you have a question, a project
                idea or an opportunity, feel free to
                reach out through any of the channels
                below.
              </p>

            </div>

            {/* EMAIL */}

            <button
              className="contact-info-card"
              onClick={handleEmail}
            >

              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info-content">

                <span>
                  EMAIL
                </span>

                <strong>
                  fathima14shaik@gmail.com
                </strong>

              </div>

            </button>

            {/* PHONE */}

            <button
              className="contact-info-card"
              onClick={handlePhone}
            >

              <div className="contact-info-icon">
                <FaPhone />
              </div>

              <div className="contact-info-content">

                <span>
                  PHONE
                </span>

                <strong>
                  +91 8688550848
                </strong>

              </div>

            </button>

            {/* LOCATION */}

            <button
              className="contact-info-card"
              onClick={handleLocation}
            >

              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-info-content">

                <span>
                  LOCATION
                </span>

                <strong>
                  Bengaluru, India
                </strong>

              </div>

            </button>

            {/* AVAILABILITY */}

            <div className="contact-availability">

              <div className="availability-icon">
                <FaClock />
              </div>

              <div>

                <strong>
                  Available for opportunities
                </strong>

                <span>
                  Open to frontend development
                  opportunities and collaborations.
                </span>

              </div>

            </div>

            {/* SOCIAL LINKS */}

            <div className="contact-social">

              <span>
                CONNECT WITH ME
              </span>

              <div className="contact-social-links">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:yourmail@example.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE FORM ================= */}

          <div className="contact-form-wrapper">

            <div className="contact-form-header">

              <span>
                SEND A MESSAGE
              </span>

              <h3>
                Tell me about your project
              </h3>

              <p>
                Fill out the form below and I'll get
                back to you shortly.
              </p>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* NAME + EMAIL */}

              <div className="contact-form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={
                      errors.name
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.name && (
                    <small className="form-error">
                      {errors.name}
                    </small>
                  )}

                </div>

                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={
                      errors.email
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.email && (
                    <small className="form-error">
                      {errors.email}
                    </small>
                  )}

                </div>

              </div>

              {/* SUBJECT */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={
                    errors.subject
                      ? "input-error"
                      : ""
                  }
                />

                {errors.subject && (
                  <small className="form-error">
                    {errors.subject}
                  </small>
                )}

              </div>

              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea or opportunity..."
                  className={
                    errors.message
                      ? "input-error"
                      : ""
                  }
                ></textarea>

                {errors.message && (
                  <small className="form-error">
                    {errors.message}
                  </small>
                )}

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-button"
                disabled={isSubmitting}
              >

                {isSubmitting ? (
                  <>
                    <span className="button-spinner"></span>

                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />

                    Send Message
                  </>
                )}

              </button>

              <p className="form-note">
                <FaCheckCircle />
                Your information is kept private and
                will only be used to respond to your
                inquiry.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;