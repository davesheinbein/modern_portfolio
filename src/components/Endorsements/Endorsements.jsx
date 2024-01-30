import React from 'react';
import './styles/Endorsements.css';

function Endorsements() {
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
					<h2 className='wp-block-heading alignwide has-background-color has-text-color has-large-font-size endorsements-section-header'>
						What people are saying
					</h2>

					<div className='wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-31 wp-block-columns-is-layout-flex'>
						<div className='wp-block-column is-layout-flow wp-container-core-column-layout-40 wp-block-column-is-layout-flow'>
							<p className='has-background-color has-text-color has-link-color wp-elements-748c6fdb72b926c49d219f0d66ab87b2 endorsements-section-text'>
								“David was an absolute pleasure to work with
								throughout the planning and execution of the
								app we worked on. He has a very keen eye for
								creativity and design and played a crucial
								role in developing our overall look for our
								application and really brought it together.
								I continue to look to him for guidance on
								some projects I currently work on as he
								continues to elevate his skills.”
							</p>

							<p className='has-vivid-red-color has-text-color has-link-color wp-elements-47c4abfa708ff59b18e5640ba4837fce endorsements-section-accent'>
								—<strong> Jonathan Lane</strong>
							</p>
						</div>

						<div className='wp-block-column is-layout-flow wp-container-core-column-layout-41 wp-block-column-is-layout-flow'>
							<p className='has-background-color has-text-color has-link-color wp-elements-ce4b1369c8d34991e16b8ca954e2cf20 endorsements-section-text'>
								“David was an extremely thorough, talented
								and hard-working Software Engineering
								student. He will make an exceptional
								addition to any company!”
							</p>

							<p className='has-vivid-red-color has-text-color has-link-color wp-elements-f0f396bd3d0d7df8a17d4f05acef505f endorsements-section-accent'>
								— <strong>Jim Clark</strong>
							</p>
						</div>
					</div>

					<div className='wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-31 wp-block-columns-is-layout-flex'>
						<div className='wp-block-column is-layout-flow wp-container-core-column-layout-40 wp-block-column-is-layout-flow'>
							<p className='has-background-color has-text-color has-link-color wp-elements-748c6fdb72b926c49d219f0d66ab87b2 endorsements-section-text'>
								"I highly recommend David Sheinbein as a
								top-notch full-stack developer. Having
								collaborated closely on projects, I've seen
								his impressive technical skills, notably
								skilled in JavaScript and DOM manipulation.
								David tackles challenges with enthusiasm,
								providing reliable solutions and bringing a
								friendly, communicative, and personable
								approach to the team. His eye for styling,
								particularly with SCSS, adds a creative
								touch to his work. For any team seeking a
								results-driven and personable full-stack
								developer, David is the ideal choice."
							</p>

							<p className='has-vivid-red-color has-text-color has-link-color wp-elements-47c4abfa708ff59b18e5640ba4837fce endorsements-section-accent'>
								—<strong> Jake Liebow</strong>
							</p>
						</div>

						{/* <div className='wp-block-column is-layout-flow wp-container-core-column-layout-41 wp-block-column-is-layout-flow'>
							<p className='has-background-color has-text-color has-link-color wp-elements-ce4b1369c8d34991e16b8ca954e2cf20 endorsements-section-text'>
								“Good Frontend Engineer and good at
								JavaScript and React”
							</p>

							<p className='has-vivid-red-color has-text-color has-link-color wp-elements-f0f396bd3d0d7df8a17d4f05acef505f endorsements-section-accent'>
								— <strong>Jeremy Guan</strong>
							</p>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Endorsements;
