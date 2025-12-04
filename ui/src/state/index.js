import { apiCall, HTTP_STATUS, RESPONSE_BODY } from '../api';

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
export const ALL_RESTAURANTS = 'allRestaurants';
export const CITY = 'city';
export const SELECTED_CITY_ID = 'selectedCityId';

const noop = () => {};
const normalize = token => token.toLowerCase().replaceAll(' ', '');

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

	const handleInputFocus = () => {
		if (Boolean(state[NAV][SEARCH_TEXT])) {
			setShowRestaurantSearch(true);
		}
	};
	const handleInputBlur = () => setShowRestaurantSearch(false);

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

	const handleNavTyping = value => setState(oldState => {

		const {
			[RESTAURANTS]: {
				[ALL_RESTAURANTS]: restaurants,
			}
		} = state;

		const normalizedSearchTerm = normalize(value);
		
		let matchedRestuarants = [];

		if (Boolean(value)) {
			if (!Boolean(state[NAV][SHOW_RESTAURANT_SEARCH])){
				setShowRestaurantSearch(true);
			}
			matchedRestuarants = restaurants.filter(({ name }) => {
				return normalize(name).includes(normalizedSearchTerm);
			});
		} else if (Boolean(state[NAV][SHOW_RESTAURANT_SEARCH])){
			setShowRestaurantSearch(false);
		}

		return {
			...oldState,
			[NAV]: {
				...oldState[NAV],
				[SEARCH_TEXT]: value,
			},
			[RESTAURANTS]: {
				...oldState[RESTAURANTS],
				[SEARCH_RESULTS]: matchedRestuarants,
			}
		};
	});

	const setRestaurant = id => setState(oldState => ({
		...oldState,
		[RESTAURANTS]: {
			...oldState[RESTAURANTS],
			[SELECTED_RESTAURANT]: id,
		},
	}));

	// async
	const getRestaurants = (cityId = 1) => (
		apiCall(`/restaurants/${cityId}`).then((res) => {
			const { [RESPONSE_BODY]: restaurants } = res;

			return setState(oldState => ({
				...oldState,
				[RESTAURANTS]: {
					...oldState[RESTAURANTS],
					[ALL_RESTAURANTS]: restaurants,
				},
			}));

		}).catch((res) => {
			const { [RESPONSE_BODY]: error, [HTTP_STATUS]: status } = res;
			console.error(`getRestaurants failed with status ${status}, error: ${error}`);
		})
	);

	return {
		[NAV]: {
			setGuests,
			setDate,
			setTime,
			setShowRestaurantSearch,
			toggleShowRestaurantSearch,
			handleNavTyping,
			handleInputFocus,
			handleInputBlur,
		},
		[RESTAURANTS]: {
			setRestaurant,
			getRestaurants,
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
		[ALL_RESTAURANTS]: [],
	},
	[CITY]: {
		[SELECTED_CITY_ID]: 1,
	},
};
