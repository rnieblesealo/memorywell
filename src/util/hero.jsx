import { Link } from "react-router-dom"
import { UsePageContext } from "../util/context"
import PropTypes from "prop-types"
import { useState } from "react"

import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"

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
  const ctx = UsePageContext()

  const StreamLink = ({ url, icon }) => {
    const [hovered, setHovered] = useState(false)

    return (
      <Link
        to={url}
        target="_blank"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-15 text-md h-min font-liter text-white rounded-lg p-2 font-extrabold flex items-center mx-1"
        style={{
          border: hovered ? `3px solid ${ctx.currentStyle?.accentColor}` : "3px solid white",
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
    icon: PropTypes.node
  }

  return (
    <div className="w-full relative h-[70vh] flex items-center justify-center relative" >
      <img
        src="/ar.gif"
        className="bg-black w-full h-full object-cover absolute pointer-events-none"
        autoPlay
      />
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src="/arlogo.png"
          className="max-w-3/4 object-cover"
          autoPlay
        />
        <div className="flex">
          <StreamLink url="https://open.spotify.com/album/1LNTWgrNWucP77V2AXNk4M" icon={<FaSpotify />} />
          <StreamLink url="https://music.apple.com/us/album/almost-real-ep/1805090561" icon={<SiApplemusic />} />
        </div>
      </div>
    </div >
  )
}
