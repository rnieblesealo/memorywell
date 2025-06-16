import { Link } from "react-router-dom"
import { UsePageContext } from "../util/context"
import PropTypes from "prop-types"
import { useState } from "react"

import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"
import { FaYoutube } from "react-icons/fa6"

const StreamLink = ({ url, icon }) => {
  const ctx = UsePageContext()

  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={url}
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="max-w-15 text-md h-min font-liter text-white rounded-lg p-2 flex items-center mx-1"
      style={{
        border: hovered ? `1px solid ${ctx.currentStyle?.accentColor}` : "1px solid white",
        color: hovered ? ctx.currentStyle?.accentColor : "white",
        transition: "border 0.2s ease, color 0.2s ease",
      }}>
      Stream on
      <span className="text-2xl ml-2">
        {icon}
      </span>
    </Link>
  )
}

StreamLink.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string
}

export const NormalLogo = () => (
  <div className="w-full pointer-events-none">
    <img
      src="/mw-visual.gif"
      className="bg-black w-full h-[70vh] object-cover"
      autoPlay
    />
  </div>
)

export const AlmostRealLogo = () => {
  return (
    <div className="w-full relative h-[70vh] flex items-center justify-center relative" >
      <img
        src="/ar-alt.gif"
        className="bg-black w-full h-full object-cover absolute pointer-events-none"
        autoPlay
      />
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src="/arlogo.png"
          className="max-w-3/4 object-cover"
          autoPlay
        />
        <span className="mb-[50px] text-white font-instrument font-bold italic text-lg">EP Release Tour 4/25 - 5/4</span>
        <div className="flex">
          <StreamLink url="https://open.spotify.com/album/1LNTWgrNWucP77V2AXNk4M" icon={<FaSpotify />} />
          <StreamLink url="https://music.apple.com/us/album/almost-real-ep/1805090561" icon={<SiApplemusic />} />
        </div>
      </div>
    </div >
  )
}

export const PropofolLogo = () => {
  return (
    <div className="w-full relative h-[70vh] flex items-center justify-center relative" >
      <img
        src="/mw-visual-propofol.gif"
        className="bg-black w-full h-full object-cover absolute pointer-events-none"
        autoPlay
      />
      {/* Title card and stream link */}
      <div className="relative w-full h-full flex flex-col items-center justify-center mix-blend-difference">
        <h1 className="mb-4 text-white font-instrument font-light text-7xl sm:text-8xl lg:text-9xl">Propofol</h1>
        <h2 className="mb-[50px] text-white font-instrument font-bold text-italic text-base sm:text-lg lg:text-xl">Music video out now</h2>
        <div className="flex">
          <StreamLink url="https://www.youtube.com/watch?v=B6LMETZJTIc" icon={<FaYoutube />} />
        </div>
      </div>
    </div >
  )
}
