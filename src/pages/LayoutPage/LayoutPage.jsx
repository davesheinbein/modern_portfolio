import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Info from '../../components/Info/Info';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Certificates from '../../components/Certificates/Certificates';
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
	render(props) {
		const { imgList } = this.props;

		function findImageByName(imgList, targetImageName) {
			if (!imgList || !targetImageName) return null;

			const selectedImage = imgList.find(
				(image) => image.name === targetImageName
			);

			if (selectedImage) {
				console.log(
					'Selected Image URL:',
					selectedImage.url
				);
				return selectedImage;
			}

			console.log(
				`Image with name '${targetImageName}' not found.`
			);
			return null;
		}

		// files
		const targetImageName1 = 'headshot';
		const headshot = findImageByName(
			imgList,
			targetImageName1
		);
		const targetImageName2 = 'funfunctions';
		const funfunctions = findImageByName(
			imgList,
			targetImageName2
		);
		const targetImageName3 = 'fakeflix';
		const fakeflix = findImageByName(
			imgList,
			targetImageName3
		);
		const targetImageName4 = 'frushley';
		const frushley = findImageByName(
			imgList,
			targetImageName4
		);
		const targetImageName5 = 'fakeamazon';
		const fakeamazon = findImageByName(
			imgList,
			targetImageName5
		);
		const targetImageName6 = 'typescriptquiz';
		const typescriptquiz = findImageByName(
			imgList,
			targetImageName6
		);
		const targetImageName7 = 'fakespotify';
		const fakeSpotify = findImageByName(
			imgList,
			targetImageName7
		);
		const targetImageName8 = 'covidtracker';
		const covidtracker = findImageByName(
			imgList,
			targetImageName8
		);
		const targetImageName9 = 'faketwitch';
		const fakeTwitch = findImageByName(
			imgList,
			targetImageName9
		);
		const targetImageName10 = 'imessage';
		const imessage = findImageByName(
			imgList,
			targetImageName10
		);

		const targetImageName11 = 'code_comp';
		const code_comp = findImageByName(
			imgList,
			targetImageName11
		);

		const targetImageName12 = 'comp_code';
		const comp_code = findImageByName(
			imgList,
			targetImageName12
		);

		const targetImageName13 = 'desk_comp';
		const desk_comp = findImageByName(
			imgList,
			targetImageName13
		);

		const targetImageName14 = 'message';
		const message = findImageByName(
			imgList,
			targetImageName14
		);

		const targetImageName15 = 'cat_dog';
		const cat_dog = findImageByName(
			imgList,
			targetImageName15
		);

		const targetImageName16 = 'logo_red';
		const logo_red = findImageByName(
			imgList,
			targetImageName16
		);

		const targetImageName17 = 'laptop_code';
		const laptop_code = findImageByName(
			imgList,
			targetImageName17
		);

		const targetImageName18 = 'logo_blue';
		const logo_blue = findImageByName(
			imgList,
			targetImageName18
		);

		const targetImageName19 = 'laptop';
		const laptop = findImageByName(
			imgList,
			targetImageName19
		);
		const targetImageName20 = 'marketing';
		const marketing = findImageByName(
			imgList,
			targetImageName20
		);

		const targetImageName21 = 'assistant';
		const assistant = findImageByName(
			imgList,
			targetImageName21
		);
		// urls

		// Header
		const headshotImg = headshot || {
			name: 'headshot',
			url: 'https://i.imgur.com/1mMXZZy.png',
		};

		// projects
		const funfunctionsImg = funfunctions || {
			name: 'Fun Functionalities',
			url: 'https://i.imgur.com/l19QzZ6.png',
		};
		const fakeflixImg = fakeflix || {
			name: 'Fake Netflix',
			url: 'https://i.imgur.com/13EPwv3.png',
		};
		const fakeTwitchImg = fakeTwitch || {
			name: 'Fake Twitch',
			url: 'https://i.imgur.com/D54Lfah.png',
		};
		const frushleyImg = frushley || {
			name: 'Frushley',
			url: 'https://i.imgur.com/I3amyTz.png',
		};
		const fakeamazonImg = fakeamazon || {
			name: 'Fake Amazon',
			url: 'https://i.imgur.com/bZ5z6c6.png',
		};
		const typescriptquizImg = typescriptquiz || {
			name: 'Typescript Quiz',
			url: 'https://i.imgur.com/5fImcdK.png',
		};
		const fakeSpotifyImg = fakeSpotify || {
			name: 'Fake Spotify',
			url: 'https://i.imgur.com/gkDm6Sp.png',
		};
		const covidtrackerImg = covidtracker || {
			name: 'Covid Tracker',
			url: 'https://i.imgur.com/elQXVfa.png',
		};
		const imessageImg = imessage || {
			name: 'iMessage Mock',
			url: 'https://i.imgur.com/HjhEgn4.png',
		};

		// here
		// codepens
		const choroplethMapImg = {
			name: 'Choropleth Map',
			url: 'https://i.imgur.com/fbQVL65.png',
		};

		const treemapImg = {
			name: 'Treemap',
			url: 'https://i.imgur.com/WPZgxXf.png',
		};

		const temperatureHeatMapImg = {
			name: 'Temperature Heat Map',
			url: 'https://i.imgur.com/QjiTkVe.png',
		};

		const scatterplotImg = {
			name: 'Cyclists Scatterplot ',
			url: 'https://i.imgur.com/aDRq7CH.png',
		};

		// education
		const codeCompImg = code_comp || {
			name: 'Code Compilation',
			url: 'https://i.imgur.com/yE3JEtC.png',
		};

		const compCodeImg = comp_code || {
			name: 'Compilation Code',
			url: 'https://i.imgur.com/53kGNna.png',
		};

		// professional experience
		const laptopCodeImg = laptop_code || {
			name: 'Laptop Code',
			url: 'https://i.imgur.com/lEKSUqq.png',
		};

		const laptopImg = laptop || {
			name: 'Laptop',
			url: 'https://i.imgur.com/NTHOBr8.png',
		};

		const marketingImg = marketing || {
			name: 'marketing',
			url: 'https://i.imgur.com/HRen3Pt.jpeg',
		};

		const assistantImg = assistant || {
			name: 'assistant',
			url: 'https://i.imgur.com/j1s4TdV.jpeg',
		};

		// blog
		const deskCompImg = desk_comp || {
			name: 'Desktop Compilation',
			url: 'https://i.imgur.com/AGeYmjU.png',
		};
		const messageImg = message || {
			name: 'Message',
			url: 'https://i.imgur.com/mTBUwM5.png',
		};

		const catDogImg = cat_dog || {
			name: 'Cat and Dog',
			url: 'https://i.imgur.com/ERr4bVB.png',
		};

		return (
			<main className='wp-block-group is-layout-flow wp-container-core-group-layout-45 wp-block-group-is-layout-flow'>
				<Hero headshotImg={headshotImg} />
				<About />
				<Info />
				<Projects
					funfunctionsImg={funfunctionsImg}
					fakeTwitchImg={fakeTwitchImg}
					fakeflixImg={fakeflixImg}
					frushleyImg={frushleyImg}
					fakeamazonImg={fakeamazonImg}
					typescriptquizImg={typescriptquizImg}
					fakeSpotifyImg={fakeSpotifyImg}
					covidtrackerImg={covidtrackerImg}
					imessageImg={imessageImg}
					choroplethMapImg={choroplethMapImg}
					treemapImg={treemapImg}
					temperatureHeatMapImg={temperatureHeatMapImg}
					scatterplotImg={scatterplotImg}
				/>
				<Skills imgList={imgList} />
				<Education
					codeCompImg={codeCompImg}
					compCodeImg={compCodeImg}
				/>
				<Certificates imgList={imgList} />
				<Experience
					imgList={imgList}
					laptopCodeImg={laptopCodeImg}
					laptopImg={laptopImg}
					marketingImg={marketingImg}
					assistantImg={assistantImg}
				/>
				<Blog
					imgList={imgList}
					deskCompImg={deskCompImg}
					messageImg={messageImg}
					catDogImg={catDogImg}
				/>
				<Endorsements imgList={imgList} />
				<Contact
					handleThemeChange={this.props.handleThemeChange}
				/>
				<Footer />
			</main>
		);
	}
}
