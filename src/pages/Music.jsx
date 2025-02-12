import PageContext from "../util/PageContext"
import PageHeader from "../components/PageHeader"
import Song from "../components/Song"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"

import getAlbumInfo from "../scripts/SpotifyAPI"

// NOTE: grab updated album covers w/spotify api
export default function Music() {
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
        />
      ))

      setSongs(songs)
    })
      .catch((error) => {
        console.log("Spotify API error: ", error)
      })
  }, [])

  return (
    <PageContext>
      <PageHeader imgSrc="/music-bg.jpeg" title="Music" />
      <ul className="w-min-content overflow-hidden">
        {songs}
      </ul>
    </PageContext>
  )
}
