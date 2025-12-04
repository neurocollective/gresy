import React from 'react';
import { SEARCH_RESULTS, SHOW_RESTAURANT_SEARCH, NAV, RESTAURANTS } from '../../state';

const SearchResult = ({ result = {}, onClick }) => {
	return (
		<div className="search-result-wrapper" onClick={() => onClick(result.id)} role="button">
			<img className="search-result-image" src={result.imageURL} />
			<span>{result.name}</span>
		</div>
	);
};

const NoResults = () => {
	return (
		<div style={{ color: 'black' }}>{'No Results'}</div>
	);
};

const SearchInput = ({ state, actions }) => {
	const {
		nav: {
			handleInputFocus,
			handleInputBlur,
			handleNavTyping,
		},
		restaurants: {
			setRestaurant,
		}
	} = actions;

	const {
		[NAV]: {
			searchText,
			[SHOW_RESTAURANT_SEARCH]: showRestaurantSearch,
		},
		[RESTAURANTS]: {
			[SEARCH_RESULTS]: searchResults,
		}
	} = state;

	const onType = (e) => {
		const { target: { value }} = e;
		console.log('typed value:', value);
		handleNavTyping(value);
	};

	const onClick = id => setRestaurant(id);

	const visibilityStyle = {
		visibility: (showRestaurantSearch) ? 'visible' : 'hidden',
	};

	return (
		<div style={{ width: '100%' }}>
			<input
				value={searchText}
				type="text"
				className="nav-search-input"
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				onChange={onType}
			/>
			<div className="search-dropdown-wrapper" style={visibilityStyle} >
				{searchResults.map(result => (
					<SearchResult result={result} onClick={onClick} />
				))}
				<hr style={{ color: '#eaeaea' }} />
				{!searchResults.length ? <NoResults /> : ''}
			</div>
		</div>
	);
};

export default SearchInput;
