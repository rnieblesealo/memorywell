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

  return (
    <>
      <h1 className="text-white text-[32px]">Shows</h1>
      <div className={`${flexCol} w-[50%] h-min-content bg-white`}>
        <nav className="w-full h-[40px]">
          <ul className={`${flexRow} w-full h-full`}>
            <li className="w-full h-full text-center bg-gray-200 flex items-center justify-center">Upcoming</li>
            <li className="w-full h-full text-center bg-gray-200 flex items-center justify-center">Past</li>
          </ul>
        </nav>
        <ul className="w-full h-[600px] overflow-y-auto flex flex-col gap-1">
          {children}
        </ul>
      </div>
    </>
  )
}

ShowList.propTypes = {
  children: PropTypes.node.isRequired
}
