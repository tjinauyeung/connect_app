import React from 'react';
import model from './Model';
import { Link } from 'react-router';
import Loader from 'react-loaders';

class Search extends React.Component {
	submitRequest(event) {
		event.preventDefault();

		let component = this
		let request = this.refs.request.value;

		function onDone(tag){
			component.props.onChange();
			component.props.onSave(request);
			component.props.onRequest(tag);
		}
	

		model.post(request, onDone);
		this.refs.request.value = "";
	}

  render() {

		let input = {
			height: '60px',
			width: '550px',
			fontSize: '22px',
			fontWeight: 'bold',
			color: '#5626b2',
			borderRadius: '10px',
			outline: 'none',
			border: 'none',
			padding: '20px'
		}

    return (
        <form onSubmit={this.submitRequest.bind(this)}>
        	<input id="userinput" style={input} ref="request" placeholder={this.props.requestdescription} />
        </form>
    );
  }
}

export default Search;