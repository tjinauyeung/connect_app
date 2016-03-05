import React from 'react';
import Search from './Search';
import About from './About';
import SearchButton from './SearchButton';
import RestaurantList from './RestaurantList';
import jQuery from 'jquery';


class FollowApp extends React.Component {
  constructor(){
    super();
    this.state = {
        request_received: false,
        request: "",
        restaurants: []
    }
  }

  getList(tag) {
    let tagId = tag
    let component = this;
    
    jQuery.getJSON("http://damp-everglades-70230.herokuapp.com/tags/" + tagId, function(data){
      component.setState({
        restaurants: data.restaurant
      });
      console.log(component.state.restaurants);
    });
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
        	  <Search onChange={this.gotRequest.bind(this)} onSave={this.saveRequest.bind(this)} onRequest={this.getList.bind(this)}/>
            <h4 style={notfoundmessage} id="requestnotfound"><span style={invisible}>.</span></h4>
          </div>
        </div>
      );
    
    //show listings after request has been received
    } else if (this.state.restaurants != []) {
      return (
        <div>
          <About />
          <a href="/"><SearchButton search={this.gotRequest.bind(this)} /></a>
          <RestaurantList restaurants={this.state.restaurants} request={this.state.request} />
        </div>
      );
    }

  }
}

export default FollowApp;