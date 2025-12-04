import React, { Fragment } from 'react';

import RestaurantDetailPage from '../RestaurantDetailPage';
import * as state from '../../state';

const {
	RESTAURANTS,
	SELECTED_RESTAURANT,
} = state;

const Filler = () => {
	return (
		<div>
			main content will go here...
		</div>
	);
};

const Main = ({ state, actions }) => {

	// console.log('state:', state);
	// console.log('state.restaurants:', state.restaurants);

	const {
		[RESTAURANTS]: {
			[SELECTED_RESTAURANT]: selectedRestaurant,
		},
	} = state;

	const restaurantSelected = Boolean(selectedRestaurant);
	// console.log('restaurantSelected', restaurantSelected);
	// console.log('selectedRestaurant', state?.[RESTAURANTS]?.[SELECTED_RESTAURANT]);
	// console.log('constants:', SELECTED_RESTAURANT, RESTAURANTS);

	return (
		<Fragment>
			<br />
			<section className="main-wrapper">
				{restaurantSelected ? (
					<RestaurantDetailPage state={state} actions={actions} />
				) : <Filler />}
			</section>
			<br />
		</Fragment>
	);
};

export default Main;
