import React, { useEffect, useState, useMemo } from "react";
import "./styles/Endorsements.css";
import { getShuffledEndorsements } from "../utils/utils";

function Endorsements() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const shuffledEndorsements = useMemo(() => getShuffledEndorsements(), []);
  const endorsements = shuffledEndorsements;
  const displayCount = 3; // Number of endorsements to display at once
  const total = endorsements.length;

  useEffect(() => {
    const timeout = setTimeout(() => setAnimating(false), 1000);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + displayCount) % total);
      }, 700); // match fade out duration
    }, 10000);
    return () => clearInterval(interval);
  }, [total]);

  // Returns an array of endorsements to display, ensuring:
  // - The total text length does not exceed 1400 characters
  // - No more than displayCount endorsements are shown
  const getDisplayedEndorsements = () => {
    let totalChars = 0;
    const result = [];
    for (let i = 0; i < endorsements.length; i++) {
      const idx = (index + i) % endorsements.length;
      const text = endorsements[idx].text;
      // Stop if adding this endorsement would exceed the character limit
      if (totalChars + text.length > 1600) break;
      result.push(endorsements[idx]);
      totalChars += text.length;
      // Stop if we've reached the displayCount
      if (result.length >= displayCount) break;
    }
    return result;
  };

  const displayed = getDisplayedEndorsements();

  return (
    <div
      className="wp-block-columns is-layout-flex wp-container-core-columns-layout-33 wp-block-columns-is-layout-flex endorsements endorsements-section"
      id="endorsements"
    >
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow endorsements-section"
        style={{ flexBasis: "100%" }}
      >
        <div
          className="wp-block-group alignfull has-foreground-color has-primary-background-color has-text-color has-background has-global-padding is-layout-constrained wp-container-core-group-layout-43 wp-block-group-is-layout-constrained endorsements-section"
          style={{
            marginTop: "0px",
            marginBottom: "0px",
            paddingTop: "var(--wp--preset--spacing--80)",
            paddingRight: "var(--wp--preset--spacing--50)",
            paddingBottom: "var(--wp--preset--spacing--80)",
            paddingLeft: "var(--wp--preset--spacing--50)",
          }}
        >
          <h2
            className="wp-block-heading alignwide has-background-color has-text-color has-large-font-size endorsements-section-header"
            id="recommendations"
          >
            What people are saying
          </h2>
          <div className="endorsements-list alignwide wp-container-core-columns-layout-31 wp-block-columns-is-layout-flex">
            {displayed.map((endorsement, idx) => (
              <div
                key={idx}
                className={`wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-31 wp-block-columns-is-layout-flex ${animating ? "wp-block-columns-exit" : ""}`}
              >
                <div className="wp-block-column is-layout-flow wp-container-core-column-layout-40 wp-block-column-is-layout-flow">
                  <p className="has-background-color has-text-color has-link-color endorsements-section-text">
                    {endorsement.text.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <a
                    href={endorsement.url}
                    className="has-vivid-red-color has-text-color has-link-color endorsements-section-accent no-underline"
                  >
                    — <strong>{endorsement.author}</strong>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Endorsements;
