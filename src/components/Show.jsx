import { Link } from "react-router-dom"
import { UsePageContext } from "../util/context"

import PropTypes from "prop-types"

import { useState } from "react"

export default function Show({
  date,
  venue,
  city,
  state,
  price,
  supportingArtists,
  ageRestriction,
  ticketLink,
}) {
  const ctx = UsePageContext()

  const [tixHovered, setTixHovered] = useState(false)

  const ticketsElement = ticketLink
    ? <Link
      to={ticketLink}
      target="_blank"
      onMouseEnter={() => setTixHovered(true)}
      onMouseLeave={() => setTixHovered(false)}
      className="h-full font-liter bg-white text-black rounded-lg p-3 font-bold"
      style={{
        transition: "background-color 0.2s ease",
        backgroundColor: tixHovered ? ctx.currentStyle?.accentColor : "white"
      }}>
      Get Tickets
    </Link>
    : <span className="font-bold">Tickets at door</span>

  const priceElement = price ? <span className="text-lg font-bold px-2 border rounded-xl">${price}</span> : null
  const ageElement = ageRestriction ? <span className="">Ages {ageRestriction}+</span> : null

  const ShowDate = ({ date }) => {
    if (!date) {
      return null
    }

    const d = new Date(date);

    const datePart = d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const hours = d.getHours();
    const minutes = d.getMinutes();

    // If time is exactly 00:00 (midnight) -- WARN: which SURELY means no time was given...
    if (hours === 0 && minutes === 0) {
      return <span>{datePart}</span>;
    }

    const timePart = d.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    return (
      <span>{`${datePart} at ${timePart}`}</span>
    );
  }

  return (
    <li className="flex flex-col items-center gap-3 animate-fade-up w-full bg-black border-[1px] border-white p-6 rounded-lg text-white text-center">
      <span className="">
        {city}{state ? `, ${state}` : ''}
      </span>

      <span
        className="text-2xl font-instrument font-bold italic"
        style={{ color: ctx.currentStyle?.accentColor }}>
        {venue}
      </span>

      {supportingArtists && supportingArtists.length > 0 && (
        <span className="">
          With {supportingArtists.join(', ')}
        </span>
      )}

      <ShowDate date={date} />
      {priceElement}
      {ageElement}
      {ticketsElement}
    </li>
  )
}

Show.propTypes = {
  date: PropTypes.string,        // can be null
  venue: PropTypes.string,       // can be null
  city: PropTypes.string,        // can be null
  state: PropTypes.string,       // can be null
  price: PropTypes.number,       // can be null
  supportingArtists: PropTypes.array, // JSON array
  ageRestriction: PropTypes.number,   // can be null
  ticketLink: PropTypes.string,  // can be null
  flyerLink: PropTypes.string,   // can be null
}
