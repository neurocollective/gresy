export const GUESTS = 'guests';
export const NAV = 'nav';
export const DATE = 'date';
export const SHOW_RESTAURANT_SEARCH = 'showRestaurantSearch';
export const RESTAURANTS = 'restaurants';
export const GUEST_COUNT = 'guestCount';
export const TIME = 'time';
export const SELECTED_RESTAURANT = 'selectedRestaurant';
export const SEARCH_TEXT = 'searchText';
export const SEARCH_RESULTS = 'searchResults';

const noop = () => {};

export const buildActions = (state = {}, setState = noop) => {

	const setGuests = count => setState(oldState => ({
		...oldState,
		[NAV]: {
			...oldState[NAV],
			[GUEST_COUNT]: count,
		},
	}));

	const setDate = date => setState(oldState => ({
		...oldState,
		[NAV]: {
			...oldState[NAV],
			[DATE]: date,
		},
	}));

	const setTime = time => setState(oldState => ({
		...oldState,
		[NAV]: {
			...oldState[NAV],
			[TIME]: time,
		},
	}));

	const setShowRestaurantSearch = trueOrFalse => setState(oldState => ({
		...oldState,
		[NAV]: {
			...oldState[NAV],
			[SHOW_RESTAURANT_SEARCH]: trueOrFalse,
		},
	}));

	const toggleShowRestaurantSearch = () => setState(oldState => ({
		...oldState,
		[NAV]: {
			...oldState[NAV],
			[SHOW_RESTAURANT_SEARCH]: !oldState[NAV][SHOW_RESTAURANT_SEARCH],
		},
	}));

	const handleNavTyping = value => setState(oldState => ({
		...oldState,
		[NAV]: {
			...oldState[NAV],
			[SEARCH_TEXT]: value,
		},
	}));

	const setRestaurant = id => setState(oldState => ({
		...oldState,
		[RESTAURANTS]: {
			...oldState[RESTAURANTS],
			[SELECTED_RESTAURANT]: id,
		},
	}));



	return {
		[NAV]: {
			setGuests,
			setDate,
			setTime,
			setShowRestaurantSearch,
			toggleShowRestaurantSearch,
			handleNavTyping,
		},
		[RESTAURANTS]: {
			setRestaurant,
		},
	};
};

export const DEFAULT_STATE = {
	[NAV]: {
		[GUEST_COUNT]: 2,
		[DATE]: '2025-12-3',
		[TIME]: '*',
		[SHOW_RESTAURANT_SEARCH]: false,
		[SEARCH_TEXT]: '',
	},
	[RESTAURANTS]: {
		[SELECTED_RESTAURANT]: 0,
		[SEARCH_RESULTS]: [],
	},
};
