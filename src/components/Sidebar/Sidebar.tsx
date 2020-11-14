import React, { useContext } from 'react';
import { CityContext } from '../../stores/CityContext';
import { City } from '../../stores/interfaces';
import { SearchResult } from '../Search/SearchResult/SearchResult';
import './Sidebar.scss';

const Sidebar: React.FC = props => {

    const cityContext = useContext(CityContext);

    return <div className="sidebar">
        {
            cityContext?.cities.map((city: City) => {
                return <SearchResult data={city} />
            })
        }
    </div>
}

export {Sidebar};