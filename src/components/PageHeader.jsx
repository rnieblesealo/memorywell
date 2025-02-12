import PropTypes from "prop-types"

export default function PageHeader({ imgSrc, title }) {
  return (
    <div className="animate-fade-right w-full h-[200px] bg-black text-white flex items-center justify-center text-center text-[48px] overflow-hidden">
      <img
        src={`${imgSrc ?? "/music-bg.jpeg"}`}
        className="w-full grayscale contrast-200 opacity-30"
      />
      <span className="absolute">{title ?? "(Heading...)"}</span>
    </div>

  )
}

PageHeader.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string
}
