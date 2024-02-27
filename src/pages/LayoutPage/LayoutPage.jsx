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
	render(props) {
		const { imgList } = this.props;
		console.log('🚀 Layout page ~ imgList:', imgList);

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

		// urls
		const funfunctionsImg = funfunctions || {
			name: 'Fun Functionalities',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Ffunfunctions.png?alt=media&token=2f09927a-1177-4806-b6bc-c7767c6469c5',
		};
		const fakeflixImg = fakeflix || {
			name: 'Fake Netflix',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2FfakeTwitch.png?alt=media&token=361115a0-1b99-4a58-951f-dae18b5ba3f2',
		};
		const fakeTwitchImg = fakeTwitch || {
			name: 'Fake Twitch',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Ffaketwitch.png?alt=media&token=361115a0-1b99-4a58-951f-dae18b5ba3f2',
		};
		const frushleyImg = frushley || {
			name: 'Frushley',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Ffrushley.png?alt=media&token=1d23dcb6-2c39-4cfb-a01a-2d7a5ae17b8c',
		};
		const fakeamazonImg = fakeamazon || {
			name: 'Fake Amazon',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Ffakeamazon.png?alt=media&token=879ebfa8-a64e-48f3-91d5-aa1f75180df8',
		};
		const typescriptquizImg = typescriptquiz || {
			name: 'Typescript Quiz',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Ftypescriptquiz.png?alt=media&token=76104ccb-9646-453b-880b-a58c847f5ad8',
		};
		const fakeSpotifyImg = fakeSpotify || {
			name: 'Fake Spotify',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Ffakespotify.png?alt=media&token=ff7301d9-9a14-4e92-83a1-c36dbf883d0a',
		};
		const covidtrackerImg = covidtracker || {
			name: 'Covid Tracker',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fcovidtracker.png?alt=media&token=8dc64f99-a3b7-4c1a-b09a-40dd55eb7627',
		};
		const imessageImg = imessage || {
			name: 'iMessage Mock',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fcovidtracker.png?alt=media&token=8dc64f99-a3b7-4c1a-b09a-40dd55eb7627',
		};

		const headshotImg = headshot || {
			name: 'headshot',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fheadshot.jpg?alt=media&token=7673a0ee-45c0-4ba6-8dc6-891e406d20c9',
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
				/>
				<Skills imgList={imgList} />
				<Education imgList={imgList} />
				<Experience imgList={imgList} />
				<Blog imgList={imgList} />
				<Endorsements imgList={imgList} />
				<Contact
					handleThemeChange={this.props.handleThemeChange}
				/>
				<Footer />
			</main>
		);
	}
}
