import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App/App';
import 'bootstrap/dist/css/bootstrap.css';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<Route
				render={({ history }) => <App history={history} />}
			/>
		</React.StrictMode>
	</Router>,
	document.getElementById('root')
);
