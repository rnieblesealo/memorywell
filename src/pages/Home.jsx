import LinkButton from "../components/LinkButton"
import StreamMenu from "../components/StreamMenu"
import ShowList from "../components/ShowList"
import Hero from "../components/Hero"

import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Hero />
      <StreamMenu>
        <LinkButton url="https://open.spotify.com/artist/6Cf1gaO3TNZcFlT209avc8" icon={<FaSpotify />} />
        <LinkButton url="https://music.apple.com/us/artist/memory-well/1663607861" icon={<SiApplemusic />} />
      </StreamMenu>
      <ShowList />
    </div>
  )
}
