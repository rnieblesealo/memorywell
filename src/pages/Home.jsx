import BigLogo from "../components/BigLogo"
import LinkButton from "../components/LinkButton"
import StreamMenu from "../components/StreamMenu"
import ShowList from "../components/ShowList"

import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"

import { PageContextProvider } from "../util/PageContext"

export default function Home() {
  return (
    <PageContextProvider mode="almostReal">
      <BigLogo mode="almostReal" />
      <StreamMenu>
        <LinkButton url="https://open.spotify.com/artist/6Cf1gaO3TNZcFlT209avc8" icon={<FaSpotify />} />
        <LinkButton url="https://music.apple.com/us/artist/memory-well/1663607861" icon={<SiApplemusic />} />
      </StreamMenu>
      <ShowList mode="almostReal" />
    </PageContextProvider>
  )
}
