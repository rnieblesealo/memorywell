import BigLogo from "../components/BigLogo"
import LinkButton from "../components/LinkButton"
import StreamMenu from "../components/StreamMenu"
import ShowList from "../components/ShowList"
import Show from "../components/Show"

import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"

import { PageContextProvider } from "../util/PageContext"
import { useState, useEffect } from "react"

import { getAllShows } from "../scripts/client"

export default function Home() {
  const [shows, setShows] = useState(null)

  useEffect(() => {
    async function loadShows() {
      const showInfo = await getAllShows()
      console.log(showInfo)
      setShows(showInfo)
    }

    loadShows()
  }, [])

  const showCards = shows?.map((show) => {
    // only display upcoming shows
    if (new Date(show.date) < Date.now()) {
      return null
    }

    return (
      <Show
        key={show.id}
        date={show.date}
        venue={show.venue}
        city={show.city}
        state={show.state}
        price={show.price}
        supportingArtists={show.supportingArtists}
        ageRestriction={show.ageRestriction}
        ticketLink={show.ticketLink}
        flyerLink={show.flyerLink}
      />
    )
  })

  return (
    <PageContextProvider mode="almostReal">
      <BigLogo mode="almostReal" />
      <StreamMenu>
        <LinkButton url="https://open.spotify.com/artist/6Cf1gaO3TNZcFlT209avc8" icon={<FaSpotify />} />
        <LinkButton url="https://music.apple.com/us/artist/memory-well/1663607861" icon={<SiApplemusic />} />
      </StreamMenu>
      <ShowList>
        {showCards}
      </ShowList>
    </PageContextProvider>
  )
}
