import React, { useState, useEffect } from "react";
import "./styles/Contact.css";
import jobpositionsData from "../utils/jobpositions.json";
import emailjs from "emailjs-com";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Contact(props) {
  const [jobIndex, setJobIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [typedTagline, setTypedTagline] = useState("");
  const [typing, setTyping] = useState("subtitle");
  const [formStatus, setFormStatus] = useState(null); // success | error | null
  const [flipped, setFlipped] = useState(false);
  const jobpositions = jobpositionsData;

  // Typing animation for subtitle and tagline (copied/adapted from Header)
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

  // Flip the lottie every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(null);
    emailjs
      .sendForm(
        "service_t286ywp", // EmailJS service ID
        "portfolioEmail", // EmailJS template ID
        e.target,
        "zGrV05Nik78ARO3fq", // EmailJS public key
      )
      .then(
        (result) => {
          setFormStatus("success");
          e.target.reset();
        },
        (error) => {
          setFormStatus("error");
        },
      );
  };

  return (
    <div
      className="wp-block-columns is-layout-flex wp-container-core-columns-layout-35 wp-block-columns-is-layout-flex contact contact-section"
      id="contact"
    >
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
        style={{ flexBasis: "100%" }}
      >
        <div
          className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
          style={{
            marginTop: "0px",
            marginBottom: "0px",
            paddingTop: "var(--wp--preset--spacing--80)",
            paddingRight: "var(--wp--preset--spacing--50)",
            paddingBottom: "var(--wp--preset--spacing--80)",
            paddingLeft: "var(--wp--preset--spacing--50)",
          }}
        >
          <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-34 wp-block-columns-is-layout-flex">
            <div
              className="wp-block-column is-layout-flow wp-container-core-column-layout-44 wp-block-column-is-layout-flow"
              style={{ flexBasis: "40%" }}
            >
              <h1
                style={{
                  fontSize:
                    "clamp(16.834px, 1.052rem + ((1vw - 3.2px) * 1.042), 26px)",
                  lineHeight: "1",
                }}
                className="wp-block-site-title contact-section-header"
              >
                DAVID SHEINBEIN
              </h1>
              <h6
                className={`contact-subtitle wp-block-heading has-vivid-red-color has-text-color has-link-color wp-elements-7801a88062b2778f8750ee44fd5f598f contact-section-accent${
                  fade ? " fade-in" : " fade-out"
                }`}
              >
                {typedSubtitle}
                <span className="typing-cursor">
                  {typing === "subtitle" ? "\u2588" : ""}
                </span>
              </h6>
              <h6
                className={`contact-tagline wp-block-heading has-vivid-red-color has-text-color has-link-color wp-elements-7801a88062b2778f8750ee44fd5f598f contact-section-accent${
                  fade ? " fade-in" : " fade-out"
                }`}
              >
                {typedTagline}
                <span className="typing-cursor">
                  {typing === "tagline" ? "\u2588" : ""}
                </span>
              </h6>
              <ul className="social-links wp-block-social-links has-small-icon-size has-icon-color has-icon-background-color is-style-default is-horizontal is-content-justification-left is-layout-flex wp-container-core-social-links-layout-7 wp-block-social-links-is-layout-flex contact-section-icon">
                <li className="wp-social-link wp-social-link-linkedin has-background-color has-primary-background-color wp-block-social-link contact-section-icons">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/david-sheinbein/"
                    className="wp-block-social-link-anchor"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                    </svg>
                    <span className="wp-block-social-link-label screen-reader-text">
                      https://www.linkedin.com/in/david-sheinbein/
                    </span>
                  </a>
                </li>
                <li className="wp-social-link wp-social-link-github has-background-color has-primary-background-color wp-block-social-link contact-section-icons">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/davesheinbein"
                    className="wp-block-social-link-anchor"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.847 c0,1.333-0.012,2.417-0.012,2.743c0,0.265,0.182,0.578,0.688,0.48C19.135,20.166,22,16.419,22,12C22,6.477,17.523,2,12,2z"></path>
                    </svg>
                    <span className="wp-block-social-link-label screen-reader-text">
                      https://github.com/davesheinbein
                    </span>
                  </a>
                </li>
              </ul>
              <div className={`contact-lottie${flipped ? " flipped" : ""}`}>
                <DotLottieReact
                  src="https://lottie.host/10207b61-08c1-49a5-848d-75217339b1de/OJ5btkXjkc.lottie"
                  loop
                  autoplay
                  className="contact-lottie-animated"
                />
              </div>
            </div>
            <div
              className="wp-block-column is-layout-flow wp-container-core-column-layout-45 wp-block-column-is-layout-flow"
              style={{ flexBasis: "60%" }}
            >
              <div className="contact-form-container">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">
                    Contact{" "}
                    <DotLottiePlayer
                      autoplay
                      loop
                      src="https://lottie.host/0abe9ae5-1394-4066-8012-07e421669821/SKmc1OwHhu.lottie"
                      className="contact-lottie-header"
                    />
                  </h2>
                  <p className="contact-form-description">
                    Interested in collaborating or want to chat? Fill out the
                    form below or reach out via social media.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form wpcf7-form"
                  noValidate
                  data-status="init"
                >
                  <div className="contact-form_fields">
                    <div className="contact-form-field">
                      <label htmlFor="name">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        aria-required="true"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        aria-required="true"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="subject">
                        Subject <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        aria-required="true"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="message">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        aria-required="true"
                        placeholder="Your Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="contact-form-actions">
                    <button
                      type="submit"
                      className="contact-form-submit wp-block-button__link"
                    >
                      Send Message
                    </button>
                  </div>
                  {formStatus === "success" && (
                    <p
                      style={{
                        color: "green",
                        marginTop: "1rem",
                      }}
                    >
                      Thank you! Your message has been sent.
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p
                      style={{
                        color: "red",
                        marginTop: "1rem",
                      }}
                    >
                      Sorry, there was an error. Please try again later.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
