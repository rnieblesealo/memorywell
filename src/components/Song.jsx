import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// FIXME: div gets smaller if info overflows...
export default function Song({ imgSrc, title, release, writtenBy, producedBy, recordedAt, link }) {
  return (
    <li>
      <Link
        to={link ?? "./"}
        target="_blank"
        className="animate-fade-right text-white flex flex-row justify-left p-5">
        <img
          src={`${imgSrc}`}
          alt="Song Cover"
          className="w-full max-w-[150px] bg-white aspect-square"
        />
        <div className="font-liter flex flex-col ml-5">
          <span className="text-xl font-instrument font-[400] italic">{title}</span>
          <span className="text-gray-600 text-sm">{release ?? "(Release)"}</span>
          <span>{writtenBy ?? ""}</span>
          <span>{producedBy ?? ""}</span>
          <span>{recordedAt ?? ""}</span>
        </div>
      </Link>
    </li>
  )
}

Song.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  release: PropTypes.string, // TODO: change to date 
  writtenBy: PropTypes.string, // TODO: change to str[]
  producedBy: PropTypes.string,
  recordedAt: PropTypes.string,
  link: PropTypes.string
}
