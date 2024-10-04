import WeatherCard from "./WeatherCard";
import DaysForecast from "./FiveDaysForecast";

export default function MainWeather() {
  return (
    <div className="flex flex-col gap-4">
      <WeatherCard />
      <div>
        <p className="text-white text-xl font-semibold mb-2">5 days Forecast</p>
        <DaysForecast />
      </div>
    </div>
  );
}
