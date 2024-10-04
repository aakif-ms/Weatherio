// eslint-disable-next-line react/prop-types
export default function WeatherInfo({icon, date, day, temp}) {
  return (
    <div className="flex justify-around items-center gap-3">
      <div className="flex gap-2">
        <img src={icon} alt="moon image" className="w-9" />
        <p className="text-textGray text-xl">{Math.round(temp)}&deg;</p>
      </div>
      <p className="text-textGray text-xs">{date}</p>
      <p className="text-textGray text-xs">{day}</p>
    </div>
  );
}
