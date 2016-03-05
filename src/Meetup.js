import React from 'react';
import { Link } from 'react-router';
import About from './About';
import jQuery from 'jquery';
import Forum from './Forum';

import SearchButton from './SearchButton';

class Meetup extends React.Component {
	constructor(){
		super();

		this.state = {
			restaurant: [],
			tags: [],
			posts: []
		}
	}

  findRestaurant() {
    let RestaurantId = this.props.params.restaurantId
    let component = this;
    let apiUrl = `https://still-retreat-87985.herokuapp.com/restaurants/${RestaurantId}.json`;
    
    jQuery.getJSON(apiUrl, function(data){
    	console.log(data);
      component.setState({
        restaurant: data.restaurant,
        tags: data.tags,
        posts: data.posts
      });
    });
  }

  componentDidMount() {
  	this.findRestaurant();
  }


	render() {
		console.log(this.state);
		//begin styling
    let restaurant = {
      borderRadius: '10px',
      background: 'white',
      margin: '10px',
      padding: '20px',
      width: '450px',
      display: 'inline-block',
      verticalAlign: 'top'
    }
    let list = {
      listStyleType: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '30px',
      padding: '0',
    }
    let listuser = {
      listStyleType: 'none',
      padding: '0'
    }
    let title = {
      textTransform: 'uppercase',
      color: '#FE4F72',
      textAlign: 'center',
      marginTop: '0',
      lineHeight: '40px'
    }
    let photo = {
      width: '450px',
      height: '250px',
      position: 'relative',
      left: '-20px'
    }
    let logo = {
      maxWidth: '50%',
      margin: 'auto',
      display: 'block'
    }
    let userthumb = {
      borderRadius: '50%',
      height: '30px',
      width: '30px'
    }
    let useritem = {
      display: 'inline-block',
      paddingTop: '10px',
      paddingRight: '10px'
    }
		let content = {
			maxWidth: '1000px',
			margin: 'auto',
		}
    //end styling

		return (
			<div style={content}>
				<About />
				<SearchButton />

        <div style={restaurant}>
          <ul style={list}>
            <li><h1 style={title}>{this.state.restaurant.name}</h1></li>
            <li><img style={photo} src={this.state.restaurant.photo} /></li>
            <li>{this.state.restaurant.street}</li>
            <li>{this.state.restaurant.city}</li>
            <li>{this.state.restaurant.phone}</li>
            <li><strong>Interested:</strong></li>
            <ul style={listuser}>
              <li style={useritem} ><img style={userthumb} src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/></li>
              <li style={useritem} ><img style={userthumb} src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/></li>
              <li style={useritem} ><img style={userthumb} src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/></li>
              <li style={useritem} ></li>
            </ul>
          </ul>
        </div>
        	
        <Forum posts={this.state.posts}/>
			</div>
		);
	}
}

export default Meetup;