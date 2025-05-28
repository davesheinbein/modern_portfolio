import React from "react";
import "./styles/About.css";

function About() {
  return (
    <div
      className="wp-block-columns is-layout-flex wp-container-core-columns-layout-7 wp-block-columns-is-layout-flex about-section"
      id="about"
    >
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
        style={{ flexBasis: "100%" }}
      >
        <div
          className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained about-section"
          style={{
            paddingTop: "var(--wp--preset--spacing--70)",
            paddingRight: "var(--wp--preset--spacing--50)",
            paddingBottom: "var(--wp--preset--spacing--70)",
            paddingLeft: "var(--wp--preset--spacing--50)",
          }}
        >
          <div
            className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained about-section-header"
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              paddingTop: "7vw",
              paddingRight: "var(--wp--preset--spacing--50)",
              paddingBottom: "7vw",
              paddingLeft: "var(--wp--preset--spacing--50)",
            }}
          >
            <div className="wp-block-group alignwide has-global-padding is-layout-constrained wp-block-group-is-layout-constrained">
              <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-5 wp-block-columns-is-layout-flex">
                <div
                  className="wp-block-column is-layout-flow wp-container-core-column-layout-6 wp-block-column-is-layout-flow about-section-header"
                  style={{ flexBasis: "50%" }}
                >
                  <h2 className="wp-block-heading has-text-align-left has-xxxxx-large-font-size about-section-header">
                    What makes me different?
                  </h2>
                </div>

                <div
                  className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow about-section-text"
                  style={{ flexBasis: "50%" }}
                >
                  <p className="about-section-text">
                    I enjoy helping people discover and implement interesting
                    ways to scale and grow their businesses and helping them
                    reach their goals in a logical and creative way. Programming
                    is one of the most versatile and important skills a person
                    can have in today’s business world. It enables developers to
                    craft programs unique to any business’ specific needs thus
                    facilitating that business’ growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-6 wp-block-columns-is-layout-flex about-section-text">
              <div className="wp-block-column is-layout-flow wp-container-core-column-layout-8 wp-block-column-is-layout-flow about-section-text">
                <h4 className="wp-block-heading has-text-align-left about-section-accent">
                  Striving for knowledge
                </h4>

                <p className="about-section-text">
                  Embarking on a career in software engineering, I completed the
                  Software Engineering Immersive program at General Assembly in
                  2020, complementing my academic foundation with a Bachelor of
                  Arts in Communications and Media Production from the
                  University of Colorado in 2018. As a seasoned Full-Stack
                  Developer based in Los Angeles, I have amassed over four years
                  of comprehensive experience, refining my expertise across a
                  spectrum of technologies including Angular, Django,
                  JavaScript, MongoDB, Node, Python, React, Redux, SASS, HTML5,
                  and CSS.
                  <br />
                </p>

                <p className="about-section-text">
                  Previously, as a Full Stack Developer at Internet Brands in El
                  Segundo, CA, I spearheaded impactful projects for
                  distinguished brands such as WebMD, Demandforce, Sesame, and
                  Dentrix. In this role, I was responsible for creating new
                  tickets, conducting developer training sessions, debugging
                  applications, implementing crucial components, and
                  orchestrating the introduction of innovative features or bug
                  fixes. My proactive troubleshooting methodology enabled me to
                  adeptly address 10-25 issues per sprint, consistently
                  upholding a standard of high code quality. Engaging in
                  knowledge-sharing through training sessions and active
                  participation in code reviews reflected my commitment to
                  fostering a collaborative and growth-centric development
                  environment.
                  <br />
                </p>

                <p className="about-section-text">
                  Beyond the realm of coding, my professional journey is rooted
                  in crafting bespoke solutions that facilitate the scaling and
                  growth of businesses. My dedication to leveraging programming
                  as a versatile and indispensable tool allows for the creation
                  of tailored programs, aligning seamlessly with the specific
                  needs of businesses and contributing to their strategic and
                  creative growth endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
