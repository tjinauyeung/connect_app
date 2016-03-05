import React from 'react';
import Restaurant from './Restaurant';
import { Link } from 'react-router';
import jQuery from 'jquery';

class RestaurantList extends React.Component {
		constructor(){
				super();

				this.state = {
					restaurants: []
				}
		}

		reload(event) {
		  let component = this;
		  jQuery.getJSON("http://damp-everglades-70230.herokuapp.com/restaurants/", function(data){
		    component.setState({
		      restaurants: data.restaurants
		    });
		  });
		}

		componentDidMount() {
		  this.reload();
		}

		renderRestaurants(restaurant){
			return (
				<Restaurant 
					key={restaurant.id} 
					id={restaurant.id} 
					name={restaurant.name} 
					street={restaurant.street} 
					city={restaurant.city} 
					country={restaurant.country} 
					phone={restaurant.phone} 
					website={restaurant.website} 
					photo={restaurant.photo} 
					logo={restaurant.logo}
				/>

			);
		}

		render() {
			let container = {
				width: '100vw'
			}

			let content = {
				maxWidth: '1000px',
				margin: 'auto',
			}

			let text_container = {
				textAlign: 'center',
				marginTop: '34px',
				marginBottom: '42px',
			}

			let text_center = {
				fontSize: '36px',
				fontWeight: 'bold',
				paddingBottom: '5px',
				borderBottom: '5px solid black'
			}

				return (
						<div style={container}>
							<div style={content}>
								<div style={text_container}><span style={text_center}>Check out these places & meet up</span></div>
								{this.state.restaurants.map(this.renderRestaurants.bind(this), this)}
							</div>
						</div>
				);
		}
}

export default RestaurantList;