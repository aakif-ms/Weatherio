import { useContext } from "react";
import { WeatherContext } from "../store/weather-context";

export default function Sun() {
  const { sunInfo } = useContext(WeatherContext);

  return (
    <div className="flex flex-col bg-innerBox w-1/2 h-[12rem] rounded-xl p-4 gap-8">
      <p className="text-textGray text-md font-medium">Sunrise and Sunset</p>
      <div className="flex gap-12">
        <div className="flex gap-6">
        <span className="material-symbols-outlined text-white text-5xl mt-2">sunny</span>
          <div className="flex flex-col">
            <p className="text-textGray text-xs font-medium">Sunrise</p>
            <p className="text-white text-4xl font-normal">{sunInfo.sunrise}</p>
          </div>
        </div>
        <div className="flex gap-6">
        <span className="material-symbols-outlined text-white text-5xl mt-2">wb_twilight</span>
          <div className="flex flex-col">
            <p className="text-textGray text-xs font-medium">Sunset</p>
            <p className="text-white text-4xl font-normal">{sunInfo.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
