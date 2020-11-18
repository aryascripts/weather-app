export interface WeatherData {
    high: number;
    low: number;
    current: number;
}

export interface City {
    name: string;
    lat?: string;
    lon?: string;

    weather: WeatherData;
}
