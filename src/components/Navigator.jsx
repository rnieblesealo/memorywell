import clsx from "clsx"

export default function Navigator() {
  const text = clsx(
    "text-white",
    "font-liter"
  )

  const flexRow = clsx(
    "flex",
    "flex-row",
    "items-center",
    "justify-left",
  )

  return (
    <nav className={`${flexRow} p-4 mb-6 h-min-content`}>
      <img
        src=""
        alt="Small Logo"
        width="130px"
        height="50px"
        className="bg-white"
      />
      <ul className={`${text} ${flexRow} ml-auto gap-10`}>
        <li>Home</li>
        <li>Music</li>
        <li>Live</li>
        <li>Bio</li>
      </ul>
    </nav>
  )
}
