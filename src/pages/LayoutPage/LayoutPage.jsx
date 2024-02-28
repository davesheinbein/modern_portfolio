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

		// urls

		// Header
		const headshotImg = headshot || {
			name: 'headshot',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fheadshot.jpg?alt=media&token=7673a0ee-45c0-4ba6-8dc6-891e406d20c9',
		};

		// projects
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

		// education
		const codeCompImg = code_comp || {
			name: 'Code Compilation',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fcode_comp.jpg?alt=media&token=f1e8192f-5724-40a3-bf01-32bf7d583bf1',
		};

		const compCodeImg = comp_code || {
			name: 'Compilation Code',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fcomp_code.png?alt=media&token=d03a0ba5-653f-439f-8ca7-0f413f322565',
		};

		// professional experience
		const deskCompImg = desk_comp || {
			name: 'Desktop Compilation',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fdesk_comp.jpg?alt=media&token=25c9270c-699d-4b03-a968-93ea2cae339c',
		};

		const messageImg = message || {
			name: 'Message',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fmessage.jpg?alt=media&token=42b675b6-6656-40b3-bf18-29b6ab568325',
		};

		// blog
		const catDogImg = cat_dog || {
			name: 'Cat and Dog',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Fcat_dog.jpg?alt=media&token=c467ef65-f6c8-44c2-9d46-4ce57015d173',
		};

		const laptopCodeImg = laptop_code || {
			name: 'Laptop Code',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Flaptop_code.png?alt=media&token=2149faab-2868-4d7f-886b-4a432ee57f0f',
		};

		const laptopImg = laptop || {
			name: 'Laptop',
			url: 'https://firebasestorage.googleapis.com/v0/b/davidsheinbeinengineer.appspot.com/o/images%2Flaptop.png?alt=media&token=48e84009-d9d9-43f9-a3a3-6c1d74e095be',
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
