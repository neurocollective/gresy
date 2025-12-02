import React from 'react';

const DatePicker = ({ state, actions }) => {

	const {
		guests: {
			date,
		}
	} = state;

	const chooseDate = (e) => {
		const { target: { value }} = e;
		return actions.setDate(value);
	};

	return (
		<div class="date-choice-wrapper">
			<select onChange={chooseDate} value={date} >
				<option value="2025-12-2">
					December 2nd
				</option>
				<option value="2025-12-3">
					December 3rd
				</option>
				<option value="2025-12-5">
					December 5th
				</option>
				<option value="2025-12-6">
					December 6th
				</option>
			</select>
		</div>
	);
};

export default DatePicker;
