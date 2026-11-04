import Link from "next/link";
import getWeather from "@/lib/getWeather";
import WeatherDisplay from "@/components/WeatherDisplay";

export default async function CityPage({
                                           params,
                                       }: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const weather = await getWeather(city);

    if (!weather) {
        return (
            <div className="flex flex-col items-center gap-2 p-8">
                <h2 className="text-xl font-bold">Couldn&apos;t load that forecast</h2>
                <p>The city may not exist, the API may be down, or the daily limit was reached.</p>
                <Link href="/" className="underline">Try another city</Link>
            </div>
        );
    }

    return <WeatherDisplay weather={weather} />;
}