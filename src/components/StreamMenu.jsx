import PropTypes from "prop-types"

export default function StreamMenu({ children }) {
  return (
    <>
      <li>
        <h1 className="text-white text-center text-2xl font-instrument font-extrabold">Stream</h1>
        <nav className="flex flex-wrap flex-row gap-6">
          {children}
        </nav>
      </li>
    </>
  )
}

// ensure children are passed! we CAN omit the warning, but this is best practice
// ensure to npm install prop-types
StreamMenu.propTypes = {
  children: PropTypes.node.isRequired
}
