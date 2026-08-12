import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaCode,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "React",
    "Frontend",
    "Web Application",
  ];

  const projects = [
    /* =========================================================
       REACT PROJECTS
    ========================================================= */

    {
      id: 1,
      title: "Property Listing Website",
      category: "React",
      type: "React Application",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85",
      shortDescription:
        "A modern property listing platform built with React for browsing and discovering residential properties.",
      description:
        "A responsive property listing website developed using React.js. The application provides an attractive interface for exploring properties with location, property type and budget-based search functionality.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "React Icons",
      ],
      features: [
        "Property listings",
        "Property search",
        "Location filtering",
        "Budget filtering",
        "Property details",
        "Responsive design",
      ],
      github: "https://github.com/",
      live: "https://property1-nine.vercel.app/",
    },

    {
      id: 2,
      title: "Construction Website",
      category: "React",
      type: "React Application",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85",
      shortDescription:
        "A professional construction company website showcasing construction services, projects and solutions.",
      description:
        "A modern construction website developed with React.js. The website presents construction services, completed projects and company information through a professional and responsive interface.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "React Icons",
      ],
      features: [
        "Construction services",
        "Project showcase",
        "Company information",
        "Service details",
        "Responsive layout",
        "Professional UI",
      ],
      github: "https://github.com/",
      live: "https://construction-five-bice.vercel.app/",
    },

    /* =========================================================
       FRONTEND PROJECTS
    ========================================================= */

    {
      id: 3,
      title: "Job Placement Website",
      category: "Frontend",
      type: "Frontend Website",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
      shortDescription:
        "A job placement website designed to connect candidates with career opportunities through a clean interface.",
      description:
        "A responsive job placement website created using frontend technologies. The project focuses on presenting job opportunities and application-related information in a professional layout.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
      features: [
        "Job listings",
        "Job search",
        "Application interface",
        "Responsive design",
        "Professional layout",
      ],
      github: "https://github.com/",
      live: "https://fathima14shaik-del.github.io/job-placement/",
    },

    {
      id: 4,
      title: "School Website",
      category: "Frontend",
      type: "Frontend Website",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85",
      shortDescription:
        "A professional school website presenting academic information, facilities, activities and contact details.",
      description:
        "A responsive school website designed to provide students and parents with easy access to school information, academic details, activities and important sections.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
      features: [
        "School information",
        "Academic sections",
        "Facilities",
        "Activities",
        "Contact section",
        "Responsive layout",
      ],
      github: "https://github.com/",
      live: "https://rakhinagrale18.github.io/School-Website/",
    },

    {
      id: 5,
      title: "Showcase Portal",
      category: "Frontend",
      type: "Frontend Website",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=85",
      shortDescription:
        "A creative showcase portal designed to present projects, work and content through an attractive interface.",
      description:
        "A responsive showcase portal created to present projects and creative work in an organized and visually appealing manner.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
      features: [
        "Project showcase",
        "Creative presentation",
        "Responsive layout",
        "Interactive sections",
        "Clean navigation",
      ],
      github: "https://github.com/",
      live: "https://seela-chaithanya-sai.github.io/Showcase-Portal/",
    },

    {
      id: 6,
      title: "Personal Portfolio",
      category: "Frontend",
      type: "Frontend Website",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=85",
      shortDescription:
        "A personal portfolio website showcasing skills, projects, experience and professional information.",
      description:
        "A responsive personal portfolio website created to showcase frontend development skills, projects and professional information through a modern interface.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
      features: [
        "Hero section",
        "About section",
        "Skills showcase",
        "Project portfolio",
        "Resume section",
        "Contact section",
      ],
      github: "https://github.com/",
      live: "https://fathima14shaik-del.github.io/portfolio-fathima/",
    },

    /* =========================================================
       WEB APPLICATION
    ========================================================= */

    {
      id: 7,
      title: "Online Examination System",
      category: "Web Application",
      type: "Web Application",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85",
      shortDescription:
        "An online examination interface with question navigation, answer selection and result-oriented functionality.",
      description:
        "A web-based examination interface designed to provide a structured online testing experience. The project focuses on clear question presentation, navigation and user interaction.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      features: [
        "Question navigation",
        "Answer selection",
        "Exam interface",
        "Responsive layout",
        "Result-oriented workflow",
      ],
      github: "https://github.com/",
      live: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const handleLiveDemo = (url) => {
    if (!url || url === "#") {
      alert(
        "Live demo link will be added here. Replace the project URL in Projects.jsx."
      );
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGithub = (url) => {
    if (!url || url === "#") {
      alert(
        "GitHub project link will be added here. Replace the GitHub URL in Projects.jsx."
      );
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        {/* HEADER */}

        <div className="section-heading">
          <span className="section-label">
            MY WORK
          </span>

          <h2>
            Featured
            <span> Projects</span>
          </h2>

          <p>
            A selection of projects that showcase my
            frontend development skills, creativity and
            ability to turn ideas into functional
            applications.
          </p>
        </div>

        {/* FILTER */}

        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeFilter === category
                  ? "project-filter-button active"
                  : "project-filter-button"
              }
              onClick={() =>
                setActiveFilter(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-image-overlay">

                  <button
                    className="project-view-button"
                    onClick={() =>
                      project.live !== "#"
                        ? handleLiveDemo(project.live)
                        : openProject(project)
                    }
                  >
                    {project.live !== "#"
                      ? "Visit Website"
                      : "View Project"}

                    <FaArrowRight />
                  </button>

                </div>

                <span className="project-type">
                  {project.type}
                </span>

              </div>

              <div className="project-content">

                <div className="project-category-row">

                  <span>
                    {project.category}
                  </span>

                  {project.category === "React" ? (
                    <FaReact />
                  ) : (
                    <FaCode />
                  )}

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.shortDescription}
                </p>

                <div className="project-card-footer">

                  <button
                    className="project-details-button"
                    onClick={() =>
                      openProject(project)
                    }
                  >
                    Details
                    <FaExternalLinkAlt />
                  </button>

                  <button
                    className="project-github-button"
                    onClick={() =>
                      handleGithub(project.github)
                    }
                    aria-label="Open GitHub project"
                  >
                    <FaGithub />
                  </button>

                </div>

              </div>

            </article>
          ))}
        </div>

        {/* BOTTOM */}

        <div className="projects-bottom">

          <div>
            <strong>
              Want to see more?
            </strong>

            <span>
              Explore the complete project collection
              on GitHub.
            </span>
          </div>

          <button
            className="projects-github-button"
            onClick={() =>
              window.open(
                "https://github.com/fathima14shaik-del",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <FaGithub />
            Visit GitHub
          </button>

        </div>

      </div>

      {/* MODAL */}

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={closeProject}
        >

          <div
            className="project-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="project-modal-close"
              onClick={closeProject}
              aria-label="Close project details"
            >
              <FaTimes />
            </button>

            <div className="project-modal-image">

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />

            </div>

            <div className="project-modal-content">

              <span className="project-modal-category">
                {selectedProject.category}
              </span>

              <h3>
                {selectedProject.title}
              </h3>

              <p className="project-modal-description">
                {selectedProject.description}
              </p>

              {/* TECHNOLOGIES */}

              <div className="project-modal-section">

                <h4>
                  Technologies Used
                </h4>

                <div className="project-technologies">

                  {selectedProject.technologies.map(
                    (technology, index) => (
                      <span key={index}>
                        <FaCode />
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* FEATURES */}

              <div className="project-modal-section">

                <h4>
                  Key Features
                </h4>

                <div className="project-features">

                  {selectedProject.features.map(
                    (feature, index) => (
                      <div key={index}>

                        <FaCheckCircle />

                        <span>
                          {feature}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </div>

              {/* ACTIONS */}

              <div className="project-modal-actions">

                <button
                  className="project-live-button"
                  onClick={() =>
                    handleLiveDemo(
                      selectedProject.live
                    )
                  }
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </button>

                <button
                  className="project-code-button"
                  onClick={() =>
                    handleGithub(
                      selectedProject.github
                    )
                  }
                >
                  <FaGithub />
                  View Code
                </button>

                <button
                  className="project-close-button"
                  onClick={closeProject}
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default Projects;