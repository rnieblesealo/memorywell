import PropTypes from "prop-types"

export default function LinkButton({ icon, src }) {
  const graphic = icon
    ? (
      <div className="flex items-center w-min-content aspect-square text-white text-[48px] text-black bg-white p-3 rounded-full">
        {icon}
      </div>
    )
    : (
      <img
        src={`${src}`}
        alt="Link Button"
        width="70px"
        className="bg-white aspect-square"
      />
    )

  return (
    <li>
      {graphic}
    </li>
  )
}

LinkButton.propTypes = {
  icon: PropTypes.node,
  src: PropTypes.string
}
