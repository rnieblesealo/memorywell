import PropTypes from "prop-types"
import clsx from "clsx"

export default function LinkButton({ url, icon, src, useIconBg }) {
  const borderPurpleHover = clsx(
    "transition-all",
    "cursor-pointer",
    "duration-[0.2s]",
    "hover:text-purple-400",
    "active:text-purple-600",
  )

  const bgPurpleHover = clsx(
    "transition-all",
    "cursor-pointer",
    "duration-[0.2s]",
    "hover:bg-purple-400",
    "active:bg-purple-600",
  )

  const iconStyle = useIconBg
    ? `${bgPurpleHover} flex items-center w-min-content aspect-square text-[32px] text-black bg-white p-3 rounded-full`
    : `${borderPurpleHover} flex items-center w-min-content aspect-square text-[48px] text-white p-3`

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
      <a href={url} target="_blank">
        {graphic}
      </a>
    </li>
  )
}

LinkButton.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.node,
  src: PropTypes.string,
  useIconBg: PropTypes.bool
}
