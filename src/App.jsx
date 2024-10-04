import MainWeather from "./components/MainWeather";
import Highlights from "./components/WeatherHighlights";
import Navbar from "./components/Navbar";
import WeatherProvider from "./store/weather-context";

export default function App() {
  return (
    <WeatherProvider>
      <div className="flex flex-col gap-5">
        <Navbar />
        <div className="flex gap-8 justify-between">
          <MainWeather />
          <Highlights />
        </div>
      </div>
    </WeatherProvider>
  );
}
