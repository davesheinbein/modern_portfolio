import React, { Component } from 'react';
import './styles/Projects.css';

export default class Projects extends Component {
	render(props) {
		const {
			funfunctionsImg,
			fakeTwitchImg,
			fakeflixImg,
			frushleyImg,
			fakeamazonImg,
			typescriptquizImg,
			fakeSpotifyImg,
			covidtrackerImg,
			imessageImg,
			choroplethMapImg,
			treemapImg,
			temperatureHeatMapImg,
			scatterplotImg,
		} = this.props;

		const funfunctions = funfunctionsImg || null;
		const covidtracker = covidtrackerImg || null;
		const fakeTwitch = fakeTwitchImg || null;
		const fakeflix = fakeflixImg || null;
		const frushley = frushleyImg || null;
		const fakeamazon = fakeamazonImg || null;
		const imessage = imessageImg || null;
		const typescriptquiz = typescriptquizImg || null;
		const fakeSpotify = fakeSpotifyImg || null;
		const choroplethMap = choroplethMapImg || null;
		const treemap = treemapImg || null;
		const temperatureHeatMap =
			temperatureHeatMapImg || null;
		const scatterplot = scatterplotImg || null;

		return (
			<div
				className='wp-block-columns is-layout-flex wp-container-core-columns-layout-13 wp-block-columns-is-layout-flex projects-section'
				id='projects'
			>
				<div
					className='wp-block-column is-layout-flow wp-block-column-is-layout-flow projects-section'
					style={{ flexBasis: '100%' }}
				>
					<div
						className='wp-block-group alignfull has-background-background-color has-background has-global-padding is-layout-constrained wp-container-core-group-layout-27 wp-block-group-is-layout-constrained projects-section'
						style={{
							paddingTop: 'var(--wp--preset--spacing--80)',
							paddingRight:
								'var(--wp--preset--spacing--50)',
							paddingBottom:
								'var(--wp--preset--spacing--80)',
							paddingLeft: 'var(--wp--preset--spacing--50)',
						}}
					>
						<h2 className='wp-block-heading alignwide has-background-color has-text-color has-link-color wp-elements-2d788679b569f0cd0b72f8803e025267 projects-section-header'>
							Code Creations
						</h2>

						<div className='wp-block-group alignwide has-link-color wp-elements-0e3de18f5304b7e1fc0825fce2a2af5b is-layout-flow wp-container-core-group-layout-26 wp-block-group-is-layout-flow'>
							<div className='wp-block-group alignwide is-vertical is-layout-flex wp-container-core-group-layout-25 wp-block-group-is-layout-flex'>
								<div className='wp-block-group alignwide is-vertical is-layout-flex wp-container-core-group-layout-14 wp-block-group-is-layout-flex'>
									<h3 className='wp-block-heading alignwide projects-section-accent'>
										My Favorite Project{' '}
										<i className='fa fa-star fa-star__animated'></i>
									</h3>

									<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-11 wp-block-columns-is-layout-flex'>
										<div
											className='wp-block-column is-layout-flow wp-block-column-is-layout-flow projects-section-text'
											style={{
												flexBasis: '100%',
											}}
										>
											<div className='wp-block-group is-vertical is-content-justification-center is-layout-flex wp-container-core-group-layout-12 wp-block-group-is-layout-flex'>
												<figure className='wp-block-image size-large has-custom-border is-style-rounded'>
													<a
														target='_blank'
														rel='noopener noreferrer'
														href='https://fun-functionalities.web.app/'
													>
														<img
															width='1789'
															height='1007'
															src={funfunctions.url}
															alt={funfunctions.name}
															className='wp-image-193'
															style={{
																borderRadius: '10px',
															}}
														/>
													</a>
												</figure>
											</div>

											<div
												className='wp-block-group is-vertical is-layout-flex wp-container-core-group-layout-13 wp-block-group-is-layout-flex'
												style={{
													color: '#11181f',
													borderBottomColor:
														'var(--wp--preset--color--tertiary)',
													borderBottomStyle: 'solid',
													borderBottomWidth: '1px',
													paddingBottom:
														'var(--wp--preset--spacing--50)',
												}}
											>
												<h3 className='wp-block-heading has-medium-font-size'>
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://fun-functionalities.web.app/'
													>
														Fun Functionalities
													</a>
												</h3>

												<p className='projects-section-text'>
													This independent project holds a
													special place in my heart, because
													it gave me the creative freedom to
													conceive a unique website concept.
													It not only showcases my
													collaborative skills, involving
													both independent and paired
													programming efforts with a
													partner, but also served as a
													significant learning opportunity.
													I integrated a plethora of new
													libraries, expanding my toolkit
													and deepening my understanding of
													coding concepts on both the
													frontend and backend. The result
													is a visually appealing and
													interactive platform for users to
													enjoy.
												</p>

												<p className='projects-section-text'>
													Navigating through the site is
													made intuitive – users can access
													various pages by clicking on the
													half circle in any of the four
													corners. The custom-built chatbot,
													offering guided responses, adds an
													extra layer of engagement. I
													initiated this project during my
													transition post-schooling, and
													looking back, it stands as a
													testament to my growth. It not
													only reflects how far I’ve come
													but also hints at the exciting
													potential for future advancements
													in my coding journey.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML5, CSS, Sass, JavaScript,
													React, Framer, Styled-Components,
													React-spring, React-Chatbot-Kit,
													React-Motion, D3, Mongoose, Cors,
													Node.js, Heroku, Firebase, Git
												</p>

												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://fun-functionalities.web.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>
													<p className='rows__item'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/fun-functionalities'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>

									<h3 className='wp-block-heading alignwide projects-section-header'>
										More Projects
									</h3>
								</div>

								<div className='wp-block-columns is-layout-flex wp-container-core-columns-layout-12 wp-block-columns-is-layout-flex'>
									<div className='wp-block-column is-layout-flow wp-block-column-is-layout-flow'>
										<figure className='wp-block-image size-large has-custom-border margin-bottom-half is-style-default'>
											<a
												target='_blank'
												rel='noopener noreferrer'
												href='https://github.com/davesheinbein/covid-tracker'
											>
												<img
													width='800'
													height='500'
													src={covidtracker.url}
													srcset={covidtracker.url}
													alt={covidtracker.name}
													className='wp-image-164'
													style={{
														borderRadius: '10px',
														aspectRatio: '16/9',
														objectFit: 'cover',
													}}
												/>
											</a>
										</figure>

										<div
											className='wp-block-group is-layout-flow wp-container-core-group-layout-19 wp-block-group-is-layout-flow'
											style={{
												marginTop: '15px',
												color: '#11181f',
											}}
										>
											<div className='wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained'>
												<h3 className='wp-block-heading has-medium-font-size'>
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://covid-track-er.web.app/'
													>
														Covid-19 Tracker
													</a>
												</h3>

												<p className='projects-section-text'>
													An application that tracks the
													global Covid-19 pandemic
													statistics created during the
													height of the pandemic. The
													platform offers real-time data on
													a map, allowing users to navigate
													between worldwide and USA-based
													maps and filter information for
													specific months or overall trends.
													Although the API is no longer
													being updated, the application
													retains its data and
													interactivity, providing valuable
													insights into historical Covid-19
													statistics in both light and dark
													modes.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML, CSS, SCSS, JavaScript,
													React, chart.js, leaflet, numeral,
													Node.js, Firebase, Git
												</p>
												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://covid-track-er.web.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>

													<p className='projects-section-text'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/covid-tracker'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
												{/* <br /> */}
											</div>

											<figure className='wp-block-image size-large has-custom-border margin-bottom-half is-style-default'>
												<a
													target='_blank'
													rel='noopener noreferrer'
													href='https://github.com/davesheinbein/spotify-clone-ds'
												>
													<img
														width='1024'
														height='557'
														src={fakeSpotify.url}
														alt={fakeSpotify.name}
														className='wp-image-248'
														style={{
															borderRadius: '10px',
															aspectRatio: '16/9',
															objectFit: 'cover',
														}}
														srcSet={fakeSpotify.url}
														sizes='(max-width: 1024px) 100vw, 1024px'
													/>
												</a>
											</figure>

											<div
												className='wp-block-group has-global-padding is-layout-constrained wp-container-core-group-layout-16 wp-block-group-is-layout-constrained'
												style={{
													color: '#11181f',
													borderBottomColor:
														'var(--wp--preset--color--tertiary)',
													borderBottomStyle: 'solid',
													borderBottomWidth: '1px',
													paddingBottom:
														'var(--wp--preset--spacing--50)',
												}}
											>
												<h3 className='wp-block-heading has-medium-font-size'>
													<br />
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://spotify-clone-ds.web.app/'
													>
														Fake Spotify (Mock UI)
													</a>
												</h3>

												<p className='projects-section-text'>
													Developed a Spotify Clone
													front-end UI using React, Spotify
													API, and SASS, hosted on Firebase.
													The application offers limited
													control functionality; however,
													users can access features like
													Pause/Play and the Discover Weekly
													playlist by opening Spotify on
													another device.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML5, CSS, Sass, JavaScript,
													React with Context API, Node.js,
													Git, Github, Firebase
												</p>

												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://spotify-clone-ds.web.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>

													<p className='projects-section-text'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/spotify-clone-ds'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
											</div>

											<figure className='wp-block-image size-large has-custom-border margin-bottom-half is-style-default'>
												<a
													target='_blank'
													rel='noopener noreferrer'
													href='https://github.com/davesheinbein/mock-twitch-ui'
												>
													<img
														width='1024'
														height='566'
														src={fakeTwitch.url}
														alt={fakeTwitch.name}
														className='wp-image-250'
														style={{
															borderRadius: '10px',
															aspectRatio: '16/9',
															objectFit: 'cover',
														}}
														srcSet={fakeTwitch.url}
														sizes='(max-width: 1024px) 100vw, 1024px'
													/>
												</a>
											</figure>

											<div
												className='wp-block-group is-layout-flow wp-container-core-group-layout-17 wp-block-group-is-layout-flow'
												style={{
													color: '#11181f',
													borderBottomColor:
														'var(--wp--preset--color--tertiary)',
													borderBottomStyle: 'solid',
													borderBottomWidth: '1px',
													paddingBottom:
														'var(--wp--preset--spacing--50)',
												}}
											>
												<h3 className='wp-block-heading has-medium-font-size'>
													<br />
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://mock-twitch-ui.web.app/'
													>
														Twitch (Mock UI)
													</a>
												</h3>

												<p className='projects-section-text'>
													Mock Twitch front-end UI,
													meticulously built with React.js,
													effectively simulates the UI of a
													John Doe user profile, seamlessly
													incorporating and displaying
													captivating random YouTube videos
													for enhanced user engagement. The
													result is an immersive experience
													that replicates the interactive
													elements found in a real Twitch
													user profile.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML5, CSS, JavaScript, Node.js,
													React, Firebase, Font Awesome, Git
												</p>

												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://mock-twitch-ui.web.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>
													<p className='projects-section-text'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/mock-twitch-ui'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
											</div>

											<figure className='wp-block-image size-large has-custom-border margin-bottom-half is-style-default'>
												<a
													target='_blank'
													rel='noopener noreferrer'
													href='https://github.com/davesheinbein/react-quiz-typescript'
												>
													<img
														width='1784'
														height='1004'
														src={typescriptquiz.url}
														alt={typescriptquiz.name}
														className='wp-image-253'
														style={{
															borderRadius: '10px',
															aspectRatio: '16/9',
															objectFit: 'cover',
														}}
														srcSet={typescriptquiz.url}
														sizes='(max-width: 1784px) 100vw, 1784px'
													/>
												</a>
											</figure>

											<div
												className='wp-block-group has-global-padding is-layout-constrained wp-container-core-group-layout-18 wp-block-group-is-layout-constrained'
												style={{
													borderBottomColor:
														'var(--wp--preset--color--tertiary)',
													borderBottomStyle: 'solid',
													borderBottomWidth: '1px',
													paddingBottom:
														'var(--wp--preset--spacing--50)',
												}}
											>
												<h3 className='wp-block-heading has-medium-font-size'>
													<br />
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://react-typescript-quiz-app.netlify.app/'
													>
														React Typescript Quiz App
													</a>
												</h3>

												<p className='projects-section-text'>
													Built a concise frontend
													application using the Open Trivia
													Database API and
													Styled-Components. The API
													dynamically generates trivia
													questions and answers,
													complemented by captivating
													randomly generated backgrounds
													from Unsplash for an engaging user
													experience.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML5, CSS, JavaScript,
													TypeScript, React, Git, Netlify
												</p>

												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://react-typescript-quiz-app.netlify.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>

													<p className='projects-section-text'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/react-quiz-typescript'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className='wp-block-column is-layout-flow wp-block-column-is-layout-flow'>
										<figure className='wp-block-image size-large has-custom-border margin-bottom-half'>
											<a
												target='_blank'
												rel='noopener noreferrer'
												href='https://github.com/davesheinbein/amazon-clone-ds'
											>
												<img
													width='3582'
													height='1943'
													src={fakeamazon.url}
													alt={fakeamazon.name}
													className='wp-image-165'
													style={{
														borderRadius: '10px',
														aspectRatio: '16/9',
														objectFit: 'cover',
													}}
												/>
											</a>
										</figure>

										<div
											className='wp-block-group is-layout-flow wp-container-core-group-layout-24 wp-block-group-is-layout-flow'
											style={{
												color: '#11181f',
												marginTop: '15px',
											}}
										>
											<div className='wp-block-group has-global-padding is-layout-constrained wp-block-group-is-layout-constrained'>
												<h3 className='wp-block-heading has-medium-font-size'>
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://clone-ds.web.app/'
													>
														Fake Amazon Mock UI
													</a>
												</h3>

												<p className='projects-section-text'>
													Developed a mock Amazon UI using
													React, Redux, and SASS, and
													deployed it on Firebase with
													database support and user
													authentication. The robust backend
													leverages Firebase and Axios,
													while payment processing is
													seamlessly integrated with Stripe,
													prominently showcased with
													successful payments in the
													application’s payment processing
													screenshot. I use test card data
													across all credit card fields for
													an illustrative payment processing
													demonstration.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML, CSS, Sass, JavaScript,
													Stripe, React, React Context API,
													Node.js, Firebase (Database,
													Authentication), CurrencyFormat,
													Git
												</p>

												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://clone-ds.web.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>

													<p className='projects-section-text'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/amazon-clone-ds'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
											</div>

											<figure className='wp-block-image size-large has-custom-border margin-bottom-half is-style-default'>
												<a
													target='_blank'
													rel='noopener noreferrer'
													href='https://github.com/davesheinbein/netflix-clone-ds'
												>
													<img
														width='1024'
														height='562'
														src={fakeflix.url}
														alt={fakeflix.name}
														className='wp-image-249'
														style={{
															borderRadius: '10px',
															aspectRatio: '16/9',
															objectFit: 'cover',
														}}
														srcSet='https://i.imgur.com/13EPwv3.png'
														sizes='(max-width: 1024px) 100vw, 1024px'
													/>
												</a>
											</figure>

											<div
												className='wp-block-group is-layout-flow wp-container-core-group-layout-21 wp-block-group-is-layout-flow'
												style={{
													borderBottomColor:
														'var(--wp--preset--color--tertiary)',
													borderBottomStyle: 'solid',
													borderBottomWidth: '1px',
													paddingBottom:
														'var(--wp--preset--spacing--50)',
												}}
											>
												<h3 className='wp-block-heading has-medium-font-size'>
													<br />
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://neflix-clone-ds.web.app/'
													>
														Fakeflix Netflix Front-End UI
													</a>
												</h3>

												<p className='projects-section-text'>
													Crafted an engaging Front-End UI
													for a Netflix mock web app,
													Fakeflix, prioritizing
													interactivity and stylish design.
													Deployed on Firebase, seamlessly
													integrating MovieDB,
													movie-trailer, and React-YouTube
													APIs for user-friendly trailer
													access.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML5, CSS, Sass, JavaScript,
													Axios, movie-trailer,
													react-youtube, React, Node.js,
													Firebase, Git
												</p>

												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://neflix-clone-ds.web.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>

													<p className='projects-section-text'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/netflix-clone-ds'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
											</div>

											<figure className='wp-block-image size-large has-custom-border margin-bottom-half is-style-default'>
												<a
													target='_blank'
													rel='noopener noreferrer'
													href='https://github.com/davesheinbein/i-message-clone-ui'
												>
													<img
														width='1024'
														height='554'
														src={imessage.url}
														alt={imessage.name}
														className='wp-image-255'
														style={{
															borderRadius: '10px',
															aspectRatio: '16/9',
															objectFit: 'cover',
														}}
														srcSet={imessage.url}
														sizes='(max-width: 1024px) 100vw, 1024px'
													/>
												</a>
											</figure>

											<div
												className='wp-block-group has-global-padding is-layout-constrained wp-container-core-group-layout-22 wp-block-group-is-layout-constrained'
												style={{
													borderBottomColor:
														'var(--wp--preset--color--tertiary)',
													borderBottomStyle: 'solid',
													borderBottomWidth: '1px',
													paddingBottom:
														'var(--wp--preset--spacing--50)',
												}}
											>
												<h3 className='wp-block-heading has-medium-font-size'>
													<br />
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://i-message-ui.web.app/'
													>
														iMessage (Mock UI)
													</a>
												</h3>

												<p className='projects-section-text'>
													Simulated iMessage app with
													frontend and backend components.
													Developed using React, Redux, and
													SASS, and is deployed on Firebase
													with support for Firebase database
													and user authentication.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML5, CSS, Sass, JavaScript,
													Redux, React, cors, Express,
													Mongoose, Node.js, timeago.js,
													react-flip-move, Firebase,
													Firebase Database, Firebase
													Authentication, CurrencyFormat,
													Git
												</p>

												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://i-message-ui.web.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>

													<p className='projects-section-text'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/i-message-clone-ui'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
											</div>

											<figure className='wp-block-image size-large has-custom-border margin-bottom-half is-style-default'>
												<a
													target='_blank'
													rel='noopener noreferrer'
													href='https://github.com/davesheinbein/healthy-template'
												>
													<img
														width='1024'
														height='504'
														src={frushley.url}
														alt={frushley.name}
														className='wp-image-256'
														style={{
															borderRadius: '10px',
															aspectRatio: '16/9',
															objectFit: 'cover',
														}}
														srcSet={frushley.url}
														sizes='(max-width: 1024px) 100vw, 1024px'
													/>
												</a>
											</figure>

											<div
												className='wp-block-group has-global-padding is-layout-constrained wp-container-core-group-layout-23 wp-block-group-is-layout-constrained'
												style={{
													borderBottomColor:
														'var(--wp--preset--color--tertiary)',
													borderBottomStyle: 'solid',
													borderBottomWidth: '1px',
													paddingBottom:
														'var(--wp--preset--spacing--50)',
												}}
											>
												<h3 className='wp-block-heading has-medium-font-size'>
													<br />
													<a
														className='projects-section-accent'
														target='_blank'
														rel='noopener noreferrer'
														href='https://healthy-template.web.app/'
													>
														Frushley (Mock Healthy
														Restaurant)
													</a>
												</h3>

												<p className='projects-section-text'>
													Fresh foods business website with
													shopping cart and Stripe payment
													functionality, meticulously
													designed to showcase my software
													engineering skills and demonstrate
													the capability to independently
													create a seamless single-page
													application.
												</p>

												<p className='projects-section-text'>
													Tech Stack:
												</p>

												<p className='projects-section-text'>
													HTML5, CSS, Sass, JavaScript,
													Stripe, Context API, Node.js,
													Firebase, Git
												</p>

												<div className='rows'>
													<p className='rows__item'>
														<i className='fa fa-chain projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://healthy-template.web.app/'
															className='projects-section-url'
														>
															URL
														</a>
													</p>

													<p className='projects-section-text'>
														<i className='fa fa-github projects-section-accent'></i>{' '}
														<a
															target='_blank'
															rel='noopener noreferrer'
															href='https://github.com/davesheinbein/healthy-template'
															className='projects-section-url'
														>
															Repository
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*  */}
							</div>
							{/*  */}
						</div>
						{/*  */}
						<h3 className='wp-block-heading alignwide projects-section-header'>
							<a
								className='projects-section-header no-underline'
								href='https://codepen.io/dsDeveloper'
							>
								CodePen Projects
							</a>
						</h3>

						<div className='git__projects-grid'>
							{/* CodePen Project 1 */}
							<div className='wp-block-group git__project-item'>
								<h3 className='wp-block-heading has-medium-font-size'>
									<a
										className='git__projects-section-accent no-underline'
										target='_blank'
										rel='noopener noreferrer'
										href='https://codepen.io/dsDeveloper/full/oNKwaeN'
									>
										Choropleth Map
									</a>
								</h3>
								<img
									className='git__projects-section-img'
									src={choroplethMap.url}
									alt={choroplethMap.name}
								/>
								<p className='git__projects-section-text'>
									An interactive choropleth map showcasing
									the educational attainment of adults aged
									25 and older across U.S. counties from
									2010-2014. Users can explore detailed
									county-level data by hovering over
									regions, revealing the percentage of
									individuals holding a bachelor's degree or
									higher.
									<br />
									<br />
									Based on:
									<a
										className='git__projects-section-text-link'
										href='https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-choropleth-map'
									>
										FreeCodeCamp Project
									</a>
								</p>
								<p className='git__projects-section-text'>
									Tech Stack: HTML, CSS, JavaScript, D3.js
								</p>
								<div className='rows'>
									<p className='rows__item'>
										<i className='fa fa-globe git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://codepen.io/dsDeveloper/full/oNKwaeN'
											className='git__projects-section-url'
										>
											Project
										</a>
									</p>
									<p className='rows__item'>
										<i className='fa fa-chain git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://codepen.io/dsDeveloper/pen/oNKwaeN'
											className='git__projects-section-url'
										>
											CodePen
										</a>
									</p>
									<p className='rows__item'>
										<i className='fa fa-github git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://gist.github.com/davesheinbein/003f8a4eab0146b5258e940b6deba11e'
											className='git__projects-section-url'
										>
											GitHub Gist
										</a>
									</p>
								</div>
							</div>

							{/* CodePen Project 2 */}
							<div className='wp-block-group git__project-item'>
								<h3 className='wp-block-heading has-medium-font-size'>
									<a
										className='git__projects-section-accent no-underline'
										target='_blank'
										rel='noopener noreferrer'
										href='https://codepen.io/dsDeveloper/full/WNVOYKB'
									>
										Treemap Diagram
									</a>
								</h3>
								<img
									className='git__projects-section-img'
									src={treemap.url}
									alt={treemap.name}
								/>
								<p className='git__projects-section-text'>
									An interactive treemap diagram that
									visualizes Kickstarter pledges across
									various categories. Users can hover over
									each tile to reveal funding details for
									specific projects, offering insights into
									the distribution of pledged amounts across
									creative sectors.
									<br />
									<br />
									Based on:
									<a href='https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-treemap-diagram'>
										FreeCodeCamp Project
									</a>
								</p>
								<p className='git__projects-section-text'>
									Tech Stack: HTML, CSS, JavaScript, D3.js
								</p>
								<div className='rows'>
									<p className='rows__item'>
										<i className='fa fa-globe git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://codepen.io/dsDeveloper/full/WNVOYKB'
											className='git__projects-section-url'
										>
											Project
										</a>
									</p>
									<p className='rows__item'>
										<i className='fa fa-chain git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://codepen.io/dsDeveloper/pen/WNVOYKB'
											className='git__projects-section-url'
										>
											CodePen
										</a>
									</p>
									<p className='rows__item'>
										<i className='fa fa-github git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://gist.github.com/davesheinbein/701f42aa6ec3418d517c6f9cb5ef8ae3'
											className='git__projects-section-url'
										>
											GitHub Gist
										</a>
									</p>
								</div>
							</div>

							{/* Repeat for additional git__projects */}
							<div className='wp-block-group git__project-item'>
								<h3 className='wp-block-heading has-medium-font-size'>
									<a
										className='git__projects-section-accent no-underline'
										target='_blank'
										rel='noopener noreferrer'
										href='https://codepen.io/dsDeveloper/pen/xxvryGM'
									>
										Temperature Heat Map
									</a>
								</h3>
								<img
									className='git__projects-section-img'
									src={temperatureHeatMap.url}
									alt={temperatureHeatMap.name}
								/>
								<p className='git__projects-section-text'>
									Explore a comprehensive heat map that
									visualizes global temperature changes from
									1754 to 2016. This interactive tool allows
									users to hover over individual cells to
									uncover detailed information about monthly
									temperature anomalies, facilitating a
									deeper understanding of historical climate
									trends.
									<br />
									<br />
									Based on:
									<a href='https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-heat-map'>
										FreeCodeCamp Project
									</a>
								</p>
								<p className='git__projects-section-text'>
									Tech Stack: HTML, CSS, JavaScript, D3.js
								</p>
								<div className='rows'>
									<p className='rows__item'>
										<i className='fa fa-globe git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://codepen.io/dsDeveloper/full/xxvryGM'
											className='git__projects-section-url'
										>
											Project
										</a>
									</p>
									<p className='rows__item'>
										<i className='fa fa-chain git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://codepen.io/dsDeveloper/pen/xxvryGM'
											className='git__projects-section-url'
										>
											CodePen
										</a>
									</p>
									<p className='rows__item'>
										<i className='fa fa-github git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://gist.github.com/davesheinbein/003f8a4eab0146b5258e940b6deba11e'
											className='git__projects-section-url'
										>
											GitHub Gist
										</a>
									</p>
								</div>
							</div>

							<div className='wp-block-group git__project-item'>
								<h3 className='wp-block-heading has-medium-font-size'>
									<a
										className='git__projects-section-accent no-underline'
										target='_blank'
										rel='noopener noreferrer'
										href='https://codepen.io/yourusername/pen/project4'
									>
										Cyclists Scatterplot
									</a>
								</h3>
								<img
									className='git__projects-section-img'
									src={scatterplot.url}
									alt={scatterplot.name}
								/>
								<p className='git__projects-section-text'>
									This scatterplot visualizes the
									performance of cyclists over time,
									showcasing the relationship between race
									times and doping allegations in the sport.
									The interactive graph allows you to
									explore historical cycling data,
									highlighting notable moments in the
									sport's history. Hover over the points to
									uncover the details of each cyclist's year
									and race time.
									<br />
									<br />
									Based on:
									<a href='https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-scatterplot-graph'>
										FreeCodeCamp Project
									</a>
								</p>
								<p className='git__projects-section-text'>
									Tech Stack: HTML, CSS, JavaScript, D3.js
								</p>
								<div className='rows'>
									<p className='rows__item'>
										<i className='fa fa-globe git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://codepen.io/dsDeveloper/full/YzmQJXK'
											className='git__projects-section-url'
										>
											Project
										</a>
									</p>
									<p className='rows__item'>
										<i className='fa fa-chain git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://codepen.io/dsDeveloper/pen/YzmQJXK'
											className='git__projects-section-url'
										>
											CodePen
										</a>
									</p>
									<p className='rows__item'>
										<i className='fa fa-github git__projects-section-accent no-underline'></i>{' '}
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://gist.github.com/davesheinbein/f9700777468789de1e85f25e26984f3b'
											className='git__projects-section-url'
										>
											GitHub Gist
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
