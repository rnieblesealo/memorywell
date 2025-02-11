import PropTypes from "prop-types"

export default function LinkButton({ icon, src, useIconBg }) {
  const iconStyle = useIconBg
    ? "flex items-center w-min-content aspect-square text-[48px] text-black bg-white p-3 rounded-full"
    : "flex items-center w-min-content aspect-square text-[48px] text-white p-3"

  const graphic = icon
    ? (
      <div className={iconStyle}>
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
  src: PropTypes.string,
  useIconBg: PropTypes.bool
}
