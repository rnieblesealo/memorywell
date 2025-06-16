import { Link } from "react-router-dom"
import { UsePageContext } from "../util/context"
import PropTypes from "prop-types"
import { useState } from "react"

export const StreamLink = ({ url, icon, text }) => {
  const ctx = UsePageContext()

  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={url}
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="max-w-15 text-md h-min font-liter text-white rounded-lg p-2 flex items-center mx-1"
      style={{
        border: hovered ? `1px solid ${ctx.currentStyle?.accentColor}` : "1px solid white",
        color: hovered ? ctx.currentStyle?.accentColor : "white",
        transition: "border 0.2s ease, color 0.2s ease",
      }}>
      {text ?? "Stream on"}
      <span className="text-2xl ml-2">
        {icon}
      </span>
    </Link>
  )
}

StreamLink.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string
}
