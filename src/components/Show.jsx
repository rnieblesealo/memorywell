import clsx from "clsx"
import PropTypes from "prop-types"

export default function Show({
  id,
  date,
  venue,
  city,
  state,
  price,
  supportingArtists,
  ageRestriction,
  ticketLink,
  flyerLink,
}) {
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
    <li className={`${flexCol} animate-fade-right w-full bg-black border-[1px] border-white mb-4 p-6 rounded-lg text-white text-center`}>
      <span className="">{venue}</span>
      <span className="">{city}, {state}</span>
      <span className="">With {supportingArtists}</span>
      <span className="">{date}</span>
      <span className="">{price}, {ageRestriction}+</span>

      <div className={`${flexRow} gap-2`} >
        <button className={`${borderPurpleHover} h-full font-liter text-white bg-black border-white border-[1px] p-3 rounded-lg`}>Remind Me</button>
        <button className={`${buttonPurpleHover} h-full font-liter bg-white text-black rounded-lg p-3`}>Tickets</button>
      </div>
    </li>
  )
}

Show.propTypes = {
  id: PropTypes.number.isRequired,
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
