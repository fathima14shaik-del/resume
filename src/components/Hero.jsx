import React from "react";
import Fathima from "../assets/fathima.png";

import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa";

const Hero = ({ onResumeClick }) => {
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

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="hero-content">

          <div className="hero-intro">
            <span className="hero-line"></span>

            <span className="hero-small-text">
              WELCOME TO MY PORTFOLIO
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm{" "}
            <span>Kanis Fathima Shaik</span>
          </h1>

          <h2 className="hero-role">
            Frontend Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-focused
            web applications with clean code, thoughtful
            design and a strong focus on performance.
          </p>

          {/* ================= HERO BUTTONS ================= */}

          <div className="hero-actions">

            <button
              type="button"
              className="hero-primary-button"
              onClick={() => scrollToSection("projects")}
            >
              <span>Explore My Work</span>
              <FaArrowRight />
            </button>

            <button
              type="button"
              className="hero-secondary-button"
              onClick={onResumeClick}
            >
              <FaDownload />
              <span>Download Resume</span>
            </button>

          </div>

          {/* ================= SOCIAL LINKS ================= */}

          <div className="hero-social">

            <span className="social-label">
              FIND ME ON
            </span>

            <div className="social-divider"></div>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero-social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero-social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:yourmail@example.com"
              aria-label="Email"
              className="hero-social-link"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* ================= RIGHT CONTENT ================= */}

        <div className="hero-visual">

          <div className="hero-image-wrapper">

            {/* Decorative Background */}

            <div className="hero-circle hero-circle-one"></div>

            <div className="hero-circle hero-circle-two"></div>

            {/* ================= PROFILE IMAGE ================= */}

            <div className="hero-image-container">

              <img
                src={Fathima}
                alt="Kanis Fathima Shaik"
                className="hero-profile-image"
              />

            </div>

            {/* ================= FLOATING CARD 1 ================= */}

            <div className="hero-floating-card card-one">

              <div className="floating-icon">
                <FaCode />
              </div>

              <div>
                <strong>Clean Code</strong>

                <span>
                  Modern Development
                </span>
              </div>

            </div>

            {/* ================= FLOATING CARD 2 ================= */}

            <div className="hero-floating-card card-two">

              <div className="floating-icon">
                <FaLaptopCode />
              </div>

              <div>
                <strong>Responsive</strong>

                <span>
                  Every Screen
                </span>
              </div>

            </div>

            {/* ================= FLOATING CARD 3 ================= */}

            <div className="hero-floating-card card-three">

              <div className="floating-icon">
                <FaLayerGroup />
              </div>

              <div>
                <strong>Projects</strong>

                <span>
                  Real World Apps
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= HERO STATS ================= */}

      <div className="hero-stats-container">

        <div className="hero-stat">
          <strong>10+</strong>

          <span>
            Projects Completed
          </span>
        </div>

        <div className="hero-stat-divider"></div>

        <div className="hero-stat">
          <strong>2+</strong>

          <span>
            Years Experience
          </span>
        </div>

        <div className="hero-stat-divider"></div>

        <div className="hero-stat">
          <strong>8+</strong>

          <span>
            Technologies
          </span>
        </div>

        <div className="hero-stat-divider"></div>

        <div className="hero-stat">
          <strong>100%</strong>

          <span>
            Commitment
          </span>
        </div>

      </div>

    </section>
  );
};

export default Hero;