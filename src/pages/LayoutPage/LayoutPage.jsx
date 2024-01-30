import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Info from '../../components/Info/Info';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Experience from '../../components/Experience/Experience';
import Blog from '../../components/Blog/Blog';
import Endorsements from '../../components/Endorsements/Endorsements';

import Footer from '../../components/Footer/Footer';
import './styles/LayoutPage.css';

console.log(
	'%cHello world...',
	'color: #008000; font-weight: bold; font-size: 26px;'
);

console.log(
	"%cIf you're reading this then you're probably a programmer",
	'color: #3366cc; font-style: italic; font-size: 24px;'
);

console.log(
	'%cMessage me on LinkedIn: %chttps://www.linkedin.com/in/david-sheinbein/',
	'color: #000; font-weight: bold; font-size: 22px;',
	'color: #3366cc;'
);
console.log(
	'%cand let me know if you find this!',
	'color: #000; font-size: 20px;'
);

export default class Layout extends Component {
	render() {
		return (
			<main className='wp-block-group is-layout-flow wp-container-core-group-layout-45 wp-block-group-is-layout-flow'>
				<Hero />
				<About />
				<Info />
				<Projects />
				<Skills />
				<Education />
				<Experience />
				<Blog />
				<Endorsements />
				<Contact
					handleThemeChange={this.props.handleThemeChange}
				/>
				<Footer />
			</main>
		);
	}
}
