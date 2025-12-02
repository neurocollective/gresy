export const GUESTS = 'guests';
export const DATE = 'date';
export const RESTAURANTS = 'restaurants';
export const GUEST_COUNT = 'guestCount';
export const TIME = 'time';
export const SELECTED_RESTAURANT = 'selectedRestaurant';

const noop = () => {};

export const buildActions = (state = {}, setState = noop) => {

	const setGuests = count => setState(oldState => ({
		[GUESTS]: {
			[GUEST_COUNT]: count,
			...oldState[GUESTS],
		},
		...oldState,
	}));

	const setDate = date => setState(oldState => ({
		[GUESTS]: {
			[DATE]: date,
			...oldState[GUESTS],
		},
		...oldState,
	}));

	const setTime = time => setState(oldState => ({
		[GUESTS]: {
			[TIME]: time,
			...oldState[GUESTS],
		},
		...oldState,
	}));

	const setRestaurant = id => setState(oldState => ({
		[RESTAURANTS]: {
			[SELECTED_RESTAURANT]: id,
			...oldState[RESTAURANTS],
		},
		...oldState,
	}));

	return {
		[GUESTS]: {
			setGuests,
			setDate,
			setTime,
		},
		[RESTAURANTS]: {
			setRestaurant,
		},
	};
};

export const DEFAULT_STATE = {
	[GUESTS]: {
		[GUEST_COUNT]: 2,
		[DATE]: '2025-12-3',
		[TIME]: '*',
	},
	[RESTAURANTS]: {
		[SELECTED_RESTAURANT]: 0,
	}
};
