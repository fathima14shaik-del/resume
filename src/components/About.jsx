import React from "react";
import {
  FaUserTie,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  const highlights = [
    "Responsive Web Development",
    "Clean & Maintainable Code",
    "Modern UI Development",
    "Cross-Browser Compatibility",
    "User-Focused Design",
    "Problem Solving",
  ];

  return (
    <section id="about" className="about-section">

      {/* ================= SECTION HEADER ================= */}

      <div className="section-container">

        <div className="section-heading">

          <span className="section-label">
            ABOUT ME
          </span>

          <h2>
            Building Digital Experiences
            <span> That Make an Impact</span>
          </h2>

          <p>
            A passionate frontend developer focused on
            creating modern, responsive and meaningful
            digital experiences.
          </p>

        </div>

        {/* ================= ABOUT CONTENT ================= */}

        <div className="about-content">

          {/* LEFT SIDE */}

          <div className="about-image-area">

            <div className="about-image-frame">

              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
                alt="Developer working"
              />

              <div className="about-experience-card">

                <strong>2+</strong>

                <span>
                  Years of
                  <br />
                  Experience
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="about-text">

            <div className="about-introduction">

              <div className="about-icon">
                <FaUserTie />
              </div>

              <div>

                <h3>
                  Passionate Frontend Developer
                </h3>

                <p>
                  I enjoy transforming ideas and
                  requirements into intuitive,
                  functional and visually appealing
                  web experiences.
                </p>

              </div>

            </div>

            <p className="about-description">
              I specialize in frontend development and
              enjoy working with modern technologies to
              create websites and applications that are
              responsive, accessible and easy to use.
              I believe a great website should not only
              look good but should also provide a smooth
              experience for every user.
            </p>

            <p className="about-description">
              I continuously improve my technical skills,
              explore new technologies and focus on writing
              clean, reusable and maintainable code.
            </p>

            {/* ================= HIGHLIGHTS ================= */}

            <div className="about-highlights">

              {highlights.map((item, index) => (

                <div
                  className="about-highlight"
                  key={index}
                >
                  <FaCheckCircle />

                  <span>{item}</span>
                </div>

              ))}

            </div>

            {/* ================= ABOUT BUTTONS ================= */}

            <div className="about-actions">

              <button
                className="about-primary-button"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                View My Projects
              </button>

              <button
                className="about-secondary-button"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                Let's Connect
              </button>

            </div>

          </div>

        </div>

        {/* ================= ABOUT FEATURE CARDS ================= */}

        <div className="about-features">

          <div className="about-feature-card">

            <div className="about-feature-icon">
              <FaCode />
            </div>

            <h3>
              Clean Development
            </h3>

            <p>
              Writing structured, reusable and
              maintainable code following modern
              development practices.
            </p>

          </div>

          <div className="about-feature-card">

            <div className="about-feature-icon">
              <FaLightbulb />
            </div>

            <h3>
              Creative Thinking
            </h3>

            <p>
              Turning complex requirements into
              simple and engaging user experiences.
            </p>

          </div>

          <div className="about-feature-card">

            <div className="about-feature-icon">
              <FaRocket />
            </div>

            <h3>
              Continuous Growth
            </h3>

            <p>
              Always learning new technologies and
              improving development skills.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;