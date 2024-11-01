import React from "react";
import "./styles/Info.css";

function Info() {
  return (
    <div
      className="wp-block-columns is-layout-flex wp-container-core-columns-layout-10 wp-block-columns-is-layout-flex info info-section"
      id="info"
    >
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
        style={{ flexBasis: "100%" }}
      >
        <div
          className="wp-block-group alignfull has-background-color has-primary-background-color has-text-color has-background has-link-color wp-elements-be701a937b927e87eef02281fda50775 has-global-padding is-layout-constrained wp-block-group-is-layout-constrained info-section"
          style={{
            paddingTop: "var(--wp--preset--spacing--70)",
            paddingRight: "var(--wp--preset--spacing--50)",
            paddingBottom: "var(--wp--preset--spacing--70)",
            paddingLeft: "var(--wp--preset--spacing--50)",
          }}
        >
          <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-8 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div
                className="wp-block-group is-layout-flow wp-container-core-group-layout-7 wp-block-group-is-layout-flow"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <h3 className="wp-block-heading has-background-color has-text-color has-large-font-size info-section-accent">
                  Consultancy
                </h3>

                <p className="has-ast-global-color-3-color has-text-color info-section-text">
                  As a seasoned full-stack software engineer, my consultancy
                  experience extends across various high-profile projects with
                  brands like WebMd, Demandforce, Sesame, and Dentrix. In these
                  collaborations, I actively contribute to the creation of new
                  tickets, provide training to developers, facilitate debugging
                  sessions, implement crucial components, and introduce new
                  features or resolved bugs. Working closely with
                  cross-functional teams, including product managers, project
                  managers, designers, and both backend and frontend developers,
                  I ensure efficient collaboration and achievement of
                  stakeholder goals. This hands-on involvement demonstrates my
                  ability to offer strategic guidance and technical expertise in
                  consultancy roles within diverse project environments.
                </p>
              </div>
            </div>

            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div
                className="wp-block-group is-layout-flow wp-container-core-group-layout-8 wp-block-group-is-layout-flow"
                style={{
                  paddingTop: "10px",
                  paddingRight: "0",
                  paddingBottom: "10px",
                  paddingLeft: "0",
                }}
              >
                <h3 className="wp-block-heading has-background-color has-text-color has-large-font-size info-section-accent">
                  Management
                </h3>

                <p className="has-ast-global-color-3-color has-text-color info-section-text">
                  In project management, my leadership and organizational
                  prowess shine through active participation in cross-functional
                  teams, exemplified by my pivotal role in developing a
                  patient-facing form with diverse inputs for major brands. This
                  not only showcases my ability to lead strategic initiatives
                  but also underscores my effective project management skills.
                  Furthermore, my hands-on involvement in optimizing code
                  repositories and implementing enhanced workflows demonstrates
                  a steadfast commitment to maintaining stringent version
                  control and code quality standards. Swiftly addressing
                  challenges and elevating documentation, I actively contribute
                  to bolstering the overall efficiency and adept management of
                  development projects, ensuring successful outcomes in dynamic
                  and collaborative environments.
                </p>
              </div>
            </div>
          </div>

          <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-9 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div
                className="wp-block-group is-layout-flow wp-container-core-group-layout-9 wp-block-group-is-layout-flow"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <h3 className="wp-block-heading has-background-color has-text-color has-large-font-size info-section-accent">
                  Training
                </h3>

                <p className="has-ast-global-color-3-color has-text-color info-section-text">
                  My role in training developers and mentoring team members is a
                  testament to my commitment to knowledge sharing and skill
                  development. From addressing challenges in code repositories
                  to conducting code reviews and providing constructive
                  feedback, I actively contribute to the growth and training of
                  my peers. This mentoring extends to onboarding new team
                  members, where I ensure a smooth integration by sharing
                  insights into the codebase, development workflows, and project
                  conventions. By fostering a collaborative culture through pair
                  programming and technical discussions, I promote continuous
                  learning and skill enhancement within the team.
                </p>
              </div>
            </div>

            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div
                className="wp-block-group is-layout-flow wp-container-core-group-layout-10 wp-block-group-is-layout-flow"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <h3 className="wp-block-heading has-background-color has-text-color has-large-font-size info-section-accent">
                  Support
                </h3>

                <p className="has-ast-global-color-3-color has-text-color info-section-text">
                  In the realm of support, my focus has been on troubleshooting
                  web application functionality, addressing bugs, and optimizing
                  performance to deliver a smooth user experience. I am the
                  go-to person for quick resolutions, especially before
                  releases, and collaborate closely with QA teams to ensure the
                  delivery of high-quality, bug-free code. Effective
                  communication of progress, challenges, and solutions with team
                  members and stakeholders further underscores my commitment to
                  providing reliable support within the development process.
                  This support-oriented approach aligns with creating a
                  collaborative and knowledge-sharing culture, ensuring that the
                  entire team is equipped to address challenges and deliver
                  successful outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
