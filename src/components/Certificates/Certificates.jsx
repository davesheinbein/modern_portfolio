import React from "react";
import "./styles/Certificates.css";

const certificates = [
  {
    id: 1,
    title: "Google Project Management",
    issueDate: "Jan 2025",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/QYZ3HFEHJ7ZO",
    skills:
      "Agile Project Management, Planning, Budgeting & Forecasting, Communication, Risk Management, Stakeholder Management, Asana, Scrum, Retrospectives, Waterfall Methodologies, Scope Management",
    image: "https://example.com/google-project-management.jpg",
  },
  {
    id: 2,
    title: "APIs",
    issueDate: "Dec 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/DRH1LBFJMV34",
    skills: "REST APIs, Debugging, API Development, Python, JavaScript",
    image: "https://example.com/apis.jpg",
  },
  {
    id: 3,
    title: "Back-End Developer Capstone",
    issueDate: "Dec 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/APUG12W7OGDW",
    skills:
      "Django, REST APIs, Python, MySQL, API Development, JavaScript, HTML, CSS",
    image: "https://example.com/backend-developer-capstone.jpg",
  },
  {
    id: 4,
    title: "Django Web Framework",
    issueDate: "Dec 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/DRX1G117NXS7",
    skills: "Django, REST APIs, Python, MySQL, Databases, Data Structures",
    image: "https://example.com/django-web-framework.jpg",
  },
  {
    id: 5,
    title: "Google Prompting Essentials",
    issueDate: "Dec 2024",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/ZPIH6RC87PQX",
    skills: "Prompt Design, Generative AI",
    image: "https://example.com/google-prompting-essentials.jpg",
  },
  {
    id: 6,
    title: "Introduction to Software Engineering",
    issueDate: "Dec 2024",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/WYCFSF61W86M",
    skills:
      "Software Engineering Basics, Problem-Solving Techniques, Design Principles",
    image: "https://example.com/introduction-to-software-engineering.jpg",
  },
  {
    id: 7,
    title: "Meta Back-End Developer Specialization",
    issueDate: "Dec 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/specialization/KFIC3T4Z5M1C",
    skills:
      "Django, Python, REST APIs, MySQL, PostgreSQL, Databases, Git, Back-End Web Development",
    image: "https://example.com/meta-backend-developer.jpg",
  },
  {
    id: 8,
    title: "The Full Stack",
    issueDate: "Dec 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/4LPYVOJJMBI0",
    skills: "HTML, Django, JavaScript, CSS, Python, Databases, MySQL, Figma",
    image: "https://example.com/the-full-stack.jpg",
  },
  {
    id: 9,
    title: "Advanced React",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/3LE1FJYHE89K",
    skills:
      "Unit Testing, React, Front-End Development, JavaScript, SCSS, HTML5, CSS",
    image: "https://example.com/advanced-react.jpg",
  },
  {
    id: 10,
    title: "Coding Interview Preparation",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/CM3Z5Q50ZWHK",
    skills:
      "Problem Solving, Algorithm Design, Data Structures, Interview Techniques",
    image: "https://example.com/coding-interview-preparation.jpg",
  },
  {
    id: 11,
    title: "Front-End Developer Capstone",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/UZ87NBDZ2VHQ",
    skills: "Front-End Development, React, HTML, CSS, JavaScript, UI/UX Design",
    image: "https://example.com/frontend-developer-capstone.jpg",
  },
  {
    id: 12,
    title: "Google AI Essentials",
    issueDate: "Nov 2024",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/records/OSZHJFM68792",
    skills:
      "Artificial Intelligence, Large Language Models, Prompt Design, Generative AI",
    image: "https://example.com/google-ai-essentials.jpg",
  },
  {
    id: 13,
    title: "HTML and CSS in Depth",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/X8AF6XQ155G8",
    skills: "HTML, CSS, Web Design Principles",
    image: "https://example.com/html-css-in-depth.jpg",
  },
  {
    id: 14,
    title: "Introduction to Back-End Development",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/ZH4IKZM9O1DY",
    skills: "Back-End Development, Databases, API Integration, Python",
    image: "https://example.com/introduction-to-backend-development.jpg",
  },
  {
    id: 15,
    title: "Introduction to Front-End Development",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/X0LTE7793QQ9",
    skills: "HTML, CSS, JavaScript, Front-End Development",
    image: "https://example.com/introduction-to-frontend-development.jpg",
  },
  {
    id: 16,
    title: "Meta Front-End Developer Specialization",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/specialization/TU7W10AOUTPW",
    skills:
      "JavaScript, React, HTML, CSS, Front-End Development, UX/UI Design, Figma, Wireframing",
    image: "https://example.com/meta-frontend-developer.jpg",
  },
  {
    id: 17,
    title: "Principles of UX/UI Design",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/G9R2847MUE4Q",
    skills: "UX/UI Design Principles, Wireframing, Figma, User-Centered Design",
    image: "https://example.com/principles-of-ux-ui-design.jpg",
  },
  {
    id: 18,
    title: "Programming in Python",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/7U0KHW7DRUS1",
    skills: "Python, Programming Fundamentals, Problem Solving",
    image: "https://example.com/programming-in-python.jpg",
  },
  {
    id: 19,
    title: "Programming with JavaScript",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/QT0X8YOXEN4I",
    skills: "JavaScript, Programming Fundamentals, Algorithms",
    image: "https://example.com/programming-with-javascript.jpg",
  },
  {
    id: 20,
    title: "React Basics",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/6A4833KZZ9E8",
    skills: "React, Front-End Development, JavaScript",
    image: "https://example.com/react-basics.jpg",
  },
  {
    id: 21,
    title: "Version Control",
    issueDate: "Nov 2024",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/records/6B5BPPUGKB7D",
    skills: "Git, Version Control, GitHub",
    image: "https://example.com/version-control.jpg",
  },
  {
    id: 22,
    title: "Back End Development and APIs",
    issueDate: "Oct 2024",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/dsDev/back-end-development-and-apis",
    skills: "Node.js, Express.js, REST APIs, MongoDB, PostgreSQL",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQFUYYmqO3Q9Fg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729206745705?e=1730311200&v=beta&t=GLqY5e2R482j46QxZOiTdv3rXvH_tk48r6CKw85jCvo",
  },
  {
    id: 23,
    title: "Data Visualization",
    issueDate: "Oct 2024",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/dsDev/data-visualization",
    skills: "Data Visualization, D3.js, JavaScript, HTML, CSS",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQEa55me7pfBbQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729617282325?e=1730311200&v=beta&t=qdJBAbPhBZ2XMomIH4BmFolfDRPUjGjPLe_F4R_q778",
  },
  {
    id: 24,
    title: "Front End Development Libraries",
    issueDate: "Oct 2024",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/dsDev/front-end-development-libraries",
    skills: "React, Redux, jQuery, Bootstrap",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQGkg6vSRL3QiA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729206992476?e=1730311200&v=beta&t=Q-IrXfqN4R06B8cpSmWEYuLIBmVSgMb5hEeZDzQPEGY",
  },
  {
    id: 25,
    title: "JavaScript Algorithms and Data Structures (Beta)",
    issueDate: "Oct 2024",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/dsDev/javascript-algorithms-and-data-structures-v8",
    skills: "Algorithms, Data Structures, JavaScript",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQGj5Kp6GuEtrQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729207170298?e=1730311200&v=beta&t=3Yr8YaHf-qcZUr7FXRKhGRyQaSX60kZKpbIDrXb8tyE",
  },
  {
    id: 26,
    title: "Responsive Web Design",
    issueDate: "Oct 2024",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/dsDev/responsive-web-design",
    skills: "HTML, CSS, Responsive Design",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQH-ytqi06aiKA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729207071003?e=1730311200&v=beta&t=k5QnUD4DelbmBsQ_h2bkSCV75VE7M35YhR6B_jwvlws",
  },
  {
    id: 27,
    title: "Relational Database",
    issueDate: "Oct 2024",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/dsDev/relational-database-v8",
    skills: "SQL, Relational Databases, PostgreSQL, MySQL",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQEMEzoEbglNew/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730232823097?e=1730840400&v=beta&t=TbzvDKvv-cctA19ojGREIb6f3mhkk2aQtuR4ktaQ9Gk",
  },
  {
    id: 28,
    title: "Responsive Web Design",
    issueDate: "Oct 2024",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/dsDev/responsive-web-design",
    skills: "HTML, CSS, Responsive Design",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQH-ytqi06aiKA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729207071003?e=1730311200&v=beta&t=k5QnUD4DelbmBsQ_h2bkSCV75VE7M35YhR6B_jwvlws",
  },
  {
    id: 29,
    title: "Scientific Computing with Python",
    issueDate: "Oct 2024",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/dsDev/scientific-computing-with-python-v7",
    skills: "Python, Data Analysis, Algorithms",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQHm_on6_DQXhw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729705738391?e=1730311200&v=beta&t=4rYcSxSJtG8pjWW3ucWtG5OzBxzrqG-CxoHgM2wSz14",
  },
  // {
  // 	id: 30,
  // 	title: 'Google Ads Shopping Certification',
  // 	issueDate: 'Sep 2019',
  // 	issuer: 'Google Ads',
  // 	link: 'https://academy.exceedlms.com/student/award/23737380',
  // 	skills: 'Google Ads, Shopping Campaigns',
  // 	image: 'https://example.com/google-ads-shopping.jpg',
  // },
  // {
  // 	id: 31,
  // 	title: 'Google Ads Video Certification',
  // 	issueDate: 'Sep 2019',
  // 	issuer: 'Google Ads',
  // 	link: 'https://academy.exceedlms.com/student/award/23737403',
  // 	skills: 'Google Ads, Video Campaigns',
  // 	image: 'https://example.com/google-ads-video.jpg',
  // },
  // {
  // 	id: 32,
  // 	title: 'Google Ads Mobile Certification',
  // 	issueDate: 'Nov 2018',
  // 	issuer: 'Google Ads',
  // 	link: 'https://academy.exceedlms.com/student/award/23719407',
  // 	skills: 'Google Ads, Mobile Campaigns',
  // 	image: 'https://example.com/google-ads-mobile.jpg',
  // },
  {
    id: 33,
    title: "Google Ads Display Certification",
    issueDate: "Oct 2018",
    issuer: "Google Ads",
    link: "https://academy.exceedlms.com/student/award/22527073",
    skills: "Google Ads, Display Campaigns",
    image: "https://example.com/google-ads-display.jpg",
  },
  // {
  // 	id: 34,
  // 	title: 'Google Ads Search Certification',
  // 	issueDate: 'Oct 2018',
  // 	issuer: 'Google Ads',
  // 	link: 'https://academy.exceedlms.com/student/award/23067289',
  // 	skills: 'Google Ads, Search Campaigns',
  // 	image: 'https://example.com/google-ads-search.jpg',
  // },
  // {
  // 	id: 35,
  // 	title: 'Google Analytics Individual Qualification',
  // 	issueDate: 'Oct 2018',
  // 	issuer: 'Google Ads',
  // 	link: 'https://academy.exceedlms.com/student/award/22281298',
  // 	skills: 'Google Analytics, Data Analysis',
  // 	image: 'https://example.com/google-analytics.jpg',
  // },
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
        <div className="certificates__section">
          <h2 className="certificates__section-title">Certifications</h2>
          <ul className="certificates-list">
            {certificates.map((certificate, index) => (
              <li key={index} className="certificate-item">
                {/* <img
									className='certificate-img'
									src={certificate.image}
									alt={`${certificate.title} logo`}
								/> */}
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-info">Issuer: {certificate.issuer}</p>
                <p className="certificate-info">
                  Issued: {certificate.issueDate}
                </p>
                <p className="certificate-skills">
                  Skills: {certificate.skills}
                </p>
                <a
                  className="certificate-link"
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
