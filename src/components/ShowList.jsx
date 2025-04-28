import { useState, useEffect } from "react"
import { getAllShows } from "../scripts/client"

import PropTypes from "prop-types"
import Show from "../components/Show"

export default function ShowList() {
  const [shows, setShows] = useState(null)

  useEffect(() => {
    async function loadShows() {
      const showInfo = await getAllShows()
      console.log(showInfo)
      setShows(showInfo)
    }

    loadShows()
  }, [])

  const placeholder = <span className="p-4 text-white text-center italic">No bookings for now! We&apos;ll be around...</span>

  const showCards = shows?.map((show) => {
    // only display upcoming shows 
    // a show is considered "past" if the current time is more than 4 hours ahead of its doors time
    if (show.date) {
      const showDate = new Date(show.date);
      const now = new Date() // returns now if no arg
      const fourHours = 5 * 60 * 60 * 1000; // 4 hours in milliseconds

      if (now.getTime() > showDate.getTime() + fourHours) {
        return null;
      }
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
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <span className="text-white text-2xl font-instrument font-bold">Upcoming Shows</span>
        <span className="text-white text-sm font-instrument">(Scroll Down!)</span>
      </div>

      <div className="flex flex-col items-center justify-left w-3/5 sm:w-4/5">
        <div className="relative w-full h-full">
          {showCards &&
            <div
              className="w-full h-full absolute z-20 pointer-events-none rounded-2xl"
              style={{
                background: `linear-gradient(to bottom, transparent 60%, black 100%)`
              }} />
          }
          <ul className="flex flex-col items-center gap-2 relative p-4">
            {showCards ?? placeholder}
          </ul>
        </div>
      </div>
    </div>
  )
}

ShowList.propTypes = {
  children: PropTypes.node.isRequired,
}
