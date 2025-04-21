import BigLogo from "../components/BigLogo"
import FeaturedVideo from "../components/FeaturedVideo"
import LinkButton from "../components/LinkButton"
import StreamMenu from "../components/StreamMenu"
import ShowList from "../components/ShowList"

import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"

import { fetchShowInfo } from "../scripts/SheetDB"
import { useState, useEffect } from "react"

import PageContext from "../util/PageContext"
import Show from "../components/Show"

export default function Home() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    async function loadShows() {
      const showInfo = await fetchShowInfo()
      setShows(showInfo)
    }

    loadShows()
  }, [])

  const showCards = shows.map((info, index) => <Show
    key={index}
    date={info.date}
    time={info.time}
    venue={info.venue}
    city={info.city}
    state={info.state}
    price={info.price}
    ticketLink={info.ticketLink}
    ageRestriction={info.ageRestriction}
    otherBands={info.otherBands}
  />)

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
          {showCards}
        </ShowList>
      </PageContext>
    </>
  )
}
