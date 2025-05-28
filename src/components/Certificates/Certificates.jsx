import React from 'react';
import './styles/Certificates.css';
import certifications from '../utils/certifications.json';

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
				<div className='certificates__section padding-bottom-50'>
					<h2 className='certificates__section-title'>
						Certifications
					</h2>
					<ul className='certificates-list'>
						{certifications.map((certificate, index) => (
							<li key={index} className='certificate-item'>
								<img
									className='certificate-img'
									src={certificate.image}
									alt={`${certificate.title} logo`}
								/>
								<h3 className='certificate-title'>
									{certificate.title}
								</h3>
								<p className='certificate-info'>
									<strong>Issuer: </strong>
									{certificate.issuer}
								</p>
								<p className='certificate-info'>
									<strong>Issued: </strong>
									{certificate.issueDate}
								</p>
								<p className='certificate-skills'>
									<strong>Skills: </strong>
									{certificate.skills}
								</p>
								<div>
									<a
										className='certificate-link'
										href={certificate.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										About
									</a>{' '}
									|{' '}
									<a
										className='certificate-link'
										href={certificate.cert_link}
										target='_blank'
										rel='noopener noreferrer'
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
