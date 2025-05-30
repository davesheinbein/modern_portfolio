import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./styles/Header.css";
import jobpositionsData from "../utils/jobpositions.json";

function Header(props) {
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

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleMenuToggle}
            className="wp-block-navigation__responsive-dialog"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Education", href: "#education" },
                {
                  label: "Experience",
                  href: "#experience",
                },
                { label: "Skills", href: "#skills" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
              ].map((item, idx) => (
                <Nav.Link
                  className={`wp-block-navigation-item wp-block-navigation-link header-section-text`}
                  href={item.href}
                  key={item.label}
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
              ))}
            </Nav>

            <Nav className="ml-auto">
              <Nav.Link
                className="wp-block-navigation-item wp-block-navigation-link no-bg"
                href="#"
                onClick={handleToggle}
              >
                <label
                  className="switch"
                  title={props.color === "dark" ? "Dark Mode" : "Light Mode"}
                >
                  <input
                    type="checkbox"
                    checked={props.color === "dark"}
                    onChange={handleToggle}
                  />
                  <span className="slider round"></span>
                </label>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
