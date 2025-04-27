import { useState, useEffect } from "react"
import { getAllShows } from "../scripts/client"

import { UsePageContext } from "../util/context"

import PropTypes from "prop-types"
import Show from "../components/Show"

export default function ShowList() {
  const ctx = UsePageContext()

  const [shows, setShows] = useState(null)

  useEffect(() => {
    async function loadShows() {
      const showInfo = await getAllShows()
      console.log(showInfo)
      setShows(showInfo)
    }

    loadShows()
  }, [])

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
      />
    )
  })

  return (
    <>
      <h1 className="text-white text-3xl font-instrument font-extrabold">Upcoming Shows</h1>
      <div className="flex flex-col items-center justify-left w-[60%] h-min-content">
        <div className="w-full max-h-[600px] overflow-y-auto flex flex-col items-center gap-1 p-4 rounded-lg relative">
          {/* Scrollable content wrapper */}
          <div className="relative w-full flex flex-col rounded-2xl">
            {/* Top gradient */}
            <div
              style={{ background: `linear-gradient(to top, transparent, ${ctx.currentStyle?.accentColor})` }}
              className="absolute top-0 left-0 w-full h-10 pointer-events-none z-10 rounded-lg"
            />

            {/* Actual list */}
            <ul className="flex flex-col items-center w-full gap-2 relative">
              {showCards ?? placeholder}
            </ul>

            {/* Bottom gradient */}
            <div
              style={{ background: `linear-gradient(to bottom, transparent, ${ctx.currentStyle?.accentColor})` }}
              className="absolute bottom-0 left-0 w-full h-10 pointer-events-none z-10 rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

ShowList.propTypes = {
  children: PropTypes.node.isRequired,
}
