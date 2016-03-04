import React from 'react';
import model from './Model';

class Appform extends React.Component {

  
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
        	<p>What would you like to do?</p>
        	<input style={input} ref="request" placeholder="I'm in the mood for thai" />
        </form>
    );
  }
}

export default Appform;