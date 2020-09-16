import React, { useState, useEffect } from 'react';
import './home.component.scss';
import { SearchComponent } from '../../components/search/search.component';
import { LocalStorageItem } from '../../model/LocalStorageItem.enum';

export type HomeComponentProps = {};

export function HomeComponent(props: HomeComponentProps) {

	const [name, setName] = useState('');

	useEffect(() => {
		const current = localStorage.getItem(LocalStorageItem.USER_NAME) || '';
		setName(current);
	});

	const updateName = (event: any) => {
		const val = event.target.value;
		setName(val);
		localStorage.setItem(LocalStorageItem.USER_NAME, val);
	};

	return (
		<div className="home-component">
			<div className="search-wrapper">
				<h1 className="text-center">hello <input value={name} onChange={updateName} type="text" placeholder="your beautiful name" />.</h1>
				<SearchComponent />
			</div>
		</div>
	);
}