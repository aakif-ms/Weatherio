/* eslint-disable react/prop-types */
export default function Button({ aqi }) {
  const aqiLevels = [
    {
      level: "Good",
      value: 1,
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    {
      level: "Fair",
      value: 2,
      bgColor: "bg-yellow-400",
      textColor: "text-black",
    },
    {
      level: "Moderate",
      value: 3,
      bgColor: "bg-orange-500",
      textColor: "text-black",
    },
    {
      level: "Poor",
      value: 4,
      bgColor: "bg-red-500",
      textColor: "text-white",
    },
    {
      level: "Very Poor",
      value: 5,
      bgColor: "bg-purple-900",
      textColor: "text-white",
    },
  ];

  const currentLevel = aqiLevels.find((level) => aqi === level.value);

  return (
    <div
      className={`${currentLevel.bgColor} ${currentLevel.textColor} font-semibold rounded-full w-[5rem] h-[2rem] text-center flex items-center justify-center`}
    >
      {currentLevel.level}
    </div>
  );
}
