import React from "react";
import {
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      window.scrollTo({
        top:
          section.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:yourmail@example.com";
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= TOP FOOTER ================= */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <button
              className="footer-logo"
              onClick={() => scrollToSection("home")}
            >
              {/* logo URL */}
              <img
                src="https://www.seekpng.com/png/detail/111-1112824_picture-my-portfolio-logo-png.png"
                alt="Portfolio Logo"
              />
            </button>

            <p>
              Frontend Developer passionate about
              creating modern, responsive and
              user-friendly digital experiences.
            </p>

            <div className="footer-socials">

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

              <button
                onClick={handleEmail}
                aria-label="Email"
              >
                <FaEnvelope />
              </button>

            </div>

          </div>

          {/* QUICK LINKS */}

          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <button
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("resume")}
            >
              Resume
            </button>

            <button
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>

          </div>

          {/* SERVICES */}

          <div className="footer-column">

            <h3>
              What I Do
            </h3>

            <button
              onClick={() => scrollToSection("skills")}
            >
              Frontend Development
            </button>

            <button
              onClick={() => scrollToSection("skills")}
            >
              Responsive Design
            </button>

            <button
              onClick={() => scrollToSection("projects")}
            >
              Web Applications
            </button>

            <button
              onClick={() => scrollToSection("projects")}
            >
              UI Development
            </button>

          </div>

          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h3>
              Let's Connect
            </h3>

            <p>
              Have an idea or opportunity?
              Let's talk.
            </p>

            <button
              className="footer-contact-button"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>

          </div>

        </div>

        {/* ================= FOOTER BOTTOM ================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Your Name.
            All rights reserved.
          </p>

          <p className="footer-made-with">

            Made with

            <FaHeart />

            using React.js

          </p>

          <button
            className="back-to-top"
            onClick={goToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;