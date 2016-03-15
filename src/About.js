import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  constructor(){
	super();
	this.state = {
	  toggleAbout: true
	}
  }

  toggleAboutPage() {
	this.setState({
	  toggleAbout: !this.state.toggleAbout
	})
  }

  render() {


	//show about button
	if (this.state.toggleAbout == true) {
	  return (
		  <div className="about--closebutton">
			  <h2 onClick={this.toggleAboutPage.bind(this)}>About</h2>
		  </div>
	  );

	//show about page 
	} else {
	  return (
		<div className="about--wrapper">
		  <div className="about--content">
			<h1>Our mission</h1>
			<h2 className="about--description">
			  We're Follow. We're here to connect people through their favorite restaurants.
			  <br/>Because good food brings good people. &#9829;
			</h2>
		  </div>
		  <h2 onClick={this.toggleAboutPage.bind(this)} className="about--closebutton">Close</h2>
		  <img className="logo" src="http://www.tjinauyeung.nl/logolight.png" />
		  <footer className="about--footer">
			<h4>A React.js demo by Matt la Porte & <a href="http://www.tjinauyeung.nl" target="_blank"><span>Tjin Au Yeung</span></a> &mdash; for more info visit <a href="http://www.https://github.com/tjinauyeung/connect_app"><span>Git repo</span></a></h4>
		  </footer>
		</div>
	  );
	}
  }
}

export default About;