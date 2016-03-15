import React from 'react';
import Search from './Search';
import About from './About';
import SearchButton from './SearchButton';
import RestaurantList from './RestaurantList';
import jQuery from 'jquery';
import Loader from 'react-loaders';

class FollowApp extends React.Component {
  constructor(){
    super();
    this.state = {
      request_received: false,
      request: "",
      restaurants: [],
      isLoading: true
    }
  }

  getList(tag) {
    let tagId = tag
    let component = this;
    
    jQuery.getJSON("https://still-retreat-87985.herokuapp.com/tags/" + tagId, function(data){
      component.setState({
        restaurants: data.restaurant,
        isLoading: false
      });
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

    //show searchbar if request hasn't been received
    if (this.state.request_received == false) {
      return (
        <div className="container">
          <About />
          <img className="logo" src="http://www.tjinauyeung.nl/logodark.png" />
          <div className="center--text">
            <h1>What mood are you in?</h1>
        	  <Search onChange={this.gotRequest.bind(this)} onSave={this.saveRequest.bind(this)} onRequest={this.getList.bind(this)}/>
            <h4 className="not_found_message" id="requestnotfound"><span className="invisible">.</span></h4>
          </div>
        </div>
      );

    //show loader if ajax call has not received items
    } else if (this.state.isLoading) {      
      return (
        <div className="fullscreen">
          <div className="loader"></div>
        </div> )
    
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