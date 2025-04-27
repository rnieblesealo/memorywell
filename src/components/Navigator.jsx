import { useState } from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { UsePageContext } from "../util/context"
import SmallLogo from "../components/SmallLogo"
import NavButton from "../components/NavButton"

export default function Navigator() {
  const ctx = UsePageContext()

  const Menu = () => (
    <ul className="text-white font-liter flex flex-row items-center justify-left ml-auto gap-10 animate-fade-right">
      <NavButton to="/" text="Home" />
      <NavButton to="/about" text="About" />
      <NavButton to="/music" text="Music" />
    </ul>
  )

  const BurgerButton = () => {
    const [hovered, setHovered] = useState(false)

    return (
      <button
        className="animate-jump-in ml-auto text-white text-[28px] cursor-pointer"
        style={{
          color: hovered ? ctx.currentStyle?.accentColor : "white",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          ctx.enableFullscreenNavigator(true)
          document.body.style.overflow = "hidden";
        }}
      >
        <GiHamburgerMenu />
      </button>
    )
  }

  return (
    <nav className="flex flex-row items-center justify-left p-4 h-min-content">
      <Link to="/" className="animate-fade-left">
        <SmallLogo />
      </Link>
      {ctx.burgerButton ? <BurgerButton /> : <Menu />}
    </nav>
  )
}
