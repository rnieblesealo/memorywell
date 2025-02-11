import PropTypes from "prop-types"
import clsx from "clsx"

export default function Footer({ children }) {
  const flexRow = clsx(
    "flex",
    "flex-row",
    "items-center",
    "justify-left",
  )

  const text = clsx(
    "text-white",
    "font-liter"
  )

  return (
    <footer className="mt-10 mb-10 flex flex-col items-center justify-center gap-12 w-full h-min-content">
      <nav>
        <ul className={`${flexRow} justify-center gap-10`}>
          {children}
        </ul>
      </nav>
      <p className={`${text} flex w-[70%] items-center justify-center`}>
        Bookings: memorywellband@gmail.com
      </p>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node
}
