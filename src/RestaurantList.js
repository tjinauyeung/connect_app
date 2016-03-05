import React from 'react';
import Restaurant from './Restaurant';
import { Link } from 'react-router';

class RestaurantList extends React.Component {
		constructor(){
				super();
		}

		componentDidMount() {
			this.setState({
				restaurants: this.props.restaurants
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
								{this.props.restaurants.map(this.renderRestaurants.bind(this), this)}
							</div>
						</div>
				);
		}
}

export default RestaurantList;