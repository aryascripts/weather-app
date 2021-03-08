import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { WeatherDetails } from '../../components/WeatherDetails/WeatherDetails';

import './WeatherInfo.scss';

const WeatherInfo: React.FC= (props) => {


    return <div className="weather-info">
        <Sidebar />

        <WeatherDetails />

    </div>;
}
export {WeatherInfo};