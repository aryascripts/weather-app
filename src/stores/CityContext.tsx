import React, {createContext, useEffect, useState} from 'react';
import { CITIES_KEY } from '../config/Variables';


export interface City {
    name: string;
    lat: string;
    lon: string;
}

interface ICityContext {
    cities: City[];
    setCities: React.Dispatch<React.SetStateAction<City[]>>;
}

const CityContext = createContext<ICityContext | undefined>(undefined);

const CityProvider: React.FC = props => {

    const [cities, setCities] = useState<City[]>(() => {
        return JSON.parse(localStorage.getItem(CITIES_KEY) || '[]');
    });
    const value = {
        cities, setCities
    };

    useEffect(() => {
        localStorage.setItem(CITIES_KEY, JSON.stringify(cities));
    }, [cities])

    return <CityContext.Provider value={value}>
        {props.children}
    </CityContext.Provider>
}

export {CityProvider, CityContext}