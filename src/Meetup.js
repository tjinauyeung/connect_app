import React from 'react';
import { Link } from 'react-router';
import About from './About';

class Meetup extends React.Component {
	constructor(){
		super();
	}

	render() {

		return (
			<div>
				<About />
				<SearchButton />
				<h1>Here people can meet up</h1>
				<Link to="/">Click here </Link>
			</div>
		);
	}
}

export default Meetup;