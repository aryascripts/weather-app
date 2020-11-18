import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CityContext } from '../../stores/CityContext';
import './WeatherDetails.scss';

interface Props {}

export function WeatherDetails(props: Props) {
    const {} = props;

    const location = useLocation();
    const cityContext = useContext(CityContext);

    useEffect(() => {
        const search = convertSearchToObject(location.search);
        const cityName = search.city;
        const selected = cityContext?.cities.find(city => cityName === city.name);
        cityContext?.setSelectedCity(selected);
    }, [location.search]);

    return (
        <div className="weather-details">
            {JSON.stringify(cityContext?.selectedCity)}
            
        </div>
    )
}

function convertSearchToObject(search: string = '') {
    // search = '?city=Fairfield&user=1234';
    const subStr = search?.split('?')[1];
    if (subStr?.length) {
        const allStrings = subStr.split('&');
        const params: {[key: string]: string} = {};
        allStrings.forEach(item => {
            const split = item.split('=');
            params[split[0]] = split[1];
        });
        return params
    }
    return {}
}
