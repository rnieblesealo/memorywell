import PageHeader from "../components/PageHeader"
import Song from "../components/Song"
import StreamMenu from "../components/StreamMenu"
import LinkButton from "../components/LinkButton"

import { useEffect, useState } from "react"
import { nanoid } from "nanoid"

import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"

import getAlbumInfo from "../scripts/spotify"

// NOTE: having as separate component avoids triggering re-render on music load
function MusicList() {
  // get music info 
  const [songs, setSongs] = useState([])
  useEffect(() => {
    getAlbumInfo().then((data) => {
      console.log("Data: ", data)
      console.log(data[0].images[0].url)

      const songs = data.map((album) => (
        <Song
          key={`${nanoid()}`}
          imgSrc={`${album.images[0].url}`}
          title={`${album.name}`}
          release={`${new Date(album.release_date).toLocaleString("en-US", { year: "numeric", month: "long" })}`}
          link={`${album.external_urls.spotify}`}
        />
      ))

      setSongs(songs)
    })
      .catch((error) => {
        console.log("Spotify API error: ", error)
      })
  }, [])

  return (
    <>
      {songs}
    </>
  )
}

export default function Music() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <PageHeader imgSrc="/music-bg.jpeg" title="Music" />
      <StreamMenu>
        <LinkButton url="https://open.spotify.com/artist/6Cf1gaO3TNZcFlT209avc8" icon={<FaSpotify />} />
        <LinkButton url="https://music.apple.com/us/artist/memory-well/1663607861" icon={<SiApplemusic />} />
      </StreamMenu>
      <ul className="w-min-content overflow-hidden">
        <MusicList />
      </ul>
    </div>
  )
}
