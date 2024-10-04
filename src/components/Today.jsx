// eslint-disable-next-line react/prop-types
export default function Today({time, temp, icon}) {
    return (
        <div className="flex flex-col bg-innerBox w-[8rem] h-[8rem] items-center gap-3 p-4 rounded-xl">
            <p className="text-base text-white">{time}</p>
            <img src={icon} alt="" className="w-9" />
            <p className="text-lg text-white text-center">{Math.round(temp)}&deg;</p>
        </div>
    )
}