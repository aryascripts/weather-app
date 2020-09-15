import React from 'react';
import './home.component.scss';
import { SearchComponent } from '../../components/search/search.component';

export type HomeComponentProps = {};

export function HomeComponent(props: HomeComponentProps) {

	return (
		<div className="home-component">
			<div className="search-wrapper">
				<h1 className="text-center">hello ________.</h1>
				<SearchComponent />
			</div>
		</div>
	);
}