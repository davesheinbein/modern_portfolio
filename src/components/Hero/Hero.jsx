import React, { useState, useEffect } from "react";
import "./styles/Hero.css";
import jobpositionsData from "../utils/jobpositions.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Hero({ headshotImg }) {
  const headshotUrl = headshotImg.url;
  const headshotName = headshotImg.name;

  const jobpositions = jobpositionsData;
  const [jobIndex, setJobIndex] = useState(0);
  const [typedJobTitle, setTypedJobTitle] = useState("");
  const [typedJobSlogan, setTypedJobSlogan] = useState("");
  const [typing, setTyping] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(true);
    setTyping(true);
    setTypedJobTitle("");
    setTypedJobSlogan("");
    const jobTitle = jobpositions[jobIndex].job_title;
    const jobSlogan = jobpositions[jobIndex].job_slogan;
    let idx = 0;
    let sloganIdx = 0;

    function typeJobTitle() {
      if (idx <= jobTitle.length) {
        setTypedJobTitle(jobTitle.slice(0, idx));
        idx++;
        setTimeout(typeJobTitle, 40);
      } else {
        setTyping("slogan");
        typeJobSlogan();
      }
    }

    function typeJobSlogan() {
      if (sloganIdx <= jobSlogan.length) {
        setTypedJobSlogan(jobSlogan.slice(0, sloganIdx));
        sloganIdx++;
        setTimeout(typeJobSlogan, 30);
      } else {
        setTyping(false);
        setTimeout(() => {
          setFade(false);
          setTimeout(() => {
            setJobIndex((prev) => (prev + 1) % jobpositions.length);
          }, 400);
        }, 2000);
      }
    }

    typeJobTitle();

    return () => {
      setTypedJobTitle("");
      setTypedJobSlogan("");
    };
  }, [jobIndex, jobpositions.length]);

  return (
    <div className="wp-block-columns is-layout-flex wp-container-core-columns-layout-4 wp-block-columns-is-layout-flex hero-section">
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
        style={{ flexBasis: "100%" }}
      >
        <div
          className="wp-block-group alignfull has-background-color has-primary-background-color has-text-color has-background has-link-color wp-elements-d63b33d30a3ee632cf4ad4e987f8f383 has-global-padding is-layout-constrained wp-block-group-is-layout-constrained hero-section"
          style={{
            paddingTop: "var(--wp--preset--spacing--80)",
            paddingRight: "var(--wp--preset--spacing--50)",
            paddingBottom: "var(--wp--preset--spacing--80)",
            paddingLeft: "var(--wp--preset--spacing--50)",
          }}
        >
          <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-3 wp-block-columns-is-layout-flex overflow-hidden">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-columns is-layout-flex wp-container-core-columns-layout-2 wp-block-columns-is-layout-flex">
                <div
                  className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                  style={{ flexBasis: "100%" }}
                >
                  <figure
                    className="wp-block-image size-full has-custom-border is-style-rounded hero-image-figure"
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <div className="hero-lottied">
                      <DotLottieReact
                        src="https://lottie.host/a1d99be5-6304-4656-9f3a-c76a43ff8931/Q94lW8rHgI.lottie"
                        loop
                        autoplay
                        className="hero-lottie-animated"
                      />
                    </div>
                    <img
                      width="800"
                      height="800"
                      src={headshotUrl}
                      alt={headshotName}
                      className="hero-img wp-image-88"
                      style={{
                        borderRadius: "10px",
                        aspectRatio: "1",
                        objectFit: "cover",
                        zIndex: 10,
                        position: "relative",
                      }}
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-group is-vertical is-layout-flex wp-container-core-group-layout-2 wp-block-group-is-layout-flex">
                <h2 className="wp-block-heading has-text-align-left has-background-color has-text-color has-link-color has-xl-large-font-size wp-elements-2a35f7445bcb2e60f253fa1e254bdeb6 hero-section-header">
                  Innovation Unleashed:
                  <div
                    className={`job_title${fade ? " fade-in" : " fade-out"}`}
                  >
                    {typedJobTitle}
                    <span className="typing-cursor">
                      {typing === true || typing === "subtitle" ? "\u2588" : ""}
                    </span>
                  </div>
                  <div
                    className={`job_slogan${fade ? " fade-in" : " fade-out"}`}
                    style={{
                      fontSize: "1.1em",
                      marginTop: 8,
                    }}
                  >
                    {typedJobSlogan}
                    <span className="typing-cursor">
                      {typing === "slogan" ? "\u2588" : ""}
                    </span>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
