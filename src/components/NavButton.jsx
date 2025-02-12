import clsx from "clsx"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { UsePageContext } from "../util/PageContext"

export default function NavButton({ className, to, text }) {
  const selectBorder = clsx(
    "transition-border",
    "transition-text",
    "duration-[0.2s]",
    "border-b-[1px]",
    "cursor-pointer",
    "border-transparent",
    "hover:border-purple-400",
    "hover:text-purple-400",
    "active:border-purple-600",
    "active:text-purple-600",
  )

  const context = UsePageContext()

  return (
    <li className={`${className} ${selectBorder}`}>
      <Link className="w-full h-full" to={to}>
        <button className="w-full h-full" onClick={() => {
          context.enableFullscreenNavigator(false)
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
