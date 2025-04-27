import clsx from "clsx"

import { useState, useEffect } from "react"
import { getAllShows } from "../scripts/client"

import PropTypes from "prop-types"
import Show from "../components/Show"

export default function ShowList({ mode }) {
  const [shows, setShows] = useState(null)

  useEffect(() => {
    async function loadShows() {
      const showInfo = await getAllShows()
      console.log(showInfo)
      setShows(showInfo)
    }

    loadShows()
  }, [])

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

  const placeholder = <span className="text-white text-center italic">No bookings yet! We&apos;ll be around...</span>

  const showCards = shows?.map((show) => {
    // only display upcoming shows; if no date set, render it anyway
    if (show.date && (new Date(show.date) < Date.now())) {
      return null
    }

    return (
      <Show
        key={show.id}
        date={show.date}
        venue={show.venue}
        city={show.city}
        state={show.state}
        price={show.price}
        supportingArtists={show.supportingArtists}
        ageRestriction={show.ageRestriction}
        ticketLink={show.ticketLink}
        flyerLink={show.flyerLink}
        mode={mode}
      />
    )
  })

  return (
    <>
      <h1 className="text-white text-4xl font-instrument font-extrabold">Shows</h1>
      <div className={`${flexCol} w-[60%] h-min-content`}>
        <nav className="w-full h-[40px]">
          <ul className={`${flexRow} w-full h-full gap-2`}>
            <li className={`${borderPurpleHover} bg-black w-full h-full text-center text-white border-[1px] flex items-center justify-center rounded-lg`}>Upcoming</li>
            <li className={`${borderPurpleHover} bg-black w-full h-full text-center text-white border-[1px] flex items-center justify-center rounded-lg`}>Past</li>
          </ul>
        </nav>
        <ul className="w-full max-h-[600px] overflow-y-auto flex flex-col items-center gap-1 p-4 rounded-lg">
          {showCards ?? placeholder}
        </ul>
      </div>
    </>
  )
}

ShowList.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf([null, "normal", "almostReal"])
}
