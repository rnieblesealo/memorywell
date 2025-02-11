import PropTypes from "prop-types"

// FIXME: div gets smaller if info overflows...
export default function Song({ imgSrc, title, release, writtenBy, producedBy, recordedAt }) {
  return (
    <li className="font-liter text-white flex flex-row justify-left p-5">
      <img
        src={`${imgSrc}`}
        alt="Song Cover"
        className="w-[200px] bg-white aspect-square"
      />
      <div className="flex flex-col ml-5">
        <span className="text-[32px] font-liter font-[800]">{title}</span>
        <span>Released {release ?? "(Release)"}</span>
        <span>Written by {writtenBy ?? "(Writers)"}</span>
        <span>Produced by {producedBy ?? "(Producers)"}</span>
        <span>Recorded at {recordedAt ?? "(Recorded at...)"}</span>
      </div>
    </li>
  )
}

Song.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  release: PropTypes.string, // TODO: change to date 
  writtenBy: PropTypes.string, // TODO: change to str[]
  producedBy: PropTypes.string,
  recordedAt: PropTypes.string
}
