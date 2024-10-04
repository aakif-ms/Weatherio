// eslint-disable-next-line react/prop-types
export default function Button({onClick}) {
  return (
    <button className="bg-lightPurple text-lightGray font-semibold rounded-full w-[12rem] h-[3rem] hover:bg-lightPurple text-center flex items-center justify-center gap-2" onClick={onClick}>
      <span className="material-symbols-outlined">my_location</span> Current
      Location
    </button>
  );
}
