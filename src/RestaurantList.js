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
		  jQuery.getJSON("http://mighty-mountain-56231.herokuapp.com/restaurants", function(data){
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
				margin: 'auto'
			}

			let text_center = {
				textAlign: 'center',
				marginTop: '40px',
				marginBottom: '40px'
			}

				return (
						<div style={container}>
							<div style={content}>
								<h2 style={text_center}>{this.props.request}</h2>
								{this.state.restaurants.map(this.renderRestaurants.bind(this), this)}
							</div>
						</div>
				);
		}
}

export default RestaurantList;