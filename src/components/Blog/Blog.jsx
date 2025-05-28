import React, { useState } from "react";
import "./styles/Blog.css";
import blogposts from "../utils/blogposts.json";
import { getPaginatedItems } from "../utils/utils";

function Blog(props) {
  const {
    deskCompImg,
    messageImg,
    catDogImg,
    responsiveDesignImg,
    harnessingDesignImg,
    importanceImg,
    angularVsReactImg,
  } = props;

  const imgMap = {
    deskCompImg,
    messageImg,
    catDogImg,
    responsiveDesignImg,
    harnessingDesignImg,
    importanceImg,
    angularVsReactImg,
  };

  const [startIdx, setStartIdx] = useState(0);
  const postsPerPage = 3;
  const totalPosts = blogposts.length;

  const handleNext = () => {
    setStartIdx((prev) => (prev + postsPerPage) % totalPosts);
  };

  const handlePrev = () => {
    setStartIdx((prev) => (prev - postsPerPage + totalPosts) % totalPosts);
  };

  const visiblePosts = getPaginatedItems(blogposts, startIdx, postsPerPage);

  return (
    <div
      className="wp-block-columns is-layout-flex wp-container-core-columns-layout-30 wp-block-columns-is-layout-flex blog blog-section"
      id="blog"
    >
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow blog-section"
        style={{ flexBasis: "100%" }}
      >
        <div
          className="wp-block-group alignfull has-link-color wp-elements-a09ee502fbd81123d81ab9db2c80ab9e has-global-padding is-layout-constrained wp-container-core-group-layout-42 wp-block-group-is-layout-constrained"
          style={{
            marginTop: 0,
            marginBottom: 0,
            paddingTop: "var(--wp--preset--spacing--80)",
            paddingRight: "var(--wp--preset--spacing--50)",
            paddingBottom: "var(--wp--preset--spacing--80)",
            paddingLeft: "var(--wp--preset--spacing--50)",
          }}
        >
          <h2
            className="wp-block-heading alignwide blog-section-header"
            style={{
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
          >
            Blog posts
            <span
              className="blog-slider-controls"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <button onClick={handlePrev} aria-label="Previous">
                &lt;
              </button>
              <button onClick={handleNext} aria-label="Next">
                &gt;
              </button>
            </span>
          </h2>

          <div className="wp-block-query alignwide is-layout-flow wp-block-query-is-layout-flow">
            <ul className="columns-3 wp-block-post-template is-layout-grid wp-container-core-post-template-layout-1 wp-block-post-template-is-layout-grid blog-slider-list">
              {visiblePosts.map((post, idx) => (
                <li
                  key={idx}
                  className="wp-block-post post type-post status-publish format-standard has-post-thumbnail hentry category-blog blog-slider-item"
                  style={{
                    transition: "transform 0.5s cubic-bezier(.77,0,.18,1)",
                    transform: "translateX(0)",
                  }}
                >
                  <div
                    className="wp-block-group is-layout-flow wp-block-group-is-layout-flow blog-section-text"
                    style={{ paddingBottom: "1.5rem" }}
                  >
                    <figure
                      style={{ aspectRatio: "16/9" }}
                      className={`wp-block-post-featured-image wp-duotone-unset-${startIdx + idx + 2}`}
                    >
                      <a href={post.url} target="_self">
                        {post.imgKey ? (
                          <img
                            width="1080"
                            height="720"
                            src={imgMap[post.imgKey]?.url}
                            className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                            alt={post.title}
                            style={{
                              borderRadius: "10px",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            decoding="async"
                            loading="lazy"
                          />
                        ) : null}
                      </a>
                    </figure>

                    <h3
                      style={{ lineHeight: "1.3" }}
                      className="wp-block-post-title has-medium-font-size blog-section-text"
                    >
                      <a
                        href={post.url}
                        target="_self"
                        className="blog-section-text"
                      >
                        {post.title}
                      </a>
                    </h3>

                    <div className="wp-block-post-excerpt has-small-font-size blog-section-text">
                      <p className="wp-block-post-excerpt__excerpt blog-section-text">
                        {post.excerpt}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "center",
                          fontSize: "0.9em",
                          color: "#888",
                        }}
                      >
                        {post.published && (
                          <span>Published on {post.published}</span>
                        )}
                        {post.readTime && <span>· {post.readTime}</span>}
                      </div>
                      <p className="wp-block-post-excerpt__more-text">
                        <a
                          className="wp-block-post-excerpt__more-link blog-section-url"
                          href={post.url}
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
