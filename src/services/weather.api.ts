import axios, { AxiosResponse } from 'axios';
import { Environment } from '../config/env.config';

class WeatherApiSingleton {

	private readonly baseURI = 'https://api.openweathermap.org';
	private readonly Weather25 = `${this.baseURI}/data/2.5/weather`;

	private getWeatherUrl(zip: string): string {
		return `${this.Weather25}/?zip=${zip}&appid=${Environment.WEATHER_API_KEY}`;
	}


	getCurrentWeather(zip: string): Promise<any> {

		const url = this.getWeatherUrl(zip);
		return axios.get(url)
			.then((response: AxiosResponse<any>) => {
				// massage the response a bit
				// convert to your objects or 
				return response.data;
			});
	}


}

const WeatherApi = new WeatherApiSingleton();
export {WeatherApi};