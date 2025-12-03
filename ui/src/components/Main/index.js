import React, { Fragment } from 'react';

import RestaurantDetailPage from '../RestaurantDetailPage';
import * as state from '../../state';

const {
	RESTAURANTS,
} = state;

const Filler = () => {
	return (
		<div>
			main content will go here...
		</div>
	);
};

const Main = (state, actions) => {

	const {
		[RESTAURANTS]: {
			selectedRestaurant,
		} = {},
	} = state;

	const restaurantSelected = Boolean(selectedRestaurant);

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
