import React from 'react';

import Logo from '../Logo';
import SearchLogo from '../SearchLogo';
import PersonIcon from '../PersonIcon';

const TopNav = () => {
    return (
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
					<div>
						<PersonIcon />
					</div>
				</div>
			</div>
		</nav>
    );
};

export default TopNav;
