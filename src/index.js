import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Meetup from './Meetup';
import FollowApp from './FollowApp';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={FollowApp} />
			<Route path="/Meetup/:restaurantId" component={Meetup} />
		</Route>
	</Router>
), document.getElementById('root'));