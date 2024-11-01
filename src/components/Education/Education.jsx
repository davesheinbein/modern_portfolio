import React from "react";
import "./styles/Education.css";

function Education(props) {
  const { codeCompImg, compCodeImg } = props;
  return (
    <div
      className="wp-block-columns is-layout-flex wp-container-core-columns-layout-17 wp-block-columns-is-layout-flex education-section"
      id="education"
    >
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow education-section"
        style={{ flexBasis: "100%" }}
      >
        <div
          style={{ height: "50px" }}
          aria-hidden="true"
          className="wp-block-spacer"
        ></div>

        <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-container-core-group-layout-32 wp-block-group-is-layout-constrained">
          <h2 className="wp-block-heading alignwide has-text-align-left education-section-header">
            Education
          </h2>

          <div
            className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-15 wp-block-columns-is-layout-flex"
            style={{
              paddingTop: "0px",
              paddingRight: "0px",
              paddingBottom: "0px",
              paddingLeft: "0px",
              color: "#11181f",
            }}
          >
            <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow education-section-text">
              <div
                className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                style={{
                  marginTop: "var(--wp--preset--spacing--80)",
                  marginBottom: "var(--wp--preset--spacing--80)",
                  paddingTop: "0px",
                  paddingRight: "var(--wp--preset--spacing--60)",
                  paddingBottom: "0px",
                  paddingLeft: "var(--wp--preset--spacing--60)",
                }}
              >
                <h2 className="wp-block-heading education-section-text">
                  <strong>
                    <strong>General Assembly</strong>
                  </strong>
                </h2>

                <p className="education-section-accent">
                  <strong>Software Engineering Immersive</strong>
                </p>

                <p className="education-section-text">
                  <em>Los Angeles, CA</em>
                </p>

                <p className="education-section-accent">Class of 2020</p>

                <p className="education-section-text">
                  General Assembly's Software Engineering Immersive wasn't just
                  a program; it was a tailored journey that significantly shaped
                  my evolution as a coder. Here's how this intensive experience
                  brought a personal touch to my learning:
                </p>

                <ul className="education-section-text">
                  <li>
                    <strong>Accelerated, Hands-On Learning:</strong> In dynamic,
                    fast-paced sessions, I delved into diverse technologies,
                    adapting swiftly to the ever-evolving world of software
                    engineering.
                  </li>

                  <li>
                    <strong>
                      Practical Insights and Real-World Applications:
                    </strong>{" "}
                    The emphasis on practicality in the curriculum empowered me
                    to immediately apply my skills to real-world scenarios. This
                    hands-on approach seamlessly connected theory to practical
                    solutions.
                  </li>

                  <li>
                    <strong>
                      Dynamic Approach for Well-Rounded Expertise:
                    </strong>{" "}
                    Tailored for Full Stack Developer expertise, the program
                    covered frontend and backend technologies comprehensively.
                    This personalized touch nurtured a holistic understanding
                    crucial for tackling complex software projects.
                  </li>

                  <li>
                    <strong>Focused Skill Development:</strong> With a laser
                    focus on crucial Full Stack Developer skills, the immersive
                    experience honed my ability to craft end-to-end solutions.
                    This bespoke focus significantly contributed to my
                    well-rounded proficiency in software development.
                  </li>

                  <li>
                    <strong>Collaborative Learning Environment:</strong>{" "}
                    Engaging with a diverse cohort personalized my learning
                    journey, fostering an environment perfectly attuned to
                    collaborative problem-solving. This unique experience not
                    only enriched my teamwork skills but also elevated my
                    communication prowess—both vital in a professional setting.
                  </li>
                </ul>

                <p className="education-section-text">
                  This immersive learning journey at General Assembly wasn't
                  just about education; it was a distinctive exploration that
                  played a pivotal role in shaping my capabilities as a software
                  engineer. It equipped me with the tools and knowledge
                  necessary for excellence in the field, providing a bespoke and
                  practical education in software development, uniquely tailored
                  to David Sheinbein's growth.
                </p>
              </div>
            </div>

            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <figure className="wp-block-image aligncenter size-large has-custom-border is-style-rounded">
                <img
                  width="683"
                  height="1024"
                  src={codeCompImg.url}
                  alt={codeCompImg.name}
                  className="wp-image-210"
                  style={{
                    borderRadius: "10px",
                    aspectRatio: "9/16",
                    objectFit: "cover",
                  }}
                  srcSet={codeCompImg.url}
                  sizes="(max-width: 683px) 100vw, 683px"
                />
              </figure>
            </div>
          </div>

          <div
            className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-16 wp-block-columns-is-layout-flex"
            style={{
              paddingTop: "0px",
              paddingRight: "0px",
              paddingBottom: "0px",
              paddingLeft: "0px",
            }}
          >
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <figure className="wp-block-image aligncenter size-full has-custom-border is-style-rounded">
                <img
                  width="3882"
                  height="2584"
                  src={compCodeImg.url}
                  alt={compCodeImg.name}
                  className="wp-image-212"
                  style={{
                    borderRadius: "10px",
                    aspectRatio: "9/16",
                    objectFit: "cover",
                  }}
                  srcSet={compCodeImg.url}
                  sizes="(max-width: 3882px) 100vw, 3882px"
                />
              </figure>
            </div>

            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div
                className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                style={{
                  marginTop: "var(--wp--preset--spacing--80)",
                  marginBottom: "var(--wp--preset--spacing--80)",
                  paddingTop: "0px",
                  paddingRight: "var(--wp--preset--spacing--60)",
                  paddingBottom: "0px",
                  paddingLeft: "var(--wp--preset--spacing--60)",
                }}
              >
                <h2 className="wp-block-heading education-section-text">
                  <strong>
                    <strong>University of Colorado</strong>
                  </strong>
                </h2>

                <p className="education-section-accent">
                  <strong>
                    Bachelor of Arts in Communications
                    <br />
                    Bachelor of Arts in Media Production
                  </strong>
                </p>

                <p className="education-section-text">
                  <em>
                    <em>Boulder, CO</em>
                  </em>
                </p>

                <p className="education-section-accent">Class of 2018</p>

                <p className="education-section-text">
                  My time at the University of Colorado, pursuing degrees in
                  Communications and Media Production, has been instrumental in
                  shaping my multifaceted skill set. Here's a glimpse into my
                  academic journey:
                </p>

                <ul className="education-section-text">
                  <li>
                    <strong>Exploring Communications:</strong> Successfully
                    completed an Introduction to Programming course, delivering
                    5 projects showcasing proficiency in HTML, JavaScript, CSS,
                    and React. Emphasized digital communication practices,
                    gaining expertise in UX, UI, and marketing, resulting in a
                    20% user engagement boost.
                  </li>

                  <li>
                    <strong>Diving into Media Production:</strong> Led visually
                    stunning media projects, utilizing technologies like
                    photography, videography, and Adobe software. Demonstrated
                    proficiency in AR and VR programming, contributing to a
                    comprehensive skill set that enhances creative outputs and
                    technical capabilities.
                  </li>

                  <li>
                    <strong>Hands-On Project Crafting:</strong> Applied advanced
                    photo stitching skills to create a 3D model. Collaborated on
                    a group VR project using Blender and Unity for a minimalist
                    space world, accessible through HTC Vive, demonstrating
                    versatility in 3D modeling and VR development.
                  </li>

                  <li>
                    <strong>Collaborative Learning:</strong> Participated in
                    numerous projects, integrating communication, marketing, and
                    tech practices, fostering effective interdisciplinary
                    teamwork. Developed a well-rounded education, enhancing
                    skills and adaptability, with tangible contributions for
                    comprehensive understanding.
                  </li>
                </ul>

                <p className="education-section-text">
                  My academic journey at the University of Colorado
                  significantly contributed to the diverse skill set I bring to
                  the table, blending Communications, Media Production, and
                  programming for a powerful approach to problem-solving and
                  creative expression.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ height: "50px" }}
          aria-hidden="true"
          className="wp-block-spacer"
        ></div>
      </div>
    </div>
  );
}

export default Education;
