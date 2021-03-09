import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Environment } from "../../config/Environment";
import { CityContext } from "../../stores/CityContext";
import { City } from "../../stores/interfaces";
import "./WeatherDetails.scss";

const GetWeatherData = (city: City | undefined) => {
  const params = {
    appid: Environment.appid,
    lat: city?.lat,
    lon: city?.lon,
    units: "metric",
  };

  const url = `https://api.openweathermap.org/data/2.5/onecall`;
  return axios.get(url, { params }).then((response) => response.data);
};

interface Props {}

export function WeatherDetails(props: Props) {
  const location = useLocation();
  const cityContext = useContext(CityContext);

  useEffect(() => {
    const search = convertSearchToObject(location.search);
    const cityName = search.city;
    const selected = cityContext?.cities.find((city) => cityName === city.name);
    if (!selected && cityContext?.cities.length) {
      cityContext?.setSelectedCity(cityContext.cities[0]);
    } else {
      cityContext?.setSelectedCity(selected);
    }
  }, [location.search]);

  const weatherQuery = useQuery(
    ["WeatherDetails", cityContext?.selectedCity?.name],
    () => GetWeatherData(cityContext?.selectedCity)
  );

  return (
    <div className="weather-details">
      {JSON.stringify(cityContext?.selectedCity)}
    </div>
  );
}

function convertSearchToObject(search: string = "") {
  // search = '?city=Fairfield&user=1234';
  const subStr = search?.split("?")[1];
  if (subStr?.length) {
    const allStrings = subStr.split("&");
    const params: { [key: string]: string } = {};
    allStrings.forEach((item) => {
      const split = item.split("=");
      params[split[0]] = split[1];
    });
    return params;
  }
  return {};
}
