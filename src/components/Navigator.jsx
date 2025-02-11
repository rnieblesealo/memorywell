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

  const selectBorder = clsx(
    "transition-border",
    "duration-[0.2s]",
    "border-b-[1px]",
    "cursor-pointer",
    "border-transparent",
    "hover:border-white"
  )

  return (
    <nav className={`${flexRow} p-4  h-min-content`}>
      <img
        src="/public/small-logo.png"
        alt="Small Logo"
        width="100px"
        height="50px"
      />
      <ul className={`${text} ${flexRow} ml-auto gap-10`}>
        <li className={selectBorder}>Home</li>
        <li className={selectBorder}>Music</li>
        <li className={selectBorder}>Live</li>
        <li className={selectBorder}>Bio</li>
      </ul>
    </nav>
  )
}
