import clsx from "clsx"

export default function Show() {
  const text = clsx(
    "text-white",
    "font-liter"
  )

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
  )

  return (
    <li className={`${flexCol} bg-gray-100 pt-6 pb-6`}>
      <span className="">(Show Name)</span>
      <span className="">(Lineup)</span>
      <span className="">(Location)</span>
      <span className="">(Time, Place, Cost)</span>

      <div className={flexRow} >
        <button className={`${text} bg-gray-500 p-3`}>Remind Me</button>
        <button className={`${text} bg-black p-3`}>Tickets</button>
      </div>
    </li>
  )
}
