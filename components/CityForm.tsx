"use client";
import Link from "next/link";
import { useState } from "react";

export default function CityForm() {
    const [city, setCity] = useState("");

    return (
        <form
            className="flex gap-2"
            onSubmit={(event) => event.preventDefault()}
        >
            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter a city"
                className="rounded-lg border border-sky-400 bg-white p-2 text-black"
            />
            <Link
                href={`/weather/${city}`}
                className={`rounded-lg px-4 py-2 text-white ${
                    city === "" ? "pointer-events-none bg-gray-500" : "bg-sky-600 hover:bg-sky-500"
                }`}
            >
                Get forecast
            </Link>
        </form>
    );
}