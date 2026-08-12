import React from "react";

import {
  FaBriefcase,
  FaGraduationCap,
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Resume = ({ onDownload }) => {

  /* =========================================================
     WORK EXPERIENCE
  ========================================================= */

  const experience = [
    {
      period: "May 2026 - Present",

      role: "Frontend Developer",

      company: "MicroInfoWeb Private Limited",

      location: "Bengaluru, India",

      description:
        "Developing responsive and user-friendly web applications using React.js, JavaScript, HTML and CSS.",

      responsibilities: [
        "Develop responsive React.js interfaces",
        "Build reusable UI components",
        "Implement responsive layouts using CSS",
        "Integrate frontend functionality and navigation",
        "Debug and improve application performance",
      ],
    },

    {
      period: "Aug 2024 - Jun 2025",

      role: "Junior SAP Analyst",

      company: "OTM Labs",

      location: "India",

      description:
        "Worked with SAP MM processes and supported functional requirements related to procurement and inventory management.",

      responsibilities: [
        "Worked with Procure-to-Pay processes",
        "Handled Purchase Orders and Goods Receipt",
        "Worked with Material Master data",
        "Supported functional and regression testing",
        "Assisted with UAT activities",
      ],
    },
  ];


  /* =========================================================
     EDUCATION
  ========================================================= */

  const education = [
    {
      period: "2020 - 2024",

      degree: "Bachelor's Degree",

      institution: "Pace Institute of Technology and Sciences",

      location: "India",

      description:
        "Completed undergraduate studies with a focus on computer science and technology.",
    },

    {
      period: "2018 - 2020",

      degree: "Intermediate",

      institution: "Narayana Junior College",

      location: "India",

      description:
        "Completed higher secondary education.",
    },

    {
      period: "2018",

      degree: "Secondary School Education",

      institution: "Sri Sai Concept School",

      location: "India",

      description:
        "Completed secondary school education.",
    },
  ];


  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <section
      id="resume"
      className="resume-section"
    >

      <div className="section-container">


        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="section-heading">

          <span className="section-label">
            MY RESUME
          </span>

          <h2>
            Experience &
            <span> Education</span>
          </h2>

          <p>
            A snapshot of my professional journey,
            education and the experience that shaped
            my development career.
          </p>

        </div>


        {/* =====================================================
            DOWNLOAD RESUME
        ===================================================== */}

        <div className="resume-download-area">

          <div className="resume-download-content">


            {/* TEXT */}

            <div>

              <span className="resume-download-label">
                WANT TO KNOW MORE?
              </span>

              <h3>
                Download My Complete Resume
              </h3>

              <p>
                Get a detailed overview of my experience,
                skills, education and professional journey.
              </p>

            </div>


            {/* DOWNLOAD BUTTON */}

            <button
              type="button"
              className="resume-download-button"
              onClick={onDownload}
            >

              <FaDownload />

              <span>
                Download Resume
              </span>

            </button>

          </div>

        </div>


        {/* =====================================================
            EXPERIENCE HEADER
        ===================================================== */}

        <div className="resume-section-header">

          <div className="resume-section-icon">

            <FaBriefcase />

          </div>


          <div>

            <span>
              PROFESSIONAL JOURNEY
            </span>

            <h3>
              Work Experience
            </h3>

          </div>

        </div>


        {/* =====================================================
            EXPERIENCE TIMELINE
        ===================================================== */}

        <div className="resume-timeline">

          {experience.map((item, index) => (

            <div
              className="resume-timeline-item"
              key={index}
            >


              {/* TIMELINE MARKER */}

              <div className="resume-timeline-marker">

                <span></span>

              </div>


              {/* DATE */}

              <div className="resume-date">

                <FaCalendarAlt />

                <span>
                  {item.period}
                </span>

              </div>


              {/* EXPERIENCE CARD */}

              <div className="resume-card">


                {/* CARD HEADER */}

                <div className="resume-card-header">

                  <div>

                    <h4>
                      {item.role}
                    </h4>

                    <h5>
                      {item.company}
                    </h5>

                  </div>


                  {/* LOCATION */}

                  <div className="resume-location">

                    <FaMapMarkerAlt />

                    <span>
                      {item.location}
                    </span>

                  </div>

                </div>


                {/* DESCRIPTION */}

                <p className="resume-card-description">

                  {item.description}

                </p>


                {/* RESPONSIBILITIES */}

                <div className="resume-responsibilities">

                  {item.responsibilities.map(
                    (responsibility, responsibilityIndex) => (

                      <div
                        className="resume-responsibility"
                        key={responsibilityIndex}
                      >

                        <FaCheckCircle />

                        <span>
                          {responsibility}
                        </span>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================================
            EDUCATION HEADER
        ===================================================== */}

        <div
          className="resume-section-header education-header"
        >

          <div className="resume-section-icon">

            <FaGraduationCap />

          </div>


          <div>

            <span>
              ACADEMIC BACKGROUND
            </span>

            <h3>
              Education
            </h3>

          </div>

        </div>


        {/* =====================================================
            EDUCATION GRID
        ===================================================== */}

        <div className="education-grid">

          {education.map((item, index) => (

            <div
              className="education-card"
              key={index}
            >


              {/* TOP */}

              <div className="education-top">

                <div className="education-icon">

                  <FaGraduationCap />

                </div>

                <span className="education-period">

                  {item.period}

                </span>

              </div>


              {/* DEGREE */}

              <h4>
                {item.degree}
              </h4>


              {/* INSTITUTION */}

              <h5>
                {item.institution}
              </h5>


              {/* LOCATION */}

              <div className="education-location">

                <FaMapMarkerAlt />

                <span>
                  {item.location}
                </span>

              </div>


              {/* DESCRIPTION */}

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>


        {/* =====================================================
            CAREER SUMMARY
        ===================================================== */}

        <div className="career-summary">


          {/* CONTENT */}

          <div className="career-summary-content">

            <span>
              CAREER GOAL
            </span>

            <h3>
              Always Learning.
              <br />
              Always Building.
            </h3>

            <p>
              My goal is to continue growing as a frontend
              developer, work on meaningful products and
              create digital experiences that solve real
              problems for users and businesses.
            </p>

          </div>


          {/* STAT */}

          <div className="career-summary-stat">

            <strong>
              100%
            </strong>

            <span>
              Dedication to
              <br />
              Continuous Learning
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Resume;
