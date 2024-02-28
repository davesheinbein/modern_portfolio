import React from 'react';
import './styles/Blog.css';

function Blog(props) {
	const { deskCompImg, messageImg, catDogImg } = props;
	return (
		<div
			className='wp-block-columns is-layout-flex wp-container-core-columns-layout-30 wp-block-columns-is-layout-flex blog blog-section'
			id='blog'
		>
			<div
				className='wp-block-column is-layout-flow wp-block-column-is-layout-flow blog-section'
				style={{ flexBasis: '100%' }}
			>
				<div
					className='wp-block-group alignfull has-link-color wp-elements-a09ee502fbd81123d81ab9db2c80ab9e has-global-padding is-layout-constrained wp-container-core-group-layout-42 wp-block-group-is-layout-constrained'
					style={{
						marginTop: 0,
						marginBottom: 0,
						paddingTop: 'var(--wp--preset--spacing--80)',
						paddingRight: 'var(--wp--preset--spacing--50)',
						paddingBottom: 'var(--wp--preset--spacing--80)',
						paddingLeft: 'var(--wp--preset--spacing--50)',
					}}
				>
					<h2
						className='wp-block-heading alignwide blog-section-header'
						style={{
							marginTop: 0,
							marginRight: 0,
							marginBottom: 0,
							marginLeft: 0,
						}}
					>
						Blog posts
					</h2>

					<div className='wp-block-query alignwide is-layout-flow wp-block-query-is-layout-flow'>
						<ul className='columns-3 wp-block-post-template is-layout-grid wp-container-core-post-template-layout-1 wp-block-post-template-is-layout-grid'>
							<li className='wp-block-post post-118 post type-post status-publish format-standard has-post-thumbnail hentry category-blog'>
								<div
									className='wp-block-group is-layout-flow wp-container-core-group-layout-39 wp-block-group-is-layout-flow blog-section-text'
									style={{ paddingBottom: '1.5rem' }}
								>
									<figure
										style={{ aspectRatio: '16/9' }}
										className='wp-block-post-featured-image wp-duotone-unset-2'
									>
										<a
											href='https://www.linkedin.com/pulse/early-insights-chatgpt-chatbot-technology-great-david-sheinbein/?trackingId=lw%2Bo5gAEQCSOF%2FPVzT%2FX%2BA%3D%3D'
											target='_self'
										>
											<img
												width='1080'
												height='720'
												src={deskCompImg.url}
												className='attachment-post-thumbnail size-post-thumbnail wp-post-image'
												alt='Early Insights on ChatGPT: A Chatbot Technology with Great Potential'
												style={{
													borderRadius: '10px',
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
												decoding='async'
												loading='lazy'
												data-attachment-id='120'
												data-orig-file={deskCompImg.url}
												data-orig-size='1080,720'
												data-comments-opened='1'
												data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
												data-image-title='temp3'
												data-image-description=''
												data-image-caption=''
												data-medium-file={deskCompImg.url}
												data-large-file={deskCompImg.url}
											/>
										</a>
									</figure>

									<h3
										style={{
											lineHeight: '1.3',
										}}
										className='wp-block-post-title has-medium-font-size blog-section-text'
									>
										<a
											href='https://www.linkedin.com/pulse/early-insights-chatgpt-chatbot-technology-great-david-sheinbein/?trackingId=lw%2Bo5gAEQCSOF%2FPVzT%2FX%2BA%3D%3D'
											target='_self'
											className='blog-section-text'
										>
											Early Insights on ChatGPT: A Chatbot
											Technology with Great Potential
										</a>
									</h3>

									<div className='wp-block-post-excerpt has-small-font-size blog-section-text'>
										<p className='wp-block-post-excerpt__excerpt blog-section-text'>
											As a frontend developer, I am
											enthusiastic about the potential of
											ChatGPT, a specialized variant of
											OpenAI’s GPT language model designed
											for chatbot applications. Its
											real-time generation of human-like
											responses and pre-training on natural
											language…
										</p>
										<p className='wp-block-post-excerpt__more-text'>
											<a
												className='wp-block-post-excerpt__more-link blog-section-url'
												href='https://www.linkedin.com/pulse/early-insights-chatgpt-chatbot-technology-great-david-sheinbein/?trackingId=lw%2Bo5gAEQCSOF%2FPVzT%2FX%2BA%3D%3D'
											>
												Read more
											</a>
										</p>
									</div>
								</div>
							</li>
							<li className='wp-block-post post-114 post type-post status-publish format-standard has-post-thumbnail hentry category-blog'>
								<div
									className='wp-block-group is-layout-flow wp-container-core-group-layout-40 wp-block-group-is-layout-flow'
									style={{ paddingBottom: '1.5rem' }}
								>
									<figure
										style={{ aspectRatio: '16/9' }}
										className='wp-block-post-featured-image wp-duotone-unset-3'
									>
										<a
											href='https://www.linkedin.com/pulse/my-first-conversation-chatgpt-impressive-adaptability-david-sheinbein%3FtrackingId=%252BpioCukkQYmTmcPb7q4M7g%253D%253D/?trackingId=%2BpioCukkQYmTmcPb7q4M7g%3D%3D'
											target='_self'
										>
											<img
												width='1080'
												height='720'
												src={messageImg.url}
												className='attachment-post-thumbnail size-post-thumbnail wp-post-image'
												alt='My First Conversation with ChatGPT: Impressive Adaptability'
												style={{
													borderRadius: '10px',
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
												decoding='async'
												loading='lazy'
												data-attachment-id='116'
												data-orig-file={messageImg.url}
												data-orig-size='1080,720'
												data-comments-opened='1'
												data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
												data-image-title='temp2'
												data-image-description=''
												data-image-caption=''
												data-medium-file={messageImg.url}
												data-large-file={messageImg.url}
											/>
										</a>
									</figure>

									<h3
										style={{ lineHeight: '1.3' }}
										className='wp-block-post-title has-medium-font-size blog-section-text'
									>
										<a
											href='https://www.linkedin.com/pulse/my-first-conversation-chatgpt-impressive-adaptability-david-sheinbein%3FtrackingId=%252BpioCukkQYmTmcPb7q4M7g%253D%253D/?trackingId=%2BpioCukkQYmTmcPb7q4M7g%3D%3D'
											target='_self'
											className='blog-section-text'
										>
											My First Conversation with ChatGPT:
											Impressive Adaptability
										</a>
									</h3>

									<div className='wp-block-post-excerpt has-small-font-size blog-section-text'>
										<p className='wp-block-post-excerpt__excerpt blog-section-text'>
											I spoke with ChatGPT, an impressive AI
											model. It lacks emotions but excels at
											assisting with tasks, answering
											queries, and even crafting jokes and
											stories. While it struggles with
											ambiguous questions, our interaction
											was delightful.…
										</p>
										<p className='wp-block-post-excerpt__more-text'>
											<a
												className='wp-block-post-excerpt__more-link blog-section-url'
												href='https://www.linkedin.com/pulse/my-first-conversation-chatgpt-impressive-adaptability-david-sheinbein%3FtrackingId=%252BpioCukkQYmTmcPb7q4M7g%253D%253D/?trackingId=%2BpioCukkQYmTmcPb7q4M7g%3D%3D'
											>
												Read more
											</a>
										</p>
									</div>
								</div>
							</li>
							<li className='wp-block-post post-43 post type-post status-publish format-standard has-post-thumbnail hentry category-blog'>
								<div
									className='wp-block-group is-layout-flow wp-container-core-group-layout-41 wp-block-group-is-layout-flow'
									style={{ paddingBottom: '1.5rem' }}
								>
									<figure
										style={{ aspectRatio: '16/9' }}
										className='wp-block-post-featured-image wp-duotone-unset-4'
									>
										<a
											href='https://www.linkedin.com/pulse/nurturing-skill-growth-code-collaboration-david-sheinbein-d8ckc/?trackingId=lw%2Bo5gAEQCSOF%2FPVzT%2FX%2BA%3D%3D'
											target='_self'
										>
											<img
												width='1080'
												height='720'
												src={catDogImg.url}
												className='attachment-post-thumbnail size-post-thumbnail wp-post-image'
												alt='Nurturing Skill Growth in Code Collaboration'
												style={{
													borderRadius: '10px',
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
												decoding='async'
												loading='lazy'
												data-attachment-id='45'
												data-orig-file={catDogImg.url}
												data-orig-size='1080,720'
												data-comments-opened='1'
												data-image-meta='{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0"}'
												data-image-title='temp1'
												data-image-description=''
												data-image-caption=''
												data-medium-file={catDogImg.url}
												data-large-file={catDogImg.url}
											/>
										</a>
									</figure>

									<h3
										style={{ lineHeight: '1.3' }}
										className='wp-block-post-title has-medium-font-size blog-section-text'
									>
										<a
											href='https://www.linkedin.com/pulse/nurturing-skill-growth-code-collaboration-david-sheinbein-d8ckc/?trackingId=lw%2Bo5gAEQCSOF%2FPVzT%2FX%2BA%3D%3D'
											target='_self'
											className='blog-section-text'
										>
											Nurturing Skill Growth in Code
											Collaboration
										</a>
									</h3>

									<div className='wp-block-post-excerpt has-small-font-size blog-section-text'>
										<p className='wp-block-post-excerpt__excerpt blog-section-text'>
											In the dynamic world of frontend
											development, meticulous code reviews
											play a crucial role in boosting
											individual and team growth. Feedback
											focuses on advanced coding nuances for
											seasoned developers and personalized
											support for newer members.…
										</p>
										<p className='wp-block-post-excerpt__more-text'>
											<a
												className='wp-block-post-excerpt__more-link blog-section-url'
												href='https://www.linkedin.com/pulse/nurturing-skill-growth-code-collaboration-david-sheinbein-d8ckc/?trackingId=lw%2Bo5gAEQCSOF%2FPVzT%2FX%2BA%3D%3D'
											>
												Read more
											</a>
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
