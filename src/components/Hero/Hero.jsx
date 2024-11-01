import React from "react";
import "./styles/Hero.css";

function Hero({ headshotImg }) {
  const headshotUrl = headshotImg.url;
  const headshotName = headshotImg.name;
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
          <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-3 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-columns is-layout-flex wp-container-core-columns-layout-2 wp-block-columns-is-layout-flex">
                <div
                  className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                  style={{ flexBasis: "100%" }}
                >
                  <figure className="wp-block-image size-full has-custom-border is-style-rounded">
                    <img
                      width="800"
                      height="800"
                      src={headshotUrl}
                      alt={headshotName}
                      className="wp-image-88"
                      style={{
                        borderRadius: "10px",
                        aspectRatio: "1",
                        objectFit: "cover",
                      }}
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-group is-vertical is-layout-flex wp-container-core-group-layout-2 wp-block-group-is-layout-flex">
                <h2 className="wp-block-heading has-text-align-left has-background-color has-text-color has-link-color has-xxx-large-font-size wp-elements-2a35f7445bcb2e60f253fa1e254bdeb6 hero-section-header">
                  Innovation Unleashed: Full-Stack Developer Transforming Ideas
                  into Immersive Digital Realities.
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
