import { useContext } from "react";

import AQI from "./AQI";
import SunTiming from "./SunTiming.jsx";
import OtherInfo from "./OtherInfo.jsx";
import { WeatherContext } from "../store/weather-context.jsx";
import Today from "./Today.jsx";

export default function Highlights() {
  const { currentWeather, nextHoursWeather } = useContext(WeatherContext);

  if (!currentWeather) {
    return <p>No weather data available.</p>;
  }

  if (!nextHoursWeather) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="flex flex-col grow gap-4">
      <div className="flex flex-col bg-lightGray rounded-xl p-6 gap-3">
        <p className="block text-white font-medium text-xl">Todays Highlight</p>
        <div className="flex gap-4">
          <AQI />
          <SunTiming />
        </div>
        <div className="flex gap-4">
          <div className="flex grow gap-3">
            <OtherInfo
              infoName="Humidity"
              icon="humidity_percentage"
              level={currentWeather.main.humidity + "%"}
            />
            <OtherInfo
              infoName="Pressure"
              icon="airwave"
              level={currentWeather.main.pressure + "hPa"}
            />
          </div>
          <div className="flex grow gap-3">
            <OtherInfo
              infoName="Visibilty"
              icon="visibility"
              level={currentWeather.visibility + "km"}
            />
            <OtherInfo
              infoName="Feels Like"
              icon="thermostat"
              level={currentWeather.main.feels_like}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="block text-white font-medium text-xl">Today at</p>
      </div>
      <div className="flex justify-between">
        {nextHoursWeather.map((weather, index) => (
          <Today
            key={index}
            temp={weather.main.temp}
            time={new Date(weather.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              hour12: true,
            })}
            icon={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
        ))}
      </div>
    </div>
  );
}
