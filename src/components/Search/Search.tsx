import React, { useContext, useEffect, useState } from "react";
import useData from "../../apis/hooks/useData";
import { Environment } from "../../config/Environment";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResult } from "./SearchResult/SearchResult";
import "./Search.scss";
import { CityContext } from "../../stores/CityContext";
import { City } from "../../stores/interfaces";
import { SearchContext } from "./../../stores/SearchContext";
import { history } from "./../../stores/history";

export const Search: React.FC = (props) => {
  const [data, query, setQuery, loading, error] = useData(
    "https://api.openweathermap.org/data/2.5/weather"
  );

  const handleSearchUpdate = (zip: string) => {
    if (zip) {
      const params = {
        zip,
        appid: Environment.appid,
        units: "metric",
      };
      setQuery(params);
    }
  };

  const cityContext = useContext(CityContext);
  const searchContext = useContext(SearchContext);

  useEffect(() => {
    if (data?.name) {
      const result: City = {
        name: data.name,
        lat: data.coord?.lat,
        lon: data.coord?.lon,
        weather: {
          high: data.main?.temp_min,
          low: data.main?.temp_max,
          current: data.main?.temp,
        },
      };
      searchContext?.setResult(result);
    }
  }, [data]);

  console.log(searchContext?.result);

  return (
    <>
      <SearchBar handleSearchUpdate={handleSearchUpdate} />

      {/* Display Results */}
      {searchContext?.result && (
        <div className="search-plus-wrap">
          <SearchResult data={searchContext.result} />
          <div
            onClick={() => {
              if (searchContext.result) {
                cityContext?.addCity(searchContext.result);
                history.push(`/weather?city=${searchContext.result.name}`);
              }
            }}
            className="plus-btn pointer"
          >
            +
          </div>
        </div>
      )}
    </>
  );
};
