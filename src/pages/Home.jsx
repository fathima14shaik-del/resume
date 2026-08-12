import React, { useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

const Home = () => {
  const [popup, setPopup] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
  });

  /* =========================================================
     POPUP
  ========================================================= */

  const showPopup = ({
    title,
    message,
    type = "success",
  }) => {
    setPopup({
      isOpen: true,
      title,
      message,
      type,
    });
  };

  const closePopup = () => {
    setPopup((previous) => ({
      ...previous,
      isOpen: false,
    }));
  };

  /* =========================================================
     RESUME DOWNLOAD
  ========================================================= */

  const handleResumeDownload = () => {
    const resumeUrl = "/Fathima__Resumee.pdf";

    const link = document.createElement("a");

    link.href = resumeUrl;
    link.download = "Fathima__Resumee.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    showPopup({
      title: "Resume Download",
      message: "Your resume download has been started successfully.",
      type: "success",
    });
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        onResumeClick={handleResumeDownload}
      />


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <About />


      {/* =====================================================
          RESUME
      ===================================================== */}

      <Resume
        onDownload={handleResumeDownload}
      />


      {/* =====================================================
          SKILLS
      ===================================================== */}

      <Skills />


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <Projects />


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <Contact
        onSuccess={(data) =>
          showPopup({
            title: data.title,
            message: data.message,
            type: "success",
          })
        }
      />


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />


      {/* =====================================================
          GLOBAL POPUP
      ===================================================== */}

      <Popup
        isOpen={popup.isOpen}
        onClose={closePopup}
        title={popup.title}
        message={popup.message}
        type={popup.type}
      />
    </>
  );
};

export default Home;