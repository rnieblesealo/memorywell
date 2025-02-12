import clsx from "clsx"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { UsePageContext } from "../util/PageContext"
import SmallLogo from "../components/SmallLogo"
import NavButton from "../components/NavButton"

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

  const purpleHover = clsx(
    "transition-text",
    "duration-[0.2s]",
    "hover:text-purple-400",
    "active:text-purple-600"
  )

  const Menu = () => (
    <ul className={`${text} ${flexRow} ml-auto gap-10 animate-fade-right`}>
      <NavButton to="/" text="Home" />
      <NavButton to="/about" text="About" />
      <NavButton to="/music" text="Music" />
    </ul>
  )

  const BurgerButton = () => (
    <button
      className={`${purpleHover} animate-jump-in ml-auto text-white text-[28px] cursor-pointer`}
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
      <Link to="/" className="animate-fade-left">
        <SmallLogo />
      </Link>
      {context.burgerButton ? <BurgerButton /> : <Menu />}
    </nav>
  )
}
