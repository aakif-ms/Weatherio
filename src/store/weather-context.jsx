import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey)

// eslint-disable-next-line react/prop-types
export default function WeatherProvider({ children }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [nextHoursWeather, setNextHoursWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [sunInfo, setSunInfo] = useState({ sunrise: "", sunset: "" });
  const [city, setCity] = useState("Lucknow");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);

      try {
        const currentWeatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setCurrentWeather(currentWeatherRes.data);

        const forecastRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        setForecast(forecastRes.data);

        const foreCastList = forecastRes.data.list;
        const nextWeather = foreCastList.slice(0, 8);

        setNextHoursWeather(nextWeather);

        const airQualityRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${currentWeatherRes.data.coord.lat}&lon=${currentWeatherRes.data.coord.lon}&appid=${apiKey}`
        );
        console.log(airQualityRes.data);
        setAirQuality(airQualityRes.data);

        setSunInfo({
          sunrise: new Date(
            currentWeatherRes.data.sys.sunrise * 1000
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
          sunset: new Date(
            currentWeatherRes.data.sys.sunset * 1000
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [city]);

  async function fetchWeatherDataByCoords(lat, lon) {
    setLoading(true);

    try {
      const currentWeatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setCurrentWeather(currentWeatherRes.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setForecast(forecastRes.data);

      const foreCastList = forecastRes.data.list;
      const nextWeather = foreCastList.slice(0, 8);

      setNextHoursWeather(nextWeather);

      const airQualityRes = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${currentWeatherRes.data.coord.lat}&lon=${currentWeatherRes.data.coord.lon}&appid=${apiKey}`
      );
      setAirQuality(airQualityRes.data);

      setSunInfo({
        sunrise: new Date(
          currentWeatherRes.data.sys.sunrise * 1000
        ).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        sunset: new Date(
          currentWeatherRes.data.sys.sunset * 1000
        ).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function fetchCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchWeatherDataByCoords(lat, lon);
    });
  }

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        forecast,
        airQuality,
        sunInfo,
        city,
        nextHoursWeather,
        setCity,
        loading,
        fetchCoords,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
