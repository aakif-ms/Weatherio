import { useContext } from "react";

import { WeatherContext } from "../store/weather-context.jsx";
import WeatherInfo from "../components/WeatherInfo.jsx";

export default function DaysForecast() {
  const { forecast } = useContext(WeatherContext);

  if (!forecast) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="bg-lightGray w-[20rem] h-[18rem] p-5 flex flex-col rounded-xl gap-4">
      {forecast.list.slice(0, 5).map((weather, index) => (
        <WeatherInfo
          key={index}
          icon={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          temp={weather.main.temp}
          day="Thursday"
          date={new Date(weather.dt * 1000).toLocaleDateString()}
        />
      ))}
    </div>
  );
}
