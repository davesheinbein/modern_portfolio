import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./styles/Header.css";
import jobpositionsData from "../utils/jobpositions.json";

function Header(props) {
  // --- Animated Mobile Hamburger Button ---
  // Add state for hamburger open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [typedTagline, setTypedTagline] = useState("");
  const [typing, setTyping] = useState("subtitle");
  const { redLogoImg, blueLogoImg } = props;

  const redLogoUrl = redLogoImg.url;
  const blueLogoUrl = blueLogoImg.url;
  const redLogoName = redLogoImg.name;
  const blueLogoName = blueLogoImg.name;

  const jobpositions = jobpositionsData;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggle = () => {
    props.handleThemeChange(props.color === "dark" ? "default" : "dark");
  };

  // Typing animation for subtitle and tagline
  useEffect(() => {
    setFade(true);
    setTyping("subtitle");
    setTypedSubtitle("");
    setTypedTagline("");
    const subtitle = jobpositions[jobIndex].job_title;
    const tagline = jobpositions[jobIndex].job_description;
    let subIdx = 0;
    let tagIdx = 0;

    function typeSubtitle() {
      if (subIdx <= subtitle.length) {
        setTypedSubtitle(subtitle.slice(0, subIdx));
        subIdx++;
        setTimeout(typeSubtitle, 40);
      } else {
        setTyping("tagline");
        typeTagline();
      }
    }

    function typeTagline() {
      if (tagIdx <= tagline.length) {
        setTypedTagline(tagline.slice(0, tagIdx));
        tagIdx++;
        setTimeout(typeTagline, 30);
      } else {
        setTyping(false);
        // Wait before fading out and cycling
        setTimeout(() => {
          setFade(false);
          setTimeout(() => {
            setJobIndex((prev) => (prev + 1) % jobpositions.length);
          }, 400);
        }, 3000);
      }
    }

    typeSubtitle();

    return () => {
      setTypedSubtitle("");
      setTypedTagline("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobIndex, jobpositions.length]);

  // Utility to split text into spans for ripple effect
  function RippleText({ text }) {
    return (
      <>
        {text.split("").map((char, i) => (
          <span
            className="ripple-letter"
            key={i}
            style={{ "--ripple-delay": `${i * 60}ms` }}
          >
            {char}
          </span>
        ))}
      </>
    );
  }

  // --- Desktop Navigation Enhancement ---
  // Only show main sections on desktop, but include all on mobile
  const desktopSections = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  // --- Mobile Modal Navigation Enhancement ---
  const mobileSections = [
    ...desktopSections,
    { label: "Certifications", href: "#certifications" },
    { label: "Endorsements", href: "#endorsements" },
    { label: "Info", href: "#info" },
  ];
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 1024;

  return (
    <header className="wp-block-template-part header header-section">
      <Navbar
        expand="lg"
        variant="dark"
        className="header-section"
        expanded={isMenuOpen}
      >
        <Container>
          <Navbar.Brand href="https://www.davidsheinbeinengineer.com/">
            {props.color === "dark" ? (
              <div className="logo">
                <img
                  width="250"
                  height="140"
                  src={redLogoUrl}
                  className="custom-logo logo-sizing"
                  alt={redLogoName}
                  decoding="async"
                  srcSet={redLogoUrl}
                />
                <div className="logo-text" style={{ marginLeft: "16px" }}>
                  <div className="logo-text-title">David Sheinbein</div>
                  <div
                    className={`logo-text-subtitle${fade ? " fade-in" : " fade-out"}`}
                  >
                    {typedSubtitle}
                    <span className="typing-cursor">
                      {typing === "subtitle" ? "\u2588" : ""}
                    </span>
                  </div>
                  <div
                    className={`logo-text-tagline${fade ? " fade-in" : " fade-out"}`}
                  >
                    {typedTagline}
                    <span className="typing-cursor">
                      {typing === "tagline" ? "\u2588" : ""}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="logo">
                <img
                  width="250"
                  height="140"
                  src={blueLogoUrl}
                  className="custom-logo logo-sizing"
                  alt={blueLogoName}
                  decoding="async"
                  srcSet={blueLogoUrl}
                />
                <div className="logo-text" style={{ marginLeft: "16px" }}>
                  <div className="logo-text-title">David Sheinbein</div>
                  <div
                    className={`logo-text-subtitle${fade ? " fade-in" : " fade-out"}`}
                    style={{ minHeight: 28 }}
                  >
                    {typedSubtitle}
                    <span className="typing-cursor">
                      {typing === "subtitle" ? "\u2588" : ""}
                    </span>
                  </div>
                  <div
                    className={`logo-text-tagline${fade ? " fade-in" : " fade-out"}`}
                  >
                    {typedTagline}
                    <span className="typing-cursor">
                      {typing === "tagline" ? "\u2588" : ""}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </Navbar.Brand>

          {/* Custom animated hamburger button for mobile */}
          <button
            className={`modern-hamburger${isMenuOpen ? " open" : ""}`}
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="responsive-navbar-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={`mobile-nav-collapse${isMenuOpen ? " show" : ""}`}
          >
            <Nav className="ml-auto">
              {(isMobile ? mobileSections : desktopSections).map(
                (item, idx) => (
                  <Nav.Link
                    className={`wp-block-navigation-item wp-block-navigation-link header-section-text`}
                    href={item.href}
                    key={item.label}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      // On mobile, trigger click on the underlying anchor/button for accessibility
                      if (isMobile) {
                        // Find the first anchor element inside the Nav.Link and trigger click
                        const anchor =
                          e.currentTarget.querySelector("a,button");
                        if (anchor) {
                          anchor.click();
                        }
                      }
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.classList.add("ripple-animate");
                      setTimeout(
                        () => el.classList.remove("ripple-animate"),
                        600 + 60 * item.label.length,
                      );
                    }}
                  >
                    <RippleText text={item.label} />
                  </Nav.Link>
                ),
              )}
            </Nav>

            <Nav className="ml-auto">
              <Nav.Link
                className="wp-block-navigation-item wp-block-navigation-link no-bg nav-link flex-center"
                href="#"
                onClick={handleToggle}
              >
                <label
                  className="switch theme-switch-label"
                  title={props.color === "dark" ? "Dark Mode" : "Light Mode"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {/* Icon to the left of the toggle */}
                  {props.color === "dark" ? (
                    <span
                      className="theme-icon"
                      aria-label="Moon"
                      title="Dark Mode"
                      style={{
                        fontSize: 18,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#11181f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path>
                      </svg>
                    </span>
                  ) : (
                    <span
                      className="theme-icon"
                      aria-label="Sun"
                      title="Light Mode"
                      style={{
                        fontSize: 18,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e63946"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line
                          x1="18.36"
                          y1="18.36"
                          x2="19.78"
                          y2="19.78"
                        ></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                    </span>
                  )}
                  <input
                    type="checkbox"
                    checked={props.color === "dark"}
                    onChange={handleToggle}
                  />
                  <span className="slider round"></span>
                </label>
              </Nav.Link>
              {/* Circle button to the right of the toggle switch */}
              <Nav.Link
                className="wp-block-navigation-item wp-block-navigation-link no-bg"
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 0,
                }}
                tabIndex={0}
                aria-label="Circle Button"
              >
                <div className="disco-btn-wrapper">
                  <button
                    className="disco-btn"
                    aria-label="Circle Button"
                    onMouseEnter={(e) => {
                      const tooltip = e.currentTarget.nextSibling;
                      if (tooltip) tooltip.classList.add("show");
                    }}
                    onMouseLeave={(e) => {
                      const tooltip = e.currentTarget.nextSibling;
                      if (tooltip) tooltip.classList.remove("show");
                    }}
                    onFocus={(e) => {
                      const tooltip = e.currentTarget.nextSibling;
                      if (tooltip) tooltip.classList.add("show");
                    }}
                    onBlur={(e) => {
                      const tooltip = e.currentTarget.nextSibling;
                      if (tooltip) tooltip.classList.remove("show");
                    }}
                  >
                    {/* You can put an icon or leave empty for just a circle */}
                  </button>
                  <span className="disco-tooltip" role="tooltip">
                    <strong>Disco Mode</strong> <br />
                    <span className="disco-warning">Epilepsy Warning</span>
                  </span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}

export default Header;

/* --- End Animated Mobile Hamburger Button ---

Comments:
- The hamburger animates to an 'X' when open, providing clear feedback.
- The button is accessible and keyboard/focus friendly.
- The dropdown animates in/out with color and border radius for a modern look.
- The backdrop closes the menu on tap/click outside.
- This replaces the default Navbar.Toggle for a more modern, app-like feel.
*/

// --- End Mobile Modal Navigation Enhancement ---

// Comments:
// - Modal nav now starts at the very top of the screen on mobile.
// - All project sections, including Certifications and Endorsements, are included in the nav.
// - Nav closes on link click for better mobile UX.

// --- Desktop Navigation Enhancement ---
// Only show main sections on desktop, but include all on mobile
const desktopSections = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
const mobileSections = [
  ...desktopSections,
  { label: "Certifications", href: "#certifications" },
  { label: "Endorsements", href: "#endorsements" },
  { label: "Info", href: "#info" },
];
const isMobile = typeof window !== "undefined" && window.innerWidth <= 1024;
// --- End Desktop Navigation Enhancement ---

// Comments:
// - Desktop nav only shows main sections, mobile nav shows all (including Certifications, Endorsements, Info).
// - Ensures desktop header remains uncluttered, while mobile is comprehensive.
