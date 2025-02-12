import { useContext, createContext } from "react";
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Navigator from "../components/Navigator"
import LinkButton from "../components/LinkButton"
import Footer from "../components/Footer"
import { FaHeart } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import clsx from "clsx"


const PageContext = createContext(null);

// contains things every page needs like header, footer, etc...
export default function TimerContextProvider({ children }) {
  const main = clsx(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "gap-10"
  )

  const FullscreenNavigator = () => (
    <div className="w-screen h-screen bg-black text-white text-[28px] fixed inset-0 z-10">
      <button onClick={() => {
        enableFullscreenNavigator(false)
        document.body.style.overflow = "visible";

      }}>
        <IoMdClose className="animate-jump-in text-[32px] absolute right-0 mr-4 mt-2" />
      </button>
      <ul className="w-full h-full flex flex-col items-center justify-top p-12">
        <li className="animate-fade-right p-5">Home</li>
        <li className="animate-fade-right p-5">About</li>
      </ul>
    </div>
  )

  // useful context-related info
  const [fullscreenNavigator, enableFullscreenNavigator] = useState(false)
  const [burgerButton, enableBurgerButton] = useState(false)

  const contextInfo = {
    fullscreenNavigator,
    enableFullscreenNavigator,
    burgerButton,
    enableBurgerButton
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

  return (
    <>
      <PageContext.Provider value={contextInfo}>
        {fullscreenNavigator && <FullscreenNavigator />}
        <Navigator />
        <div className={main}>
          {children}
        </div>
        <Footer className="flex">
          <LinkButton icon={<FaYoutube />} useIconBg />
          <LinkButton icon={<FaInstagram />} useIconBg />
          <LinkButton icon={<FaTiktok />} useIconBg />
          <LinkButton icon={<FaTwitter />} useIconBg />
        </Footer>
      </PageContext.Provider >
      <div className="flex items-center justify-center">
        <span className="flex flex-row items-center gap-2 text-white font-tiny5">Made by Rafa with <FaHeart color="#F90605" /></span>
      </div>
    </>
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

TimerContextProvider.propTypes = {
  children: PropTypes.node
}
