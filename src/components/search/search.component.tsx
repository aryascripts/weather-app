import React, { useState } from 'react';
import './search.component.scss';

export type SearchComponentProps = {};

export function SearchComponent(props: SearchComponentProps) {
	const numbers = /^[0-9\b]+$/;

	const [zip, setZip] = useState('');


	const updateInputState = (event: any) => {
		const val = event.target.value;
		if (val.length < 6 && numbers.test(val)) {
			setZip(val);
		}
		if (val.length === 5) {
			// TODO - call the service to fetch the current weather
		}

	}

	return (
		<div className="search-component">
			<div className="search-bar">
				<input type="text" onChange={updateInputState} value={zip} placeholder="search city (zip)" />
			</div>
			<div className="search-results">

			</div>
		</div>
	);
}