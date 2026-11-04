import CityForm from "@/components/CityForm";

export default function Home() {
  return (
      <div className="flex flex-col items-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Weather Forecast</h1>
        <CityForm />
      </div>
  );
}