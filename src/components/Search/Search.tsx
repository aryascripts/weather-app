import React, { useContext, useEffect, useState } from 'react';
import useData from '../../apis/hooks/useData';
import { Environment } from '../../config/Environment';
import { SearchBar } from './SearchBar/SearchBar';
import {SearchResult} from './SearchResult/SearchResult';
import './Search.scss';
import { CityContext } from '../../stores/CityContext';
import { City } from '../../stores/interfaces';
import {SearchContext} from './../../stores/SearchContext';

interface Props {

}
export const Search: React.FC = (props: Props) => {

    const [data, query, setQuery, loading, error] =
        useData("https://api.openweathermap.org/data/2.5/weather");

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

    const cityContext = useContext(CityContext);
    const searchContext = useContext(SearchContext);

    useEffect(() => {
        if (data && data.main) {
            const result: City = {
                name: data.name,
                weather: {
                    high: data.main.temp_min,
                    low: data.main.temp_max,
                    current: data.main.temp    
                },
            };
            searchContext?.setResult(result);
        }

    }, [data])

    return (
        <>
            <SearchBar handleSearchUpdate={handleSearchUpdate}/>

            {/* Display Results */}
            { searchContext?.result && 
                <div className="search-plus-wrap">
                    <SearchResult data={searchContext.result}/>
                    <div onClick={() => {
                        if (searchContext.result) {
                            cityContext?.setCities([...cityContext.cities, searchContext.result]);
                        }
                    }} className="plus-btn pointer">+</div>
                </div> 
            }
        </>
    )

}