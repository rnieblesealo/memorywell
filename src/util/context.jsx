import { useContext, createContext } from "react";
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Navigator from "../components/Navigator"
import LinkButton from "../components/LinkButton"
import NavButton from "../components/NavButton"
import Footer from "../components/Footer"
import { Link, Outlet } from "react-router-dom"
import { FaHeart } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import * as hero from "./hero"

const PageContext = createContext(null);

const styles = {
  normal: {
    accentColor: "oklch(60.6% 0.25 292.717)",
    hero: <hero.NormalLogo />,
    pageHeader: "/music-bg.jpeg",
    background: "black",
    backgroundColor: "black"
  },
  almostReal: {
    accentColor: "oklch(54.6% 0.245 262.881)",
    hero: <hero.AlmostRealLogo />,
    pageHeader: "/arhero.jpg",
    background: "linear-gradient(to right, #000222, black)",
    backgroundColor: "black"
  }
}

// contains things every page needs like header, footer, etc...
export function PageContextProvider({ style }) {
  const [currentStyle, setCurrentStyle] = useState(styles.normal)

  useEffect(() => {
    setCurrentStyle(styles[style])
  }, [style])

  const FullscreenNavigator = () => (
    <div className="w-screen h-screen bg-black text-white text-[28px] fixed inset-0 z-10">
      <button onClick={() => {
        enableFullscreenNavigator(false)
        document.body.style.overflow = "visible";

      }}>
        <IoMdClose className="animate-jump-in text-[32px] absolute right-0 mr-4 mt-2 z-20" />
      </button>
      <ul className="animate-fade-right w-full h-full flex flex-col items-center justify-top p-12 gap-6">
        <NavButton to="/" text="Home" />
        <NavButton to="/about" text="About" />
        <NavButton to="/music" text="Music" />
      </ul>
    </div>
  )

  // useful context-related info
  const [fullscreenNavigator, enableFullscreenNavigator] = useState(false)
  const [burgerButton, enableBurgerButton] = useState(window.innerWidth < 500)

  const contextInfo = {
    fullscreenNavigator,
    enableFullscreenNavigator,
    burgerButton,
    enableBurgerButton,
    currentStyle
  }

  // switch to burger menu on small screen
  useEffect(() => {
    // make and add listener
    const onResize = () => {
      enableBurgerButton(window.innerWidth < 500)
    }

    window.addEventListener("resize", onResize)

    // remove listener
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  // switch the bg
  useEffect(() => {
    document.body.style.backgroundColor = styles?.[style]?.backgroundColor
    document.body.style.background = styles?.[style]?.background
  }, [style])

  return (
    <div>
      <PageContext.Provider value={contextInfo}>
        {fullscreenNavigator && <FullscreenNavigator />}
        <Navigator />
        <Outlet />
        <Footer className="flex">
          <LinkButton url="https://www.youtube.com/channel/UCh1N3JnevpEqFpCceQZH7aQ" icon={<FaYoutube />} useIconBg />
          <LinkButton url="https://www.instagram.com/memorywell.wav/" icon={<FaInstagram />} useIconBg />
          <LinkButton url="https://www.facebook.com/profile.php?id=61557936762251" icon={<FaFacebook />} useIconBg />
        </Footer>
      </PageContext.Provider>
      <div className="flex items-center justify-center">
        <Link
          to="https://www.rnieb.dev/"
          target="_blank"
          className="
            flex flex-row items-center gap-2 text-white font-tiny5 mb-10
            transition-text duration-200 hover:text-yellow-300">
          Made by Rafa with <FaHeart color="#F90605" />
        </Link>
      </div>
    </div>
  )
}

// handy context get function
export function UsePageContext() {
  const context = useContext(PageContext)

  if (!context) {
    throw new Error("No page context defined!")
  }

  return context;
}

PageContextProvider.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOf([null, "normal", "almostReal"])
}
