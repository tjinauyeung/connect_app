import React from 'react';

class SearchButton extends React.Component {
	constructor(){
		super();
	}

	search() {
		this.props.search();
	}

	render() {

		let searchbtn = {
      position: 'fixed',
      height: '50px',
      width: '50px',
      top: '30',
      left: '40',
      imageRendering: 'auto'
		}

		return (
					<img style={searchbtn} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_arrow_back_48px-128.png"/>);
	}
}

export default SearchButton;