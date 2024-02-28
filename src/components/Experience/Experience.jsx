import React from 'react';
import './styles/Experience.css';

function Experience(props) {
	const { laptopCodeImg, laptopImg } = props;
	return (
		<div
			className='wp-block-columns is-layout-flex wp-container-core-columns-layout-29 wp-block-columns-is-layout-flex experience-section'
			id='experience'
		>
			<div
				className='wp-block-column is-layout-flow wp-block-column-is-layout-flow experience-section'
				style={{ flexBasis: '100%' }}
			>
				<div
					className='wp-block-group alignfull has-background-color has-primary-background-color has-text-color has-background has-link-color wp-elements-356e0a237d74e4f9274a5854c67a6ccd has-global-padding is-layout-constrained wp-container-core-group-layout-38 wp-block-group-is-layout-constrained experience-section'
					style={{
						paddingTop: 'var(--wp--preset--spacing--80)',
						paddingRight: 'var(--wp--preset--spacing--50)',
						paddingBottom: 'var(--wp--preset--spacing--80)',
						paddingLeft: 'var(--wp--preset--spacing--50)',
					}}
				>
					<h2 className='wp-block-heading alignwide has-background-color has-text-color has-link-color wp-elements-89746bfd4cdbe31327cfb73623836f05 experience-section-header'>
						Professional Experience
					</h2>

					<div className='wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-28 wp-block-columns-is-layout-flex'>
						<div
							className='wp-block-column is-layout-flow wp-block-column-is-layout-flow'
							style={{ flexBasis: '100%' }}
						>
							<div
								className='wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained'
								style={{
									marginTop: '0px',
									marginBottom: '0px',
									paddingTop: '7vw',
									paddingBottom: '7vw',
								}}
							>
								<div className='wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-22 wp-block-columns-is-layout-flex'>
									<div
										className='wp-block-column is-layout-flow wp-block-column-is-layout-flow'
										style={{ flexBasis: '66.66%' }}
									>
										<div className='wp-block-group is-vertical is-layout-flex wp-container-core-group-layout-34 wp-block-group-is-layout-flex'>
											<div className='wp-block-group has-global-padding is-layout-constrained wp-container-core-group-layout-33 wp-block-group-is-layout-constrained experience-section-text'>
												<h4 className='wp-block-heading has-background-color has-text-color has-link-color wp-elements-f96d0438a90b2c43fcd196caf0a59a8f'>
													<strong className='experience-section-text'>
														Frontend Developer
													</strong>
												</h4>

												<ul>
													<li>
														Architects tickets,
														troubleshoots applications,
														engineers components, and leads
														impactful projects—creating
														login pages, implementing
														account emails, and introducing
														cross-brand features for 30+
														major brands like WebMD,
														Demandforce, and Sesame. Reaches
														a user base exceeding 10,000
														across multiple projects.
													</li>

													<li>
														Deploys visually appealing
														website user interfaces using
														HTML, CSS, and TypeScript for
														10+ brands at a time, including
														patient-facing forms for
														doctors, dentists, and
														veterinarians. Notably, for the
														online forms app serving
														healthcare professionals,
														integrated 30+ features, and
														resolved 100s of bugs.
													</li>

													<li>
														Upgrades UI libraries, including
														a search-enabled
														multiselect-dropdown for patient
														forms, resulting in a 100%
														improvement in navigation and
														increased efficiency of forms.
													</li>

													<li>
														Streamlines user interactions by
														incorporating RESTful APIs into
														the messaging app, delivering
														20+ personalized account
														details. This optimization
														resulted in increased user
														satisfaction and operational
														efficiency.
													</li>

													<li>
														Resolves 5-30 issues per sprint
														on local, staging, and master
														branches and makes corrections
														using React and Angular
														frameworks, and often Python,
														PHP, and FTL files.
													</li>

													<li>
														Tackles critical issues,
														resolving over 15+ showstoppers
														during my tenure. Notably,
														executed a rapid update of the
														Hopkit package just minutes
														before a release, minimizing
														workflow disruptions and
														ensuring seamless project
														delivery.
													</li>

													<li>
														Coordinates with three
														cross-functional teams,
														streamlining frontend, backend,
														design, and project management
														efforts. Achievements include
														developing a user-friendly reset
														password page and crafting
														tailored email solutions, all
														while efficiently managing
														unrelated tasks like updating
														bill payments.
													</li>

													<li>
														Conducts knowledge transfers in
														paired and independent
														programming sessions with
														developers and senior admin.
													</li>

													<li>
														Led knowledge transfer on 15+
														repositories, fostering a
														self-sufficient team with
														paired/independent programming
														for enhanced workflow. Resolved
														100s of tickets, played a key
														role in updating dozens of
														release tickets, ensuring
														seamless project management and
														boosting team skills.
													</li>

													<li>
														Refining team members' skills by
														guiding developers in best code
														review practices across 10+
														repositories, preparing dozens
														of presentations through
														one-on-one sessions with QA and
														developers, and leading efforts
														to enhance repository practices
														in an AGILE environment.
													</li>
													<li>
														Delivers impactful presentations
														at weekly stand-ups, sprint
														sessions, and demos, engaging a
														diverse audience of over 90
														stakeholders, fostering
														effective communication and
														collaboration across the team.
													</li>
												</ul>
											</div>
										</div>
									</div>

									<div
										className='wp-block-column has-global-padding is-layout-constrained wp-block-column-is-layout-constrained experience-section-text'
										style={{ flexBasis: '33.33%' }}
									>
										<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-18 wp-block-columns-is-layout-flex'>
											<div className='wp-block-column is-layout-flow wp-container-core-column-layout-26 wp-block-column-is-layout-flow'>
												<figure className='wp-block-image size-full has-custom-border is-style-rounded'>
													<a
														href='https://www.internetbrands.com/our-brands/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<img
															width='6082'
															height='4055'
															src={laptopCodeImg.url}
															alt={laptopCodeImg.name}
															className='wp-image-222'
															style={{
																borderRadius: '10px',
															}}
															srcSet={laptopCodeImg.url}
															sizes='(max-width: 6082px) 100vw, 6082px'
														/>
													</a>
												</figure>
											</div>
										</div>

										<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-19 wp-block-columns-is-layout-flex experience-section-text'>
											<div className='wp-block-column is-layout-flow wp-container-core-column-layout-27 wp-block-column-is-layout-flow'>
												<p
													style={{
														fontSize: '0.8rem',
														fontStyle: 'normal',
														fontWeight: 700,
														lineHeight: 1.6,
														textTransform: 'uppercase',
													}}
												>
													Company
												</p>

												<a
													href='https://www.internetbrands.com/'
													target='_blank'
													rel='noopener noreferrer'
													className='no-underline'
												>
													<p
														className='has-small-font-size experience-section-text'
														style={{ lineHeight: 1.6 }}
													>
														Internet Brands
													</p>
												</a>
											</div>
										</div>

										<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-20 wp-block-columns-is-layout-flex'>
											<div className='wp-block-column is-layout-flow wp-container-core-column-layout-28 wp-block-column-is-layout-flow'>
												<p
													style={{
														fontSize: '0.8rem',
														fontStyle: 'normal',
														fontWeight: 700,
														lineHeight: 1.6,
														textTransform: 'uppercase',
													}}
												>
													Location
												</p>

												<p className='block-text'>
													<em>El Segundo, CA</em>
												</p>
											</div>
										</div>

										<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-21 wp-block-columns-is-layout-flex'>
											<div className='wp-block-column is-layout-flow wp-container-core-column-layout-29 wp-block-column-is-layout-flow'>
												<p
													style={{
														fontSize: '0.8rem',
														fontStyle: 'normal',
														fontWeight: 700,
														lineHeight: 1.6,
														textTransform: 'uppercase',
													}}
												>
													Date
												</p>

												<p
													className='has-small-font-size'
													style={{ lineHeight: '1.6' }}
												>
													January 2021 – Present
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className='wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-27 wp-block-columns-is-layout-flex experience-section-text'>
									<div
										className='wp-block-column is-layout-flow wp-block-column-is-layout-flow'
										style={{ flexBasis: '66.66%' }}
									>
										<div className='wp-block-group is-vertical is-layout-flex wp-container-core-group-layout-36 wp-block-group-is-layout-flex'>
											<div className='wp-block-group has-global-padding is-layout-constrained wp-container-core-group-layout-35 wp-block-group-is-layout-constrained'>
												<h4 className='wp-block-heading has-background-color has-text-color has-link-color wp-elements-262a603851f219d49b708d10f04d4aab'>
													<strong>
														<strong className='experience-section-text'>
															Frontend Web Developer
														</strong>
													</strong>
												</h4>

												<ul>
													<li>
														Integrated geolocation API
														updates, garnering positive
														feedback for enhancing map and
														blockchain functionality.
														Introduced an API enabling users
														to plot 100s of custom data
														points.
													</li>

													<li>
														Enhanced user accessibility and
														expanded consumer reach by
														constructing intricate front-end
														applications with HTML, CSS, and
														JavaScript, incorporating media
														queries for seamless display
														across three devices: mobile,
														tablet, and desktop.
													</li>

													<li>
														Incorporated Bootstrap and
														Reactstrap, standardizing
														visuals across 10+ components,
														laying the foundation for
														improved UI responsiveness and
														visual consistency via React
														state property manipulation.
													</li>

													<li>
														Boosted reliability with
														object-oriented design and
														test-driven development,
														improving reusability in 10+
														components for blockchain web
														apps, streamlining feature
														deployment and cutting
														post-launch issues.
													</li>
												</ul>
											</div>
										</div>
									</div>

									<div
										className='wp-block-column has-global-padding is-layout-constrained wp-block-column-is-layout-constrained'
										style={{ flexBasis: '33.33%' }}
									>
										<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-23 wp-block-columns-is-layout-flex experience-section-text'>
											<div className='wp-block-column is-layout-flow wp-container-core-column-layout-32 wp-block-column-is-layout-flow'>
												<figure className='wp-block-image size-full has-custom-border is-style-rounded experience-section-text'>
													<a
														href='https://www.superworldapp.com/about-us'
														target='_blank'
														rel='noopener noreferrer'
													>
														<img
															width='6000'
															height='4000'
															src={laptopImg.url}
															alt={laptopImg.name}
															className='wp-image-223'
															style={{
																borderRadius: '10px',
															}}
															srcSet={laptopImg.url}
															sizes='(max-width: 6000px) 100vw, 6000px'
														/>
													</a>
												</figure>
											</div>
										</div>

										<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-24 wp-block-columns-is-layout-flex'>
											<div className='wp-block-column is-layout-flow wp-container-core-column-layout-33 wp-block-column-is-layout-flow'>
												<p
													style={{
														fontSize: '0.8rem',
														fontStyle: 'normal',
														fontWeight: 700,
														lineHeight: 1.6,
														textTransform: 'uppercase',
													}}
												>
													Company
												</p>

												<a
													href='https://www.superworldapp.com/'
													target='_blank'
													rel='noopener noreferrer'
													className='no-underline'
												>
													<p
														className='has-small-font-size experience-section-text'
														style={{ lineHeight: 1.6 }}
													>
														SuperWorld
													</p>
												</a>
											</div>
										</div>

										<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-25 wp-block-columns-is-layout-flex'>
											<div className='wp-block-column is-layout-flow wp-container-core-column-layout-34 wp-block-column-is-layout-flow'>
												<p
													style={{
														fontSize: '0.8rem',
														fontStyle: 'normal',
														fontWeight: 700,
														lineHeight: 1.6,
														textTransform: 'uppercase',
													}}
												>
													Location
												</p>

												<p className='block-text'>
													<em>
														<em>Los Angeles, CA</em>
													</em>
												</p>
											</div>
										</div>

										<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-26 wp-block-columns-is-layout-flex'>
											<div className='wp-block-column is-layout-flow wp-container-core-column-layout-35 wp-block-column-is-layout-flow'>
												<p
													style={{
														fontSize: '0.8rem',
														fontStyle: 'normal',
														fontWeight: 700,
														lineHeight: 1.6,
														textTransform: 'uppercase',
													}}
												>
													Date
												</p>

												<p
													className='has-small-font-size'
													style={{ lineHeight: 1.6 }}
												>
													September 2020 – January 2021
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
