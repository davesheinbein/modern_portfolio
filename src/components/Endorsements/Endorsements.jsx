import React, { useMemo } from 'react';
import './styles/Endorsements.css';
import { getShuffledEndorsements } from '../utils/utils';

function Endorsements({}) {
	const endorsements = useMemo(
		() => getShuffledEndorsements(),
		[]
	);

	// Duplicate the list for seamless looping
	const allEndorsements = [
		...endorsements,
		...endorsements,
	];

	return (
		<div
			className='wp-block-columns is-layout-flex wp-container-core-columns-layout-33 wp-block-columns-is-layout-flex endorsements endorsements-section'
			id='endorsements'
		>
			<div
				className='wp-block-column is-layout-flow wp-block-column-is-layout-flow endorsements-section'
				style={{ flexBasis: '100%' }}
			>
				<div
					className='wp-block-group alignfull has-foreground-color has-primary-background-color has-text-color has-background has-global-padding is-layout-constrained wp-container-core-group-layout-43 wp-block-group-is-layout-constrained endorsements-section'
					style={{
						marginTop: '0px',
						marginBottom: '0px',
						paddingTop: 'var(--wp--preset--spacing--80)',
						paddingRight: 'var(--wp--preset--spacing--50)',
						paddingBottom: 'var(--wp--preset--spacing--80)',
						paddingLeft: 'var(--wp--preset--spacing--50)',
					}}
				>
					<h2
						className='wp-block-heading alignwide has-background-color has-text-color has-large-font-size endorsements-section-header'
						id='recommendations'
					>
						What people are saying
					</h2>
					<div className='endorsements-list alignwide wp-container-core-columns-layout-31 wp-block-columns-is-layout-flex'>
						<div className='endorsements-list-inner'>
							{allEndorsements.map((endorsement, idx) => (
								<div className='endorsement-item' key={idx}>
									<p className='has-background-color has-text-color has-link-color endorsements-section-text'>
										{endorsement.text
											.split('\n')
											.map((line, i) => (
												<React.Fragment key={i}>
													{line}
													<br />
													<br />
												</React.Fragment>
											))}
									</p>
									<a
										href={endorsement.url}
										className='has-vivid-red-color has-text-color has-link-color endorsements-section-accent no-underline'
									>
										— <strong>{endorsement.author}</strong>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Endorsements;
