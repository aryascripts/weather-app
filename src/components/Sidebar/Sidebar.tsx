import React, { useContext } from 'react';
import { CityContext } from '../../stores/CityContext';
import { City } from '../../stores/interfaces';
import { SearchResult } from '../Search/SearchResult/SearchResult';
import './Sidebar.scss';
import {history} from './../../stores/history';

const Sidebar: React.FC = props => {

    const cityContext = useContext(CityContext);

    const handleCityClick = (city: City) => {
        // route to the city name ?name=city.name
        history.push(`/weather?city=${city.name}`)
    }

    return <div className="sidebar">
        {
            cityContext?.cities.map((city: City) => {
                return <SearchResult 
                        key={city.name}
                        onClick={() => {handleCityClick(city)}}
                        data={city} />
            })
        }
    </div>
}

export {Sidebar};