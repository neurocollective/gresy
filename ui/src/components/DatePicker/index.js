import React from 'react';

const DatePicker = ({ state, actions }) => {

	const {
		nav: {
			date,
		},
		restaurants: {
			selectedRestaurant,
		},
	} = state;

	const restaurantSelected = Boolean(selectedRestaurant);

	const style = {};

	style.hidden = restaurantSelected ? 'true' : 'false';

	const chooseDate = (e) => {
		const { target: { value }} = e;
		console.log('date to set:', value);
		return actions.nav.setDate(value);
	};

	return (
		<div className="date-choice-wrapper">
			<select style={style} className="date-picker-dropdown nav-text" onChange={chooseDate} value={date} >
				<option value="2025-12-2" className="nav-text">
					December 2nd
				</option>
				<option value="2025-12-3" className="nav-text">
					December 3rd
				</option>
				<option value="2025-12-5" className="nav-text">
					December 5th
				</option>
				<option value="2025-12-6" className="nav-text">
					December 6th
				</option>
			</select>
		</div>
	);
};

export default DatePicker;
