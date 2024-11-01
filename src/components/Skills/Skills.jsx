import React from "react";
import "./styles/Skills.css";

function Skills() {
  return (
    <div
      className="wp-block-columns is-layout-flex wp-container-core-columns-layout-14 wp-block-columns-is-layout-flex skills-section"
      id="skills"
    >
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow skills-section"
        style={{ flexBasis: "100%" }}
      >
        <div
          className="wp-block-group alignfull has-primary-background-color has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained skills-section"
          style={{
            marginTop: "0px",
            marginBottom: "0px",
            paddingTop: "var(--wp--preset--spacing--70)",
            paddingRight: "var(--wp--preset--spacing--50)",
            paddingBottom: "var(--wp--preset--spacing--70)",
            paddingLeft: "var(--wp--preset--spacing--50)",
          }}
        >
          <div className="wp-block-group alignwide is-vertical is-content-justification-center is-layout-flex wp-container-core-group-layout-28 wp-block-group-is-layout-flex">
            <h2
              className="wp-block-heading alignwide has-text-align-center has-background-color has-text-color has-link-color wp-elements-2585fadaab27aa1a3e8b26d730286d86 skills-section-header"
              style={{
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              Adaptability, Angular, Attention to Detail, Axios, AWS,
              Communication, CSS, D3, Django, Docker, Express, Git, HTML5,
              JavaScript, Jenkins, Jest, Mongoose, MongoDB, Node, Prettier,
              PostgreSQL, Python, React, Redux, RxJS, SASS, TypeScript, Web
              Design, Webpack, etc…
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
