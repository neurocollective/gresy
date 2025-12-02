import React from 'react';

import Logo from '../Logo';
import SearchLogo from '../SearchLogo';
import PersonIcon from '../PersonIcon';
import DatePicker from '../DatePicker';

const TopNav = ({ state, actions }) => {

	const {
		guests: {
			date,
		}
	} = state;

    return (
    	<div class="main-nav-wrapper">
			<nav class="main-nav">
				<div>
					<Logo />
				</div>
				<div class="nav-component">
					&nbsp;
					&nbsp;
					<span class="city-name">New York</span>
				</div>
				<div class="nav-component">
					&nbsp;
					&nbsp;
					<div class="nav-search-wrapper">
						<div class="nav-search-logo">
							<SearchLogo />
						</div>
						<div>
							<input type="text" class="nav-search-input" />
						</div>
					</div>
				</div>
				<div class="nav-component">
					<PersonIcon />
					{String(state.guestCount ?? 2)}
				</div>
				<div class="nav-component">
					<div>
						<DatePicker state={state} actions={actions} />
					</div>
				</div>
				<div class="nav-component">
					{state.time === '*' ? 'All Day' : String(state.time)}
				</div>
				<div class="nav-component">
					<div class="profile-image-wrapper">
						<img class="profile-image" src="glenn_hinks.jpg" />
					</div>
				</div>
			</nav>
		</div>
    );
};

export default TopNav;
