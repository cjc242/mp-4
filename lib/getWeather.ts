import { WeatherData } from "@/types";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

type RawDay = { datetime: string; tempmax: number; tempmin: number; conditions: string };

export default async function getWeather(city: string) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=days&contentType=json&key=${WEATHER_API_KEY}`;

    return fetch(url, { cache: "no-store" })
        .then(async (res) => {
            if (res.status >= 299) {
                console.error(`Weather API responded ${res.status}`);
                return null;
            }
            const data = await res.json();
            const weather: WeatherData = {
                city: data.resolvedAddress,
                description: data.description,
                days: data.days.map((d: RawDay) => ({
                    date: d.datetime,
                    tempMax: d.tempmax,
                    tempMin: d.tempmin,
                    conditions: d.conditions,
                })),
            };
            return weather;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
}