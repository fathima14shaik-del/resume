import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaBootstrap,
  FaCode,
  FaMobileAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "all",
      label: "All Skills",
    },
    {
      id: "frontend",
      label: "Frontend",
    },
    {
      id: "programming",
      label: "Programming",
    },
    {
      id: "tools",
      label: "Tools",
    },
  ];

  const skills = [
    {
      name: "React.js",
      category: "frontend",
      icon: <FaReact />,
      level: "Intermediate",
      percentage: 85,
      description:
        "Building reusable components, interactive interfaces and single-page applications.",
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: <FaHtml5 />,
      level: "Advanced",
      percentage: 95,
      description:
        "Creating semantic and accessible web page structures.",
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: <FaCss3Alt />,
      level: "Advanced",
      percentage: 92,
      description:
        "Responsive layouts, animations, Flexbox, Grid and modern styling.",
    },
    {
      name: "JavaScript",
      category: "frontend",
      icon: <FaJs />,
      level: "Intermediate",
      percentage: 52,
      description:
        "Developing interactive functionality and dynamic web experiences.",
    },
    {
      name: "Bootstrap",
      category: "frontend",
      icon: <FaBootstrap />,
      level: "Intermediate",
      percentage: 82,
      description:
        "Creating responsive interfaces using Bootstrap components and utilities.",
    },
    {
      name: "Java",
      category: "programming",
      icon: <FaJava />,
      level: "Intermediate",
      percentage: 70,
      description:
        "Understanding Java fundamentals, object-oriented programming and application concepts.",
    },
    {
      name: "SQL",
      category: "programming",
      icon: <FaDatabase />,
      level: "Intermediate",
      percentage: 30,
      description:
        "Working with relational databases, queries and data management.",
    },
    {
      name: "Git",
      category: "tools",
      icon: <FaGitAlt />,
      level: "Intermediate",
      percentage: 80,
      description:
        "Version control, branching, commits and collaborative development.",
    },
    {
      name: "GitHub",
      category: "tools",
      icon: <FaGithub />,
      level: "Intermediate",
      percentage: 80,
      description:
        "Managing repositories, source code and project deployments.",
    },
    {
      name: "Responsive Design",
      category: "frontend",
      icon: <FaMobileAlt />,
      level: "Advanced",
      percentage: 94,
      description:
        "Designing applications that work smoothly across mobile, tablet and desktop.",
    },
    {
      name: "Web Development",
      category: "frontend",
      icon: <FaCode />,
      level: "Advanced",
      percentage: 90,
      description:
        "Developing complete frontend experiences using modern web technologies.",
    },
    {
      name: "Development Tools",
      category: "tools",
      icon: <FaTools />,
      level: "Intermediate",
      percentage: 80,
      description:
        "Working with VS Code, npm, browser developer tools and deployment platforms.",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        );

  return (
    <section id="skills" className="skills-section">

      <div className="section-container">

        {/* ================= SECTION HEADER ================= */}

        <div className="section-heading">

          <span className="section-label">
            MY SKILLS
          </span>

          <h2>
            Technical
            <span> Expertise</span>
          </h2>

          <p>
            The technologies, tools and development skills
            I use to transform ideas into functional digital
            experiences.
          </p>

        </div>

        {/* ================= SKILL SUMMARY ================= */}

        <div className="skills-summary">

          <div className="skills-summary-card">

            <div className="skills-summary-icon">
              <FaCode />
            </div>

            <div>

              <strong>
                Frontend
              </strong>

              <span>
                Modern Web Development
              </span>

            </div>

          </div>

          <div className="skills-summary-card">

            <div className="skills-summary-icon">
              <FaMobileAlt />
            </div>

            <div>

              <strong>
                Responsive
              </strong>

              <span>
                Mobile & Desktop
              </span>

            </div>

          </div>

          <div className="skills-summary-card">

            <div className="skills-summary-icon">
              <FaTools />
            </div>

            <div>

              <strong>
                Development
              </strong>

              <span>
                Tools & Workflow
              </span>

            </div>

          </div>

        </div>

        {/* ================= FILTER ================= */}

        <div className="skills-filter">

          {skillCategories.map((category) => (

            <button
              key={category.id}
              className={
                activeCategory === category.id
                  ? "skill-filter-button active"
                  : "skill-filter-button"
              }
              onClick={() =>
                setActiveCategory(category.id)
              }
            >
              {category.label}
            </button>

          ))}

        </div>

        {/* ================= SKILLS GRID ================= */}

        <div className="skills-grid">

          {filteredSkills.map((skill, index) => (

            <div
              className="skill-card"
              key={`${skill.name}-${index}`}
            >

              <div className="skill-card-top">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-title">

                  <h3>
                    {skill.name}
                  </h3>

                  <span>
                    {skill.level}
                  </span>

                </div>

              </div>

              <p className="skill-description">
                {skill.description}
              </p>

              {/* Progress */}

              <div className="skill-progress-info">

                <span>
                  Proficiency
                </span>

                <strong>
                  {skill.percentage}%
                </strong>

              </div>

              <div className="skill-progress">

                <div
                  className="skill-progress-bar"
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                ></div>

              </div>

              <div className="skill-check">

                <FaCheckCircle />

                <span>
                  Currently Practicing
                </span>

              </div>

            </div>

          ))}

        </div>

        {/* ================= SOFT SKILLS ================= */}

        <div className="soft-skills">

          <div className="soft-skills-header">

            <span className="section-label">
              BEYOND TECHNICAL SKILLS
            </span>

            <h3>
              Professional Strengths
            </h3>

          </div>

          <div className="soft-skills-list">

            <div className="soft-skill">
              <FaCheckCircle />
              <span>Problem Solving</span>
            </div>

            <div className="soft-skill">
              <FaCheckCircle />
              <span>Team Collaboration</span>
            </div>

            <div className="soft-skill">
              <FaCheckCircle />
              <span>Adaptability</span>
            </div>

            <div className="soft-skill">
              <FaCheckCircle />
              <span>Continuous Learning</span>
            </div>

            <div className="soft-skill">
              <FaCheckCircle />
              <span>Communication</span>
            </div>

            <div className="soft-skill">
              <FaCheckCircle />
              <span>Attention to Detail</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;