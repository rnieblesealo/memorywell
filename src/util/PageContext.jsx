import { createContext } from "react";
import PropTypes from "prop-types"

import Navigator from "../components/Navigator"
import LinkButton from "../components/LinkButton"
import Footer from "../components/Footer"

import { FaHeart } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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

  return (
    <>
      <PageContext.Provider>
        <Navigator />
        <div className={main}>
          {children}
        </div>
        <Footer className="flex ">
          <LinkButton icon={<FaYoutube />} useIconBg />
          <LinkButton icon={<FaInstagram />} useIconBg />
          <LinkButton icon={<FaTiktok />} useIconBg />
          <LinkButton icon={<FaTwitter />} useIconBg />
        </Footer>
      </PageContext.Provider>
      <div className="flex items-center justify-center">
        <span className="flex flex-row items-center gap-2 text-white font-tiny5">Made by Rafa with <FaHeart color="#F90605" /></span>
      </div>
    </>
  )
}

// retrieve context for data purposes
/*
export function getPageContext() {
  const context = useContext(PageContext)

  if (!context) {
    throw new Error("No page context defined!")
  }

  return context;
}
*/

TimerContextProvider.propTypes = {
  children: PropTypes.node
}
