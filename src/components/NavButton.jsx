import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { UsePageContext } from "../util/context"
import { useState } from "react"

export default function NavButton({ to, text }) {
  const ctx = UsePageContext()

  const [hovered, setHovered] = useState(false)

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer border-transparent"
      style={{
        color: hovered ? ctx.currentStyle?.accentColor : "white",
        borderBottom: hovered ? `2px solid ${ctx.currentStyle?.accentColor}` : "2px solid transparent",
        transition: "color 0.2s ease, border-bottom 0.2s ease"
      }}>
      <Link className="w-full h-full" to={to}>
        <button className="w-full h-full" onClick={() => {
          ctx.enableFullscreenNavigator(false)
          document.body.style.overflow = "visible"
        }}>
          {text}
        </button>
      </Link>
    </li>
  )
}

NavButton.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.string
}
