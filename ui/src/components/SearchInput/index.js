import React from 'react';
import { SEARCH_RESULTS, SHOW_RESTAURANT_SEARCH, NAV, RESTAURANTS } from '../../state';

const SearchResult = ({ result = {}, handleClick }) => {

	const localClickHandler = () => handleClick(result.id);

	return (
		<div className="search-result-wrapper" onClick={localClickHandler}>
			<img className="search-result-image" src={result.imageURL} />
			&nbsp;
			&nbsp;
			<span className="search-result-text">{result.name}</span>
		</div>
	);
};

const NoResults = () => {
	return (
		<div className="search-result-text" style={{ color: 'black' }}>{'No Results'}</div>
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

	const onClick = id => {
		console.log('id:', id);
		setRestaurant(id);
	};

	const visibilityStyle = {
		visibility: (showRestaurantSearch) ? 'visible' : 'hidden',
	};

	return (
		<div style={{ width: '100%' }}>
			<input
				value={searchText}
				type="text"
				className="nav-search-input"
				// onFocus={handleInputFocus}
				// onBlur={handleInputBlur}
				onChange={onType}
				placeholder="Search restaurants, cuisine, etc."
			/>
			<div className="search-dropdown-wrapper" style={visibilityStyle} >
				{searchResults.map(result => (
					<SearchResult result={result} handleClick={onClick} />
				))}
				<hr style={{ color: '#eaeaea' }} />
				{!searchResults.length ? <NoResults /> : ''}
			</div>
		</div>
	);
};

export default SearchInput;
