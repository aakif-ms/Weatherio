import { useContext } from "react";

import { WeatherContext } from "../store/weather-context";

export default function WeatherCard() {
  const { currentWeather } = useContext(WeatherContext);

  const date = new Date();

  const options = { weekday: "long", day: "numeric", month: "long" };

  let formattedDate = date.toLocaleDateString('en-us', options);


  if (!currentWeather) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="bg-lightGray w-[20rem] h-[18rem] p-5 flex flex-col rounded-xl gap-2">
      <p className="font-quickSand text-textGray text-xl font-semibold">Now</p>
      <div className="flex items-center">
        <div className="flex items-center">
          <p className="text-6xl text-white">
            {Math.floor(currentWeather.main.temp)}&deg;
          </p>
          <p className="text-4xl text-textGray">C</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt=""
          className="ml-16"
        />
      </div>
      <p className="font-quickSand text-textGray text-sm font-medium mb-2">
        {currentWeather.weather[0].description.toUpperCase()}
      </p>
      <hr className="border-1 border-stone-400" />
      <div className="flex gap-2">
        <span className="material-symbols-outlined text-textGray">
          calendar_today
        </span>
        <p className="text-zinc-600">{formattedDate}</p>
      </div>
      <div className="flex gap-2">
        <span className="material-symbols-outlined text-textGray">
          location_on
        </span>
        <p className="text-zinc-600">{currentWeather.name}</p>
      </div>
    </div>
  );
}
