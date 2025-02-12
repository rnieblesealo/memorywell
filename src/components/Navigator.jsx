import clsx from "clsx"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { UsePageContext } from "../util/PageContext"

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
    "hover:border-purple-400",
    "hover:text-purple-400",
  )

  const Menu = () => (
    <ul className={`${text} ${flexRow} ml-auto gap-10`}>
      <li className={selectBorder}>
        <Link to="/" className={selectBorder}>Home</Link>
      </li>
      <li className={selectBorder}>
        <Link to="/about" className={selectBorder}>About</Link>
      </li>
      <li className={selectBorder}>
        <Link to="/music" className={selectBorder}>Music</Link>
      </li>
      <li className={selectBorder}>
        <Link className={selectBorder}>Merch</Link>
      </li>
    </ul>
  )

  const BurgerButton = () => (
    <button
      className="ml-auto text-white text-[28px] cursor-pointer"
      onClick={() => {
        context.enableFullscreenNavigator(true)
        document.body.style.overflow = "hidden";
      }}
    >
      <GiHamburgerMenu />
    </button>
  )

  const context = UsePageContext()

  return (
    <nav className={`${flexRow} p-4  h-min-content`}>
      <Link to="/" className="transition-opacity duration-[0.2s] hover:opacity-50">
        <img
          src="/public/small-logo.png"
          alt="Small Logo"
          width="100px"
          height="50px"
        />
      </Link>
      {context.burgerButton ? <BurgerButton /> : <Menu />}
    </nav>
  )
}
