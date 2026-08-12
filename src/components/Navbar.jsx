import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = ({ onResumeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect page scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navigationItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Resume",
      id: "resume",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu after clicking
    setMenuOpen(false);
  };

  const handleResume = () => {
    setMenuOpen(false);

    if (onResumeClick) {
      onResumeClick();
    }
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-container">

          {/* ================= LOGO ================= */}

          <button
            className="navbar-logo"
            onClick={() => handleNavigation("home")}
            aria-label="Go to home"
          >
            
            <img
              src="https://www.seekpng.com/png/detail/111-1112824_picture-my-portfolio-logo-png.png"
              alt="Portfolio Logo"
            />
          </button>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav
            className={`navbar-menu ${
              menuOpen ? "navbar-menu-open" : ""
            }`}
            aria-label="Main navigation"
          >

            <div className="navbar-links">

              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className="navbar-link"
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                >
                  {item.name}
                </button>
              ))}

            </div>

            

          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            className="navbar-toggle"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}

      {menuOpen && (
        <button
          className="navbar-overlay"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;