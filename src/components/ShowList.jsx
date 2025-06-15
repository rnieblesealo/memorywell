import { useState, useEffect } from "react"
import { getAllShows } from "../scripts/client"

import PropTypes from "prop-types"
import Show from "../components/Show"

export default function ShowList() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    async function loadShows() {
      const showInfo = await getAllShows()

      // Filer out shows whose start date is more than the current time + 4 hours in the past 
      const displayedShows = showInfo.reduce((acc, show) => {
        const showDate = new Date(show.date)
        const now = new Date()
        const fourHours = 4 * 60 * 60 * 1000 // Convert 4 hours to ms

        // If show is less than its current time + 4 hours in the past, keep it
        if (now.getTime() <= showDate.getTime() + fourHours) {
          acc.push(show)
        }

        return acc
      }, [])

      setShows(displayedShows)
    }

    loadShows()
  }, [])

  const placeholder = <span className="p-4 text-white text-center italic">No bookings for now! We&apos;ll be around...</span>

  const showCards = shows?.map((show) => {
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
    <div className="w-full h-full flex flex-col items-center">
      <span className="text-white text-2xl font-instrument font-bold mb-8">Upcoming Shows</span>

      <div className="flex flex-col items-center w-3/5 sm:w-4/5">
        <div className="relative w-full h-full">
          {showCards.length > 0 &&
            <div
              className="w-full h-full absolute z-20 pointer-events-none rounded-lg"
              style={{
                background: `linear-gradient(to bottom, transparent 85%, black 100%)`
              }} />
          }
          <ul className="w-full h-full flex flex-col items-center gap-2 relative">
            {showCards.length > 0 ? showCards : placeholder}
          </ul>
        </div>
      </div>
    </div>
  )
}

ShowList.propTypes = {
  children: PropTypes.node.isRequired,
}
