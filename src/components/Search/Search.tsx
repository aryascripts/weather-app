import React, { useContext, useEffect, useState } from 'react';
import useData from '../../apis/hooks/useData';
import { Environment } from '../../config/Environment';
import { SearchBar } from './SearchBar/SearchBar';
import {SearchResult, WeatherData} from './SearchResult/SearchResult';
import './Search.scss';
import { City, CityContext } from '../../stores/CityContext';

interface Props {

}
export const Search: React.FC = (props: Props) => {


    const [data, query, setQuery, loading, error] =
        useData("https://api.openweathermap.org/data/2.5/weather");

    const context = useContext(CityContext);

    const handleSearchUpdate = (zip: string) => {
        if (zip) {
            const params = {
                zip,
                appid: Environment.appid,
                units: 'metric'
            };
        setQuery(params);
        }
    }

    const  [result, setResult] = 
        useState<WeatherData | undefined>(undefined)

    useEffect(() => {
        if (data && data.main) {
            const result: WeatherData = {
                name: data.name,
                high: data.main.temp_min,
                low: data.main.temp_max,
                current: data.main.temp
            };
            setResult(result);
        }

    }, [data])

    return (
        <>
            <SearchBar handleSearchUpdate={handleSearchUpdate}/>

            {/* Display Results */}
            { result && 
                <div className="search-plus-wrap">
                    <SearchResult data={result}/>
                    <div onClick={() => {
                        const item: City = {
                            name: result.name,
                            lat: '0',
                            lon: '0'
                        }
                        context?.setCities([...context.cities, item]);
                    }} className="plus-btn pointer">+</div>
                </div> 
            }

            {JSON.stringify(context?.cities)}
        </>
    )

}