import BigLogo from "../components/BigLogo"
import FeaturedVideo from "../components/FeaturedVideo"
import LinkButton from "../components/LinkButton"
import StreamMenu from "../components/StreamMenu"
import Show from "../components/Show"
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
          <LinkButton icon={<FaSpotify />} />
          <LinkButton icon={<SiApplemusic />} />
        </StreamMenu>
        <ShowList>
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
        </ShowList>
      </PageContext>
    </>
  )
}
