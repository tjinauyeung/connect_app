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

		//start styling
		let about = {
			position: 'fixed',
			right: '40px',
			top: '20px',
			zIndex: '2'
		}
		let wrapper = {
			position: 'fixed',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			zIndex: '4',
			background: '-webkit-linear-gradient(top, #e06471 0%,#ff7c7c 100%)',
			display: 'flex',
			height: '100vh',
			width: '100vw',
			justifyContent: 'center',
			alignItems: 'center'
		}
		let close = {
			position: 'fixed',
			top: '20px',
			right: '40px',
			zIndex: '3',
			color: 'white'
		}
		let content = {
			textAlign: 'center',
			color: 'white',
			padding: '20%'
		}
		let logo = {
      position: 'fixed',
      top: '30px',
      left: '0px',
      right: '0px',
      width: '450px',
      margin: 'auto',
      zIndex: '4'
    }
    let mission = {
    	lineHeight: '35px',
    	fontWeight: 'normal'
    }
    let footer = {
    	zIndex: '12',
    	position: 'fixed',
    	bottom: '20px',
    	left: '40px',
    	color: '#fff'
    }
		//end styling


		//show about button
		if (this.state.toggleAbout == true) {
			return (
					<div style={about}>
							<h2 onClick={this.toggleAboutPage.bind(this)}>About</h2>
					</div>
			);

		//show about page	
		} else {
			return (
				<div style={wrapper}>
					<div style={content}>
						<h1>Our mission</h1>
						<h2 style={mission}>
							We're Follow. We're here to connect people through their favorite restaurants.
							<br/>Because good food brings good people. &#9829;
						</h2>
					</div>
					<h2 onClick={this.toggleAboutPage.bind(this)} style={close}>Close</h2>
					<img style={logo} src="http://www.tjinauyeung.nl/logolight.png" />
					<footer style={footer}>
            <h4>A React.js demo by Matt & <a href="http://www.tjinauyeung.nl" target="_blank">Tjin</a>
             - visit <a href="http://www.https://github.com/tjinauyeung/connect_app">github</a> for more info</h4>
          </footer>
				</div>
			);
		}
	}
}

export default About;