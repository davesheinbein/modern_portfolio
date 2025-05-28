import React from "react";
import "./styles/Certificates.css";

const certificates = [
  {
    id: 1,
    title: "Software Engineering Immersive",
    issueDate: "Jul 2020",
    issuer: "General Assembly — Los Angeles, CA",
    link: "https://docs.google.com/document/d/1_SSzs7-DrL6TZGuGHZsGSmJyCPhOaTnnJvAKsM2DYzI/edit?usp=sharing",
    cert_link:
      "https://www.coursera.org/account/accomplishments/specialization/VP01BNFCRQJO",
    skills:
      "HTML5, CSS3, Flexbox, Grid, Bootstrap, JavaScript ES6+, React.js, Redux, jQuery, Node.js, Express.js, Python, Django, MongoDB, Mongoose, JSON Web Token (JWT), Git, GitHub, branching, pull requests, Agile practices, sprints, stand-ups, code reviews, AWS fundamentals, S3 hosting, deployment basics, continuous integration, continuous deployment, REST API consumption, Axios, Fetch, JSON, full-stack development, clean code, modular code, unit testing, integration testing, responsive design, mobile-first interfaces, UX, SQL, NoSQL, data modeling, data persistence, team-based development, cloud hosting, CI/CD best practices, secure RESTful APIs, scalable applications",
    image: "https://i.imgur.com/omYt4Qc.png",
  },
  {
    id: 2,
    title: "Meta Front-End Developer Specialization",
    issueDate: "Nov 2024",
    issuer: "Meta — Coursera",
    link: "https://docs.google.com/document/d/1hd_NUkew2wskaRfm7ERSLz_lwT0oN3xPIfAW5idoO-o/edit?usp=sharing",
    cert_link:
      "https://www.coursera.org/account/accomplishments/specialization/TU7W10AOUTPW",
    skills:
      "HTML, HTML5, semantic markup, CSS, CSS3, Flexbox, Grid, SCSS, Sass, JavaScript, JavaScript ES6+, DOM manipulation, event handling, functions, control flow, modular code, clean code, React.js, JSX, props, reusable components, useState, useEffect, React hooks, context API, routing, performance optimization, state management, Git, GitHub, version control, repositories, responsive design, accessible web development, UX design, UI design, wireframing, prototyping, design thinking, REST APIs, API consumption, web development, dynamic user interfaces, coding interview preparation, algorithms, data structures, problem-solving, technical assessments, front-end capstone project",
    image: "https://i.imgur.com/ejpTnqL.png",
  },
  {
    id: 3,
    title: "Meta Back-End Developer Specialization",
    issueDate: "Dec 2024",
    issuer: "Meta — Coursera",
    link: "https://docs.google.com/document/d/1JjpKNQBzNt2obo5y26FRjTDSknmiLUDZ2UhBVcJyxqw/edit?usp=sharing",
    cert_link:
      "https://www.coursera.org/account/accomplishments/specialization/KFIC3T4Z5M1C",
    skills:
      "Python, Python programming, object-oriented programming, functional programming, Django, Django ORM, MVC architecture, templating, web security best practices, SQL, MySQL, PostgreSQL, database design, database management, query optimization, REST APIs, API development, JSON, XML, API testing, back-end web development, server-side logic, user authentication, HTTP, client-server model, web architecture, web services, Git, GitHub, version control, source control, collaborative workflows, cloud hosting, deployment basics, software development, clean code, maintainable code, efficient code, full-stack integration, HTML, CSS, coding interview preparation, algorithms, data structures, problem-solving, algorithmic thinking, coding challenges, back-end capstone project",
    image: "https://i.imgur.com/VJMDkfx.png",
  },
  {
    id: 4,
    title: "Introduction to Generative AI Learning Path",
    issueDate: "Apr 2025",
    issuer: "Google Cloud — Coursera",
    link: "https://docs.google.com/document/d/1Yv5JXjVYc5fBSrwQZ31wpZNoY7CyaD7mirMuuHMmr3E/edit?usp=sharing",
    cert_link:
      "https://www.coursera.org/account/accomplishments/specialization/ROUK5JVNYP82",
    skills:
      "Generative AI, generative AI fundamentals, Large Language Models, LLMs, transformer architecture, GPT, PaLM, prompt engineering, AI model lifecycle management, model training, fine-tuning, AI deployment, responsible AI, ethical AI practices, fairness in AI, AI accountability, AI transparency, interpretability, privacy in AI, AI security, bias mitigation, explainability, AI governance, risk management, AI auditing, AI monitoring, Google Cloud AI services, Google Cloud responsible AI tools, scalable AI applications, AI-enhanced application design",
    image: "https://i.imgur.com/lSGbzjP.png",
  },
  {
    id: 5,
    title: "IBM AI Developer Specialization",
    issueDate: "May 2025",
    issuer: "IBM — Coursera",
    link: "https://docs.google.com/document/d/13Q0r-xF-ODdIa_01eUfo31Uabu2TKwL-X3Hu6W63HOs/edit?usp=sharing",
    cert_link:
      "https://www.coursera.org/account/accomplishments/specialization/VP01BNFCRQJO",
    skills:
      "Artificial Intelligence, AI fundamentals, generative AI, prompt engineering, AI model optimization, software engineering principles, Software Development Lifecycle (SDLC), project planning, coding standards, Python, Flask, RESTful APIs, backend integration, web deployment, AI-powered application development, text generation, image generation, code generation, HTML, CSS, JavaScript, interactive web development, responsive web design, web application frameworks, data structures, functions, API creation, AI model integration, front-end development, full-stack development, AI chatbots, software development best practices, technical interview preparation, career development, soft skills for developers, industry insights",
    image: "https://i.imgur.com/isHqVTw.png",
  },
  {
    id: 6,
    title: "Google Project Management",
    issueDate: "Jan 2025",
    issuer: "Google — Coursera",
    link: "https://coursera.org/share/b35f1928c13722fd6a66c7fd32af5c02",
    cert_link:
      "https://www.coursera.org/account/accomplishments/specialization/QYZ3HFEHJ7ZO",
    skills:
      "Project management fundamentals, project initiation, project planning, project execution, project monitoring, project closing, Agile methodology, Scrum framework, sprint management, iterative workflows, risk management, scope management, budget management, stakeholder communication, stakeholder engagement, process improvement, retrospectives, continuous feedback loops, work management tools, Asana, Kanban boards, software project management, team collaboration, team leadership, conflict resolution, resource allocation, timeline estimation, project forecasting, communication planning, quality assurance, change management, project scheduling, project documentation",
    image: "https://i.imgur.com/QmV31qB.png",
  },
];

function Certificates() {
  return (
    <div
      className="wp-block-columns is-layout-flex wp-container-core-columns-layout-13 wp-block-columns-is-layout-flex certifications-section"
      id="certifications"
    >
      <div
        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow certifications-section"
        style={{ flexBasis: "100%" }}
      >
        <div className="certificates__section padding-bottom-50">
          <h2 className="certificates__section-title">Certifications</h2>
          <ul className="certificates-list">
            {certificates.map((certificate, index) => (
              <li key={index} className="certificate-item">
                <img
                  className="certificate-img"
                  src={certificate.image}
                  alt={`${certificate.title} logo`}
                />
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-info">
                  <strong>Issuer: </strong>
                  {certificate.issuer}
                </p>
                <p className="certificate-info">
                  <strong>Issued: </strong>
                  {certificate.issueDate}
                </p>
                <p className="certificate-skills">
                  <strong>Skills: </strong>
                  {certificate.skills}
                </p>
                <div>
                  <a
                    className="certificate-link"
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About
                  </a>{" "}
                  |{" "}
                  <a
                    className="certificate-link"
                    href={certificate.cert_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
