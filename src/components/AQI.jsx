import { useContext } from "react";

import Button from "./WeatherButton.jsx";
import { WeatherContext } from "../store/weather-context.jsx";

export default function AQI() {
  const { airQuality } = useContext(WeatherContext);

  if (!airQuality) {
    return <p>No weather data available.</p>;
  }

  const response = airQuality.list[0];

  return (
    <div className="flex flex-col bg-innerBox w-1/2 h-[12rem] rounded-xl p-4 gap-8">
      <div className="flex justify-between">
        <p className="text-textGray text-md font-medium">Air Quality Index</p>
        <Button aqi = {airQuality.list[0].main.aqi} />
      </div>
      <div className="flex justify-between items-center">
        <span className="material-symbols-outlined text-white text-5xl mt-3">
          air
        </span>
        <div className="flex flex-col">
          <p className="text-textGray text-xs text-center font-medium">PM2.5</p>
          <p className="text-white text-4xl font-normal">
            {response.components.pm2_5}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-textGray text-xs text-center font-medium">
            SO<sub>2</sub>
          </p>
          <p className="text-white text-4xl font-normal">
            {response.components.so2}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-textGray text-xs text-center font-medium">
            NO<sub>2</sub>
          </p>
          <p className="text-white text-4xl font-normal">
            {response.components.no2}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-textGray text-xs text-center font-medium">
            O<sub>3</sub>
          </p>
          <p className="text-white text-4xl font-normal">
            {response.components.o3}
          </p>
        </div>
      </div>
    </div>
  );
}
