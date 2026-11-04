import { WeatherData, DayForecast } from "@/types";

function DayCard({ day }: { day: DayForecast }) {
    return (
        <div className="rounded-lg bg-white/80 p-4 text-center shadow">
            <h3 className="font-bold">{day.date}</h3>
            <p>{day.conditions}</p>
            <p>High {day.tempMax}° / Low {day.tempMin}°</p>
        </div>
    );
}

export default function WeatherDisplay({ weather }: { weather: WeatherData }) {
    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <h2 className="text-2xl font-bold">{weather.city}</h2>
            <p>{weather.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
                {weather.days.map((d) => (
                    <DayCard key={d.date} day={d} />
                ))}
            </div>
        </div>
    );
}