import React from 'react';
import Search from './Search';
import About from './About';
import SearchButton from './SearchButton';
import RestaurantList from './RestaurantList';


class FollowApp extends React.Component {
  constructor(){
    super();
    this.state = {
        request_received: false,
        request: ""
    }
  }

  gotRequest(){
    this.setState({
      request_received: !this.state.request
    })
  }

  saveRequest(request){
    this.setState({
      request: request
    })
  }

  
  render() {

    //start styling
  	let container = {
  		display: 'flex',
  		height: '100vh',
  		width: '100vw',
  		justifyContent: 'center',
  		alignItems: 'center'
  	}
    let invisible = {
      color: '#FFE6EB'
    }
    let text_center = {
      textAlign: 'center'
    }
    let notfoundmessage = {
      fontFamily: 'helvetica',
      fontWeight: '100'
    }
    let logo = {
      position: 'fixed',
      top: '50px',
      left: '300px',
      zIndex: '-1'
    }
    //end styling 


    //show searchbar if request hasn't been received
    if (this.state.request_received == false) {
      return (
        <div style={container}>
          <About />
          <img style={logo} src="http://www.tjinauyeung.nl/logodark.png" />
          <div style={text_center}>
            <h2>What mood are you in right now?</h2>
        	  <Search onChange={this.gotRequest.bind(this)} onSave={this.saveRequest.bind(this)} />
            <h4 style={notfoundmessage} id="requestnotfound"><span style={invisible}>.</span></h4>
          </div>
        </div>
      );
    
    //show listings after request has been received
    } else {
      return (
        <div>
          <About />
          <a href="/"><SearchButton search={this.gotRequest.bind(this)} /></a>
          <RestaurantList request={this.state.request} />
        </div>
      );
    }

  }
}

export default FollowApp;