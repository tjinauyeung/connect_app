import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Connect_app from './Connect_app';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Connect_app} />
		</Route>
	</Router>
), document.getElementById('root'));