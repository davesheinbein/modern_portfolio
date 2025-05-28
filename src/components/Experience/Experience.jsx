import React from 'react';
import './styles/Experience.css';

function Experience(props) {
	const {
		laptopCodeImg,
		laptopImg,
		marketingImg,
		assistantImg,
	} = props;
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
														Led the development of
														mobile-first UI components and
														delivered user-facing features
														using React, Hooks, TypeScript,
														Redux, and more. Streamlined
														performance across 50+ brand
														projects by applying
														code-splitting, memoization, and
														advanced state management
														reducing load times by 50%.
													</li>
													<li>
														Refactored legacy systems into
														modular, maintainable React
														components using React Hooks and
														Context. Modernized real-time
														data workflows and CRUD
														operations by improving RESTful
														API consumption patterns,
														boosting data synchronization,
														user responsiveness, and
														reliability.
													</li>
													<li>
														Integrated and optimized
														multiple API architectures
														(RESTful, GraphQL, Django,
														Node.js/Express, Firebase,
														FastAPI) in React applications.
														Developed workflows for complex
														account management and real-time
														data experiences, ensuring
														seamless, responsive UI
														interactions and enhancing user
														experiences across health,
														legal, automotive, and travel
														platforms.
													</li>
													<li>
														Enhanced authentication systems,
														by designing UI workflows,
														modular login bundles with React
														and JavaScript, integrating
														OAuth for secure user flows.
														Automated license and insurance
														verifications, reducing
														onboarding time by 75%.
													</li>
													<li>
														Collaborated with backend
														engineering teams to optimize
														backend-for-frontend services
														and RESTful API integrations.
														Led initiatives to resolve API
														performance bottlenecks, enhance
														data flow reliability, and
														improve frontend load times and
														responsiveness for 25+
														repositories in high-traffic
														environments.
													</li>
													<li>
														Led cross-functional initiatives
														by collaborating with frontend,
														backend, product, and QA teams
														to translate complex business
														and technical requirements into
														web experiences for over 50
														brands, resulting in improved
														API integration strategies and
														enhanced data handling,
														resolving more than 25 Jira
														issues per sprint.
													</li>
													<li>
														Collaborated in a team
														environment, managed multiple
														concurrent projects, resolved
														high-priority bugs, optimized
														user experience, and presented
														product demos to stakeholders.
														Strengthened relationships with
														product, backend, and QA teams
														to ensure seamless project
														delivery.
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
															Software Engineer
														</strong>
													</strong>
												</h4>

												<ul>
													<li>
														Engineered responsive, dynamic
														front-end applications with
														HTML, CSS, and JavaScript,
														optimizing user accessibility
														across all devices. Leveraged
														media queries to ensure
														consistent display and
														functionality, resulting in a
														20% reduction in page load time.
													</li>
													<li>
														Standardized 10+ UI components
														using JavaScript, Bootstrap, and
														Reactstrap, ensuring visual
														consistency and responsiveness.
														Developed internal tools to
														streamline workflows and resolve
														real-time software issues for
														production teams.
													</li>
													<li>
														Integrated geolocation APIs
														using JavaScript and React to
														connect multiple datasets,
														allowing users to plot custom
														data points on interactive maps.
														Enhanced map and blockchain
														functionality with improved
														real-time data accuracy and
														interactivity.
													</li>
													<li>
														Upgraded the reliability and
														maintainability of blockchain
														web apps by implementing
														Object-Oriented Design
														principles and Test-Driven
														Development with Jest, improving
														code reusability, and reducing
														deployment time by streamlining
														testing, debugging, and feature
														deployment.
													</li>
													<li>
														Conducted thorough code reviews
														on pull requests to ensure code
														quality, maintainability, and
														adherence to best practices,
														resulting in a significant
														reduction of post-deployment
														defects by 30%, which enhanced
														system reliability and reduced
														rework time.
													</li>
													<li>
														Built internal debugging and
														automation tools to accelerate
														production issue resolution,
														reducing troubleshooting time
														for production teams and
														improving operational
														efficiency.
													</li>
													<li>
														Designed and optimized
														Django-based APIs for blockchain
														data visualization, implementing
														comprehensive CRUD functionality
														for transaction tracking and
														historical data storage.
														Improved PostgreSQL query
														performance by structuring
														efficient indexes and batch
														query execution.
													</li>
													<li>
														Constructed Django models and
														serializers for handling
														blockchain transactions,
														ensuring data integrity and
														efficiency.
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

								{/* Digital Niche Agency Experience */}
								<div className='wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-27 wp-block-columns-is-layout-flex experience-section-text'>
									<div
										className='wp-block-column is-layout-flow wp-block-column-is-layout-flow'
										style={{ flexBasis: '66.66%' }}
									>
										<div className='wp-block-group is-vertical is-layout-flex'>
											<div className='wp-block-group has-global-padding is-layout-constrained experience-section-text'>
												<h4 className='wp-block-heading has-background-color has-text-color has-link-color'>
													<strong className='experience-section-text'>
														Digital Marketing Specialist
													</strong>
												</h4>
												<ul>
													<li>
														Developed responsive websites
														and landing pages using HTML,
														CSS, and JavaScript, optimizing
														performance and increasing
														client conversion rates through
														SEO analysis and KPI tracking.
													</li>
													<li>
														Troubleshot and resolved complex
														website integration issues,
														ensuring seamless third-party
														tool compatibility and
														leveraging Google Analytics to
														improve site stability and user
														engagement.
													</li>
													<li>
														Collaborated with
														cross-functional teams to
														implement A/B testing on web
														components, using insights from
														user behavior data and
														conversion metrics to
														iteratively improve UI/UX and
														maximize customer retention.
													</li>
													<li>
														Automated repetitive digital
														marketing workflows using
														scripts and no-code tools,
														improving operational efficiency
														and allowing more time to focus
														on UX enhancements and strategic
														planning.
													</li>
													<li>
														Implemented responsive design
														principles and optimized
														front-end code to improve mobile
														user experience and reduce page
														load times.
													</li>
													<li>
														Collaborated with designers and
														marketers to translate
														wireframes and mockups into
														interactive web experiences
														using HTML, CSS, and JavaScript.
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
														href='https://www.digitalnicheagency.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<img
															width='6000'
															height='4000'
															src={marketingImg.url}
															alt={marketingImg.name}
															className='wp-image-223'
															style={{
																borderRadius: '10px',
															}}
															srcSet={marketingImg.url}
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
												<p
													className='has-small-font-size experience-section-text'
													style={{ lineHeight: 1.6 }}
												>
													Digital Niche Agency
												</p>
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
													<em>Los Angeles, CA</em>
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
													November 2018 – May 2020
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Deranged Penguin Productions | Vertical Networks | DuckPunk Productions, Inc. Experience */}
								<div className='wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-27 wp-block-columns-is-layout-flex experience-section-text'>
									<div
										className='wp-block-column is-layout-flow wp-block-column-is-layout-flow'
										style={{ flexBasis: '66.66%' }}
									>
										<div className='wp-block-group is-vertical is-layout-flex'>
											<div className='wp-block-group has-global-padding is-layout-constrained experience-section-text'>
												<h4 className='wp-block-heading has-background-color has-text-color has-link-color'>
													<strong className='experience-section-text'>
														Executive Assistant | Production
														Assistant
													</strong>
												</h4>
												<ul>
													<li>
														Supported digital production
														workflows, troubleshooting
														technical issues, optimizing
														on-set communication, enhancing
														brand identity through web and
														logo design, and assisting with
														logistics and community
														relations.
													</li>
													<li>
														Developed and maintained
														internal tools using
														spreadsheets, scripts, and
														lightweight web apps to
														streamline scheduling, asset
														management, and team
														coordination.
													</li>
													<li>
														Collaborated with
														cross-functional teams to
														digitize production assets and
														improve file-sharing workflows,
														implementing cloud-based
														solutions to enhance
														accessibility and version
														control.
													</li>
													<li>
														Created visual prototypes and
														wireframes for websites and
														branded content, contributing to
														the user interface design
														process and aligning production
														goals with digital deliverables.
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
														href='https://www.derangedpenguinproductions.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														<img
															width='6000'
															height='4000'
															src={assistantImg.url}
															alt={assistantImg.name}
															className='wp-image-223'
															style={{
																borderRadius: '10px',
															}}
															srcSet={assistantImg.url}
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
												<p
													className='has-small-font-size experience-section-text'
													style={{ lineHeight: 1.6 }}
												>
													Deranged Penguin Productions |
													Vertical Networks | DuckPunk
													Productions, Inc.
												</p>
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
													<em>Los Angeles, CA</em>
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
													May 2016 – April 2018
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
