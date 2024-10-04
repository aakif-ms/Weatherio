import { useContext } from "react";

import { WeatherContext } from "../store/weather-context";

// eslint-disable-next-line react/prop-types
export default function Info({ infoName, level, icon }) {
  const { currentWeather } = useContext(WeatherContext);

  if (!currentWeather) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="flex flex-col grow bg-innerBox w-[15rem] h-[8rem] rounded-xl p-4 gap-6">
      <p className="text-textGray text-sm font-medium ">{infoName}</p>
      <div className="flex justify-between">
        <span className="material-symbols-outlined text-white text-5xl">{icon}</span>
        {infoName === "Feels Like" ? (
          <p className="text-white text-4xl">
            {level}&deg;<sup>c</sup>
          </p>
        ) : (
          <p className="text-white text-4xl">{level}</p>
        )}
      </div>
    </div>
  );
}
