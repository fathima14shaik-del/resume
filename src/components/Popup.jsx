import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaTimes,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";

const Popup = ({
  isOpen,
  onClose,
  title = "Success",
  message = "Your request has been completed successfully.",
  type = "success",
}) => {
  // Close popup when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const getIcon = () => {
    if (type === "error") {
      return <FaExclamationCircle />;
    }

    if (type === "info") {
      return <FaInfoCircle />;
    }

    return <FaCheckCircle />;
  };

  return (
    <div
      className="popup-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`popup-container popup-${type}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {/* ================= CLOSE BUTTON ================= */}

        <button
          className="popup-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          <FaTimes />
        </button>

        {/* ================= ICON ================= */}

        <div className="popup-icon">
          {getIcon()}
        </div>

        {/* ================= CONTENT ================= */}

        <div className="popup-content">

          <h3 id="popup-title">
            {title}
          </h3>

          <p>
            {message}
          </p>

        </div>

        {/* ================= ACTION ================= */}

        <button
          className="popup-button"
          onClick={onClose}
        >
          Continue
        </button>

      </div>
    </div>
  );
};

export default Popup;