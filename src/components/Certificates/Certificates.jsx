import React from 'react';
import './styles/Certificates.css';

// Updated certificates data structure with all relevant information
const certificates = [
	{
		title: 'Back End Development and APIs',
		issueDate: 'Oct 2024',
		issuer: 'FreeCodeCamp',
		link: 'https://www.freecodecamp.org/certification/dsDev/back-end-development-and-apis',
		skills:
			'MongoDB · MongoDB Atlas · Express.js · Node.js · Git · GitHub · HTML5 · JavaScript · Cascading Style Sheets (CSS)',
		// image: 'placeholder',
	},
	{
		title: 'Data Visualization',
		issueDate: 'Oct 2024',
		issuer: 'FreeCodeCamp',
		link: 'https://www.freecodecamp.org/certification/dsDev/data-visualization',
		skills:
			'HTML5 · Cascading Style Sheets (CSS) · JavaScript · D3.js · TopoJSON',
		// image: 'placeholder',
	},
	{
		title: 'Front End Development Libraries',
		issueDate: 'Oct 2024',
		issuer: 'FreeCodeCamp',
		link: 'https://www.freecodecamp.org/certification/dsDev/front-end-libraries',
		skills:
			'Front-End Development · HTML5 · Cascading Style Sheets (CSS) · Git · GitHub',
		// image: 'placeholder',
	},
	{
		title: 'JavaScript Algorithms and Data Structures',
		issueDate: 'Oct 2024',
		issuer: 'FreeCodeCamp',
		link: 'https://www.freecodecamp.org/certification/dsDev/javascript-algorithms-and-data-structures-v8',
		skills:
			'JavaScript · HTML5 · HTML · Cascading Style Sheets (CSS) · Git · GitHub · Front-End Development',
		// image: 'placeholder',
	},
	{
		title: 'Responsive Web Design',
		issueDate: 'Oct 2024',
		issuer: 'FreeCodeCamp',
		link: 'https://www.freecodecamp.org/certification/dsDev/responsive-web-design',
		skills:
			'HTML5 · Cascading Style Sheets (CSS) · JavaScript · Front-end Development · Git · GitHub',
		// image: 'placeholder',
	},
	// {
	// 	title: 'Google Ads Shopping Certification',
	// 	issueDate: 'Sep 2019',
	// 	issuer: 'Google Ads',
	// 	link: 'https://ads.google.com/intl/en_us/home/resources/certifications/',
	// 	skills: 'Google Adwords',
	// 	// image: 'placeholder',
	// },
	// {
	// 	title: 'Google Ads Video Certification',
	// 	issueDate: 'Sep 2019',
	// 	issuer: 'Google Ads',
	// 	link: 'https://ads.google.com/intl/en_us/home/resources/certifications/',
	// 	skills: 'Google Adwords',
	// 	// image: 'placeholder',
	// },
	// {
	// 	title: 'Google Ads Mobile Certification',
	// 	issueDate: 'Nov 2018',
	// 	issuer: 'Google Ads',
	// 	link: 'https://ads.google.com/intl/en_us/home/resources/certifications/',
	// 	skills: 'Google Adwords',
	// 	// image: 'placeholder',
	// },
	// {
	// 	title: 'Google Ads Display Certification',
	// 	issueDate: 'Oct 2018',
	// 	issuer: 'Google Ads',
	// 	link: 'https://ads.google.com/intl/en_us/home/resources/certifications/',
	// 	skills: 'Google Adwords',
	// 	// image: 'placeholder',
	// },
	// {
	// 	title: 'Google Ads Search Certification',
	// 	issueDate: 'Oct 2018',
	// 	issuer: 'Google Ads',
	// 	link: 'https://ads.google.com/intl/en_us/home/resources/certifications/',
	// 	skills: 'Google Adwords',
	// 	// image: 'placeholder',
	// },
	{
		title: 'Google Analytics Individual Qualification',
		issueDate: 'Oct 2018',
		issuer: 'Google Ads',
		link: 'https://ads.google.com/intl/en_us/home/resources/certifications/',
		skills: 'Google Adwords',
		// image: 'placeholder',
	},
];

function Certificates() {
	return (
		<div
			className='wp-block-columns is-layout-flex wp-container-core-columns-layout-13 wp-block-columns-is-layout-flex certifications-section'
			id='certifications'
		>
			<div
				className='wp-block-column is-layout-flow wp-block-column-is-layout-flow certifications-section'
				style={{ flexBasis: '100%' }}
			>
				<div className='certificates__section'>
					<h2 className='certificates__section-title'>
						Certifications
					</h2>
					<ul className='certificates-list'>
						{certificates.map((certificate, index) => (
							<li key={index} className='certificate-item'>
								{/* <img
							className='certificate-logo'
							src={certificate.image}
							alt={`${certificate.title} logo`}
						/> */}
								<h3 className='certificate-title'>
									{certificate.title}
								</h3>
								<p className='certificate-info'>
									Issuer: {certificate.issuer}
								</p>
								<p className='certificate-info'>
									Issued: {certificate.issueDate}
								</p>
								<p className='certificate-skills'>
									Skills: {certificate.skills}
								</p>
								<a
									className='certificate-link'
									href={certificate.link}
									target='_blank'
									rel='noopener noreferrer'
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
