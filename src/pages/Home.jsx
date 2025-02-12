import BigLogo from "../components/BigLogo"
import FeaturedVideo from "../components/FeaturedVideo"
import LinkButton from "../components/LinkButton"
import StreamMenu from "../components/StreamMenu"
import ShowList from "../components/ShowList"

import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"

import PageContext from "../util/PageContext"

export default function Home() {
  return (
    <>
      <PageContext>
        <BigLogo />
        <FeaturedVideo />
        <StreamMenu>
          <LinkButton url="https://open.spotify.com/artist/6Cf1gaO3TNZcFlT209avc8" icon={<FaSpotify />} />
          <LinkButton url="https://music.apple.com/us/artist/memory-well/1663607861" icon={<SiApplemusic />} />
        </StreamMenu>
        <ShowList>
        </ShowList>
      </PageContext>
    </>
  )
}
