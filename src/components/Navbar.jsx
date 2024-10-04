import { useState, useContext, useRef } from "react";

import cloud from "../assets/logo.png";
import Button from "./LocationButton.jsx";
import { WeatherContext } from "../store/weather-context.jsx";

export default function Navbar() {
  const { setCity, fetchCoords } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setCity(inputValue);
      inputRef.current.blur();
    }
  }

  function handleOnClick() {
    fetchCoords();
  }

  return (
    <nav className="flex justify-between py-3">
      <div className="flex items-center">
        <img src={cloud} alt="cloud image" className="object-cover w-64" />
      </div>
      <div>
        <input
          ref={inputRef}
          type="text"
          className="bg-lightGray w-[30rem] h-[3rem] rounded-full splaceholder:text-sm text-white px-4"
          placeholder="Search city..."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <Button onClick={handleOnClick} />
    </nav>
  );
}
