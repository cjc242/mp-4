export type DayForecast = {
    date: string;
    tempMax: number;
    tempMin: number;
    conditions: string;
};

export type WeatherData = {
    city: string;
    description: string;
    days: DayForecast[];
};