import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Layout from '../LayoutPage/LayoutPage';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

const GlobalStyle = createGlobalStyle`
  ${(props) => {
		switch (props.color) {
			case 'dark':
				return `
          :root {
            --wp--preset--color--slider: #f7f9fd;
			--wp--preset--color--slider--bg: #003049;

			--wp--preset--color--navBg: #f7f9fd; 
			--wp--preset--color--nav--text: #003049; 

			--wp--preset--color--headerA: #e85d04; 
			--wp--preset--color--headerB: #6a040f; 

			--wp--preset--color--subtextA: #e85d04; 
			--wp--preset--color--subtextB: #6a040f; 

			--wp--preset--color--links: #e63946; 
			--wp--preset--color--links-hover: #941122; 

			--wp--preset--color--accent: #370617; 

			--wp--preset--color--icon: #a8dadc; 
			--wp--preset--color--iconBG: #6a040f; 
			--wp--preset--color--icon-hover: #648a8c; 
			--wp--preset--color--iconBG-hover: #3a020b; 

			--wp--preset--color--backgroundA: #eae2b7;
			--wp--preset--color--backgroundB:  #a8dadc; 
          }
        `;
			default:
				return `
          :root {
            --wp--preset--color--slider: #11181f;
			--wp--preset--color--slider--bg: #f7f9fd;

			--wp--preset--color--navBg: #f7f9fd; 
			--wp--preset--color--nav--text: #003049; 

			--wp--preset--color--headerA: #003049; 
			--wp--preset--color--headerB: #a8dadc; 

			--wp--preset--color--subtextA: #003049; 
			--wp--preset--color--subtextB: #a8dadc; 

			--wp--preset--color--links: #9d4edd; 
			--wp--preset--color--links-hover: #5916b5; 
			
			--wp--preset--color--accent: #f20089; 

			--wp--preset--color--icon: #003049; 
			--wp--preset--color--iconBG: #a8dadc; 
			--wp--preset--color--icon-hover: #00122b; 
			--wp--preset--color--iconBG-hover: #648a8c; 

			--wp--preset--color--backgroundA: #a8dadc;
			--wp--preset--color--backgroundB:  #003049; 
          }
        `;
		}
	}}
`;

const App = () => {
	const [color, setColor] = useState('default');

	const handleThemeChange = (newColor) => {
		setColor(newColor);
	};

	return (
		<div className='wp-site-blocks app' id='top'>
			<GlobalStyle color={color} />
			<Header
				color={color}
				handleThemeChange={handleThemeChange}
			/>

			<Switch>
				<Route
					exact
					path='/'
					render={() => (
						<div>
							<Layout
								color={color}
								handleThemeChange={handleThemeChange}
							/>
						</div>
					)}
				/>
			</Switch>
		</div>
	);
};

export default App;
