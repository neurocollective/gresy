import React from 'react';

import GresyLogo from '../GresyLogo';
import SearchLogo from '../SearchLogo';
import PersonIcon from '../PersonIcon';
import DatePicker from '../DatePicker';
import SearchInput from '../SearchInput';

const TopNav = ({ state, actions }) => {

	const {
		nav: {
			date,
			time,
			guestCount,
			setShowRestaurantSearch,
			toggleShowRestaurantSearch,
		},
		restaurants: {
			selectedRestaurant,
		}
	} = state;

	const isAllDay = time === '*';

	const handleInputFocus = () => {
		console.log('FOCUS');
	};

	const handleInputBlur = () => {
		console.log('BLUR');
	};

    return (
    	<div className="main-nav-wrapper">
			<nav className="main-nav">
				<div style={{ 'padding-top': '2px' }}>
					<GresyLogo />
				</div>
				<div className="nav-component">
					&nbsp;
					&nbsp;
					<span className="nav-text">New York</span>
				</div>
				<div className="nav-component">
					&nbsp;
					&nbsp;
					<div className="nav-search-wrapper">
						<div className="nav-search-logo">
							<SearchLogo />
						</div>
						<SearchInput state={state} actions={actions} />
					</div>
				</div>
				<div className="nav-component nav-component-fat-space"></div>
				<div className="nav-component nav-text">
					<PersonIcon state={state} actions={actions} />
					{String(guestCount ?? 2)}
				</div>
				<div className="nav-component nav-component-space nav-text"></div>
				<div className="nav-component">
					<div>
						<DatePicker state={state} actions={actions} />
					</div>
				</div>
				<div className="nav-component nav-component-space"></div>
				<div className="nav-component nav-text">
					{isAllDay ? 'All Day' : String(time)}
				</div>
				<div className="nav-component nav-component-space"></div>
				<div className="nav-component">
					<div className="profile-image-wrapper">
						<img className="profile-image" src="glenn_hinks.jpg" />
					</div>
				</div>
			</nav>
		</div>
    );
};

export default TopNav;
