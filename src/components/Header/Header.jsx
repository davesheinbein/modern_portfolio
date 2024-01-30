import React, { useState } from 'react';
import './styles/Header.css';

function Header(props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleToggle = () => {
		props.handleThemeChange(
			props.color === 'dark' ? 'default' : 'dark'
		);
	};

	return (
		<header className='wp-block-template-part header header-section'>
			<div className='wp-block-columns are-vertically-aligned-center is-layout-flex wp-container-core-columns-layout-1 wp-block-columns-is-layout-flex wp-block-columns-is-layout-flex__margin header-section'>
				<div
					className='wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow header-section'
					style={{
						paddingRight: 'var(--wp--preset--spacing--40)',
						paddingLeft: 'var(--wp--preset--spacing--40)',
						flexBasis: '100%',
					}}
				>
					<div className='wp-block-group alignwide is-horizontal is-content-justification-space-between is-layout-flex wp-container-core-group-layout-1 wp-block-group-is-layout-flex'>
						<div className='wp-block-site-logo'>
							<a
								target='_blank'
								rel='noopener noreferrer nofollow'
								href='https://www.davidsheinbeinengineer.com/'
								className='custom-logo-link'
								aria-current='page'
							>
								{props.color === 'dark' ? (
									<img
										width='250'
										height='140'
										src='https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png'
										className='custom-logo logo-sizing'
										alt='DAVID SHEINBEIN'
										decoding='async'
										srcset='https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png?w=250&amp;h=140 250w, https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png?w=498&amp;h=280 498w, https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png?w=150&amp;h=84 150w, https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png?w=300&amp;h=169 300w, https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png 500w'
										sizes='(max-width: 250px) 100vw, 250px'
										data-attachment-id='16'
										data-permalink='https://imgdump2.wordpress.com/black_yellow_minimalist_brain_logo__1_-removebg-preview-2/'
										data-orig-file='https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png'
										data-orig-size='500,281'
										data-comments-opened='1'
										data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"David Sheinbein","created_timestamp":"0","copyright":"David Sheinbein","focal_length":"0","iso":"0","shutter_speed":"0","title":"David Sheinbein","orientation":"0"}'
										data-image-title='David Sheinbein'
										data-image-description='David Sheinbein'
										data-image-caption='David Sheinbein'
										data-medium-file='https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png?w=300'
										data-large-file='https://imgdump2.files.wordpress.com/2024/01/black_yellow_minimalist_brain_logo__1_-removebg-preview-edited.png?w=500'
									></img>
								) : (
									<img
										width='250'
										height='140'
										src='https://i0.wp.com/davidssoftwareengineer.wpcomstaging.com/wp-content/uploads/2024/01/black_yellow_minimalist_brain_logo__2_-removebg-preview-edited.png?fit=500%2C281&amp;ssl=1'
										className='custom-logo logo-sizing'
										alt='DAVID SHEINBEIN'
										decoding='async'
										data-orig-size='500,281'
										data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"David Sheinbein","created_timestamp":"0","copyright":"David Sheinbein","focal_length":"0","iso":"0","shutter_speed":"0","title":"David Sheinbein","orientation":"0"}'
										data-image-title='David Sheinbein'
										data-image-description='David Sheinbein'
										data-image-caption='David Sheinbein'
										data-medium-file='https://i0.wp.com/davidssoftwareengineer.wpcomstaging.com/wp-content/uploads/2024/01/black_yellow_minimalist_brain_logo__2_-removebg-preview-edited.png?fit=300%2C169&amp;ssl=1'
										data-large-file='https://i0.wp.com/davidssoftwareengineer.wpcomstaging.com/wp-content/uploads/2024/01/black_yellow_minimalist_brain_logo__2_-removebg-preview-edited.png?fit=500%2C281&amp;ssl=1'
									/>
								)}
							</a>
						</div>

						<nav
							className={`is-responsive items-justified-left alignwide wp-block-navigation is-horizontal is-content-justification-left is-layout-flex wp-container-core-navigation-layout-1 wp-block-navigation-is-layout-flex wp-block-navigation-color`}
							aria-label='Navigation'
							data-wp-interactive='{"namespace":"core/navigation"}'
							data-wp-context='{"overlayOpenedBy":[],"type":"overlay","roleAttribute":"","ariaLabel":"Menu"}'
						>
							<button
								aria-haspopup='dialog'
								aria-label='Open menu'
								className='wp-block-navigation__responsive-container-open'
								data-wp-on--click='actions.openMenuOnClick'
								data-wp-on--keydown='actions.handleMenuKeydown'
								onClick={(e) => handleMenuToggle()}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										handleMenuToggle();
									}
								}}
							>
								<svg
									width='24'
									height='24'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
								>
									<path d='M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z'></path>
								</svg>
							</button>

							<div
								className='wp-block-navigation__responsive-container'
								id='modal-1'
								data-wp-class--has-modal-open='state.isMenuOpen'
								data-wp-class--is-menu-open='state.isMenuOpen'
								data-wp-watch='callbacks.initMenu'
								data-wp-on--keydown='actions.handleMenuKeydown'
								data-wp-on--focusout='actions.handleMenuFocusout'
								tabIndex='-1'
							>
								<div
									className='wp-block-navigation__responsive-close'
									tabIndex='-1'
								>
									<div
										className='wp-block-navigation__responsive-dialog'
										data-wp-bind--aria-modal='state.ariaModal'
										data-wp-bind--aria-label='state.ariaLabel'
										data-wp-bind--role='state.roleAttribute'
										data-wp-watch='callbacks.focusFirstElement'
									>
										<button
											aria-label='Close menu'
											className='wp-block-navigation__responsive-container-close'
											data-wp-on--click='actions.closeMenuOnClick'
											onClick={(e) => handleMenuToggle()}
											onKeyDown={(e) => {
												if (e.key === 'esc') {
													handleMenuToggle();
												}
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												width='24'
												height='24'
												aria-hidden='true'
												focusable='false'
											>
												<path d='M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z'></path>
											</svg>
										</button>

										<div
											className='wp-block-navigation__responsive-container-content wp-block-navigation__responsive-container-content_height'
											id='modal-1-content'
										>
											<ul className='wp-block-navigation__container is-responsive items-justified-left alignwide wp-block-navigation header-section-list'>
												<li className='wp-block-navigation-item wp-block-navigation-link wp-block-navigation-link__hidden'>
													<a
														target='_blank'
														rel='noopener noreferrer nofollow'
														href='https://www.davidsheinbeinengineer.com/'
														className='custom-logo-link'
														aria-current='page'
													>
														<img
															width='250'
															height='140'
															src='https://i0.wp.com/davidssoftwareengineer.wpcomstaging.com/wp-content/uploads/2024/01/black_yellow_minimalist_brain_logo__2_-removebg-preview-edited.png?fit=500%2C281&amp;ssl=1'
															className='custom-logo'
															alt='DAVID SHEINBEIN'
															decoding='async'
															data-attachment-id='29'
															data-orig-file='https://i0.wp.com/davidssoftwareengineer.wpcomstaging.com/wp-content/uploads/2024/01/black_yellow_minimalist_brain_logo__2_-removebg-preview-edited.png?fit=500%2C281&amp;ssl=1'
															data-orig-size='500,281'
															data-comments-opened='1'
															data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"David Sheinbein","created_timestamp":"0","copyright":"David Sheinbein","focal_length":"0","iso":"0","shutter_speed":"0","title":"David Sheinbein","orientation":"0"}'
															data-image-title='David Sheinbein'
															data-image-description='David Sheinbein'
															data-image-caption='David Sheinbein'
															data-medium-file='https://i0.wp.com/davidssoftwareengineer.wpcomstaging.com/wp-content/uploads/2024/01/black_yellow_minimalist_brain_logo__2_-removebg-preview-edited.png?fit=300%2C169&amp;ssl=1'
															data-large-file='https://i0.wp.com/davidssoftwareengineer.wpcomstaging.com/wp-content/uploads/2024/01/black_yellow_minimalist_brain_logo__2_-removebg-preview-edited.png?fit=500%2C281&amp;ssl=1'
														/>
													</a>
												</li>
												<li className='wp-block-navigation-item wp-block-navigation-link header-section-text'>
													<a
														rel='noopener nofollow'
														className='wp-block-navigation-item__content'
														href='#about'
														title='About'
													>
														<span className='wp-block-navigation-item__label'>
															About
														</span>
													</a>
												</li>
												<li className='wp-block-navigation-item wp-block-navigation-link header-section-text'>
													<a
														rel='noopener nofollow'
														className='wp-block-navigation-item__content'
														href='#projects'
														title='Projects'
													>
														<span className='wp-block-navigation-item__label'>
															Projects
														</span>
													</a>
												</li>
												<li className='wp-block-navigation-item wp-block-navigation-link header-section-text'>
													<a
														className='wp-block-navigation-item__content'
														rel='noopener nofollow'
														href='#education'
														title='Education'
													>
														<span className='wp-block-navigation-item__label'>
															Education
														</span>
													</a>
												</li>
												<li className='wp-block-navigation-item wp-block-navigation-link header-section-text'>
													<a
														className='wp-block-navigation-item__content'
														rel='noopener nofollow'
														href='#experience'
														title='Experience'
													>
														<span className='wp-block-navigation-item__label'>
															Experience
														</span>
													</a>
												</li>
												<li className='wp-block-navigation-item wp-block-navigation-link header-section-text'>
													<a
														className='wp-block-navigation-item__content'
														rel='noopener nofollow'
														href='#skills'
														title='Skills'
													>
														<span className='wp-block-navigation-item__label'>
															Skills
														</span>
													</a>
												</li>
												<li className='wp-block-navigation-item wp-block-navigation-link header-section-text'>
													<a
														className='wp-block-navigation-item__content'
														rel='noopener nofollow'
														href='#blog'
														title='Blog'
													>
														<span className='wp-block-navigation-item__label'>
															Blog
														</span>
													</a>
												</li>
												<li className='wp-block-navigation-item wp-block-navigation-link header-section-text'>
													<a
														className='wp-block-navigation-item__content'
														rel='noopener nofollow'
														href='#contact'
														title='Contact'
													>
														<span className='wp-block-navigation-item__label'>
															Contact
														</span>
													</a>
												</li>
											</ul>
											<ul className='wp-block-social-links aligncenter has-icon-color is-style-logos-only is-content-justification-center is-layout-flex wp-container-core-social-links-layout-5 wp-block-social-links-is-layout-flex'>
												<li
													style={{
														color: '#11181f',
													}}
													className='wp-social-link wp-social-link-linkedin has-primary-color wp-block-social-link header-section-text'
												>
													<a
														rel='noopener noreferrer'
														target='_blank'
														href='https://www.linkedin.com/in/david-sheinbein/'
														className='wp-block-social-link-anchor'
													>
														<svg
															width='24'
															height='24'
															viewBox='0 0 24 24'
															version='1.1'
															xmlns='http://www.w3.org/2000/svg'
															aria-hidden='true'
															focusable='false'
														>
															<path d='M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z'></path>
														</svg>
														<span className='wp-block-social-link-label screen-reader-text'>
															LinkedIn
														</span>
													</a>
												</li>

												<li className='wp-social-link wp-social-link-github has-primary-color wp-block-social-link header-section-text'>
													<a
														rel='noopener noreferrer'
														target='_blank'
														href='https://github.com/davesheinbein'
														className='wp-block-social-link-anchor'
													>
														<svg
															width='24'
															height='24'
															viewBox='0 0 24 24'
															version='1.1'
															xmlns='http://www.w3.org/2000/svg'
															aria-hidden='true'
															focusable='false'
														>
															<path d='M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z'></path>
														</svg>
														<span className='wp-block-social-link-label screen-reader-text'>
															GitHub
														</span>
													</a>
												</li>
											</ul>

											<ul className='wp-block-navigation__container is-responsive items-justified-left alignwide wp-block-navigation wp-block-navigation__hidden'>
												<li className='wp-block-navigation-item wp-block-navigation-link'>
													<div className=' wp-block-navigation-link__flex'>
														<i className='fa fa-phone'></i>
														<a
															className='wp-block-navigation-item__content'
															rel='noopener nofollow'
															href='tel:310-628-5770'
															title='phone'
														>
															<span className='wp-block-navigation-item__label'>
																310-628-5770
															</span>
														</a>
													</div>
													<div className=' wp-block-navigation-link__flex'>
														<i className='fa fa-envelope'></i>
														<a
															className='wp-block-navigation-item__content'
															rel='noopener nofollow'
															href='mailto:davidsheinbeindev@gmail.com'
															title='email'
														>
															<span className='wp-block-navigation-item__label'>
																Davidsheinbeindev@gmail.com
															</span>
														</a>
													</div>
												</li>
											</ul>
											<ul className='wp-block-navigation__container is-responsive items-justified-left alignwide wp-block-navigation'>
												<li className='wp-block-navigation-item wp-block-navigation-link'>
													<label
														className='switch'
														title={
															props.color === 'dark'
																? 'Dark Mode'
																: 'Light Mode'
														}
													>
														<input
															type='checkbox'
															checked={
																props.color === 'dark'
															}
															onChange={handleToggle}
														/>
														<span className='slider round'></span>
													</label>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
