import PropTypes from "prop-types"
import clsx from "clsx"

export default function ShowList({ children }) {
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

  const borderPurpleHover = clsx(
    "transition-all",
    "cursor-pointer",
    "duration-[0.2s]",
    "hover:border-purple-400",
    "hover:text-purple-400",
    "active:border-purple-600",
    "active:text-purple-600",
  )

  const Placeholder = () => {
    return (
      <span className="text-white text-center italic">No bookings yet! We&apos;ll be around...</span>
    )
  }

  return (
    <>
      <h1 className="text-white text-[42px]">Shows</h1>
      <div className={`${flexCol} w-[60%] h-min-content bg-black`}>
        <nav className="w-full h-[40px]">
          <ul className={`${flexRow} w-full h-full gap-2`}>
            <li className={`${borderPurpleHover} w-full h-full text-center text-white bg-[rgba(255,255,255,0)] border-[1px] flex items-center justify-center rounded-lg`}>Upcoming</li>
            <li className={`${borderPurpleHover} w-full h-full text-center text-white bg-[rgba(255,255,255,0)] border-[1px] flex items-center justify-center rounded-lg`}>Past</li>
          </ul>
        </nav>
        <ul className="w-full max-h-[600px] overflow-y-auto flex flex-col items-center gap-1 p-4 bg-[rgba(255,255,255,0.05)] rounded-lg">
          {children ?? <Placeholder />}
        </ul>
      </div>
    </>
  )
}

ShowList.propTypes = {
  children: PropTypes.node.isRequired
}
