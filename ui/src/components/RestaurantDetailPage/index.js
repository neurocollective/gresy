import React, { useEffect } from 'react';
import {
	NAV,
	RESTAURANTS,
	SELECTED_RESTAURANT,
	ALL_RESTAURANTS,
	GUEST_COUNT,
	DATE,
	DISPLAY_INVENTORY,
} from '../../state';

const displayTime = (beginTime) => {
	const string = String(beginTime - 1200);
	return string.slice(0,1) + ":" + string.slice(1); 
};

const Inventory = ({ inventory, actions, handleClick }) => {

	const {
		['inventory_id']: inventoryId,
		beginTime,
		seatCount,
	} = inventory;


	const clicker = () => actions[RESTAURANTS].reserveInventory(inventoryId);

	return (
		<div className="inventory-wrapper" key={inventoryId} onClick={clicker} >
			{displayTime(beginTime)}
		</div>
	);
};

const InventoryDisplay = ({ displayInventory, actions }) => {

	if (!displayInventory.length) {
		return <div className="inventory-list-wrapper">No reservations available</div>
	}

	return (
		<div className="inventory-list-wrapper">
			{displayInventory.map(inventory => (
				<Inventory inventory={inventory} actions={actions} />
			))}
		</div>
	);
}

const DetailNav = ({ state, actions }) => {

	const {
		[NAV]: {
			[GUEST_COUNT]: guestCount,
			[DATE]: date,
		},
		[RESTAURANTS]: {
			[SELECTED_RESTAURANT]: selectedRestaurant,
		}
	} = state;
	const {
		[RESTAURANTS]: {
			getInventoryForRestaurant
		}
	} = actions;

	// useEffect(() => {
	// 	getInventoryForRestaurant(selectedRestaurant, guestCount, date);
	// }, []);

	return (
		<div className="detail-nav-wrapper">
			<div>
				<div>
					<label>Guests</label>
				</div>
				{guestCount} guests
			</div>
			<div>
				<div>
					<label>Date</label>
				</div>
				{date}
			</div>
			<div>
				<div>
					<label>Time</label>
				</div>
				All Times
			</div>
		</div>
	);

};

const RestaurantDetailPage = ({ state, actions }) => {

	const {
		[RESTAURANTS]: {
			[SELECTED_RESTAURANT]: selectedRestaurant,
			[ALL_RESTAURANTS]: allRestaurants,
			[DISPLAY_INVENTORY]: displayInventory,
		},
	} = state;

	const restaurant = allRestaurants.find(({ id }) => id === selectedRestaurant);

	return (
		<section className="detail-page-wrapper">
			<div className="detail-column-one detail-column">
				<h1>{restaurant.name}</h1>
				<h3>Why We Like It</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
				</p>
				<br />
				<DetailNav state={state} actions={actions} />
				<InventoryDisplay displayInventory={displayInventory} actions={actions} />
			</div>
			<div className="detail-column-two detail-column">
				<img className="detail-image" src={restaurant.imageURL} />
			</div>
		</section>
	)
};


export default RestaurantDetailPage;
