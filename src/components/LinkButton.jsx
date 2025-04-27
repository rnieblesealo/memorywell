import PropTypes from "prop-types"
import { UsePageContext } from "../util/context"
import { useState } from "react"

export default function LinkButton({ url, icon, src, useIconBg }) {
  const ctx = UsePageContext()

  const [hovered, setHovered] = useState(false)

  const iconStyle = useIconBg
    ? "flex items-center w-min-content aspect-square text-[32px] text-black bg-white p-3 rounded-full"
    : "flex items-center w-min-content aspect-square text-[48px] text-white p-3"

  const graphic = icon
    ? (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={iconStyle}
        style={{
          color: hovered ? ctx.currentStyle?.accentColor : (useIconBg ? "black" : "white"),
          transition: "color 0.2s ease",

        }}>
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
