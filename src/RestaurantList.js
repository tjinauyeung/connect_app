import React from 'react';
import Restaurant from './Restaurant';
import { Link } from 'react-router';

class RestaurantList extends React.Component {
	constructor(){
		super();
	}

	componentDidMount() {
		this.setState({
			restaurants: this.props.restaurants,
			isLoading: false
		})
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
		)
	}

	render() {

		return (
			<div className="restaurant--container">
				<div className="restaurant--content">
					<div className="restaurant--text--container"><span className="restaurant--title">Check out these places & meet up</span></div>
					{this.props.restaurants.map(this.renderRestaurants.bind(this), this)}
				</div>
			</div>
		);
	}
}

export default RestaurantList;