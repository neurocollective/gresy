import React from 'react';

const SearchResult = ({ result = {}, onClick }) => {
	return (
		<div onClick={() => onClick(result.id)} role="button">
			<img style={{ width: '30px' }} src={result.imageUrl} />
			<span>{result.name}</span>
		</div>
	);
};

const imageUrl = 'https://image.resy.com/3/003/1/6599/f5911a01f7d5337271d2f6a37d1d06151a924b50/jpg/1:1/800';

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
		nav: {
			searchText,
		},
	} = state;

	const searchResults = [{ name: 'Tanoreen', id: 1, imageUrl }];

	const onType = (e) => {
		const { target: { value }} = e;
		console.log('typed value:', value);
		handleNavTyping(value);
	};

	const onClick = id => setRestaurant(id);

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
			<div className="search-dropdown-wrapper">
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
