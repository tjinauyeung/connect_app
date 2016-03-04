import React from 'react';
import model from './Model';

class Appform extends React.Component {

  
  onDone() {
  	console.log("I'm done.");
  }


	submitRequest(event) {
		event.preventDefault();

		let request = this.refs.request.value;


		model.post(request);

		this.refs.request.value = "";
	}

  render() {

	let input = {
		height: '40px',
		width: '500px',
		fontSize: '22px'
	}


    return (
        <form onSubmit={this.submitRequest.bind(this)}>
        	<p id="instruction">What would you like to do?</p>
        	<input id="userinput" style={input} ref="request" placeholder="" />
        </form>
    );
  }
}

export default Appform;