import React from 'react';
import './home.component.scss';
import { SearchComponent } from '../../components/search/search.component';

export type HomeComponentProps = {};

export function HomeComponent(props: HomeComponentProps) {

	return (
		<div className="home-component">
			<div className="search-wrapper">
				<SearchComponent />
			</div>
		</div>
	);
}