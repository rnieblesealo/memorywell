import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function Show({
  date,
  venue,
  city,
  state,
  price,
  supportingArtists,
  ageRestriction,
  ticketLink,
  mode
}) {
  const accentColor = mode === "almostReal" ? "oklch(54.6% 0.245 262.881)" : "white"

  const ticketsElement = ticketLink
    ? <Link to={ticketLink} target="_blank" className="h-full font-liter bg-white text-black rounded-lg p-3">Get Tickets</Link>
    : <span className="font-bold">Tickets at door</span>

  const priceElement = price ? <span className="">${price}</span> : null
  const ageElement = ageRestriction ? <span className="">Ages {ageRestriction}+</span> : null

  const ShowDate = ({ date }) => {
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
    <li className="flex flex-col items-center gap-3 animate-fade-right w-full bg-black border-[1px] border-white mb-4 p-6 rounded-lg text-white text-center">
      <span
        className="text-2xl font-instrument font-bold italic"
        style={{ color: accentColor }}>
        {venue}
      </span>

      <span className="">
        {city}{state ? `, ${state}` : ''}
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
  mode: PropTypes.oneOf([null, "normal", "almostReal"]) // visual style
}
