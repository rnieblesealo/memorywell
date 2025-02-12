import clsx from "clsx"

export default function Show() {
  const flexRow = clsx(
    "flex",
    "flex-row",
    "items-center",
    "justify-left",
  )

  const flexCol = clsx(
    "flex",
    "flex-col",
    "items-center",
    "justify-left",
    "gap-3"
  )

  const borderPurpleHover = clsx(
    "transition-all",
    "duration-[0.2s]",
    "hover:border-purple-400",
    "hover:text-purple-400"
  )

  const buttonPurpleHover = clsx(
    "transition-all",
    "duration-[0.2s]",
    "hover:bg-purple-400",
  )

  return (
    <li className={`${flexCol} animate-fade-right w-full bg-black border-[1px] border-white mb-4 p-6 rounded-lg text-white`}>
      <span className="font-instrument italic text-[24px]">(Show Name)</span>
      <span className="">(Lineup)</span>
      <span className="">(Location)</span>
      <span className="mb-3">(Time, Place, Cost)</span>

      <div className={`${flexRow} gap-2`} >
        <button className={`${borderPurpleHover} font-liter text-white bg-black border-white border-[1px] p-3 rounded-lg`}>Remind Me</button>
        <button className={`${buttonPurpleHover} font-liter bg-white text-black rounded-lg p-3`}>Tickets</button>
      </div>
    </li>
  )
}
