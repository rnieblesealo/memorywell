import PageContext from "../util/PageContext"
import Song from "../components/Song"

// NOTE: grab updated album covers w/spotify api
export default function Music() {
  return (
    <PageContext>
      <div className="w-full h-[200px] bg-gray-700 text-white flex items-center justify-center text-center text-[48px]">
        Music
      </div>
      <ul className="w-min-content overflow-hidden">
        <Song
          imgSrc="https://i.scdn.co/image/ab67616d00001e02d2e6790c3f8ff631f3eb2098"
          title="I Can't Stay"
          release="2023"
          writtenBy="Joshua Cabarrubias"
          producedBy="Joshua Cabarrubias"
          recordedAt="Josh's house"
        />
        <Song
          imgSrc="https://i.scdn.co/image/ab67616d00001e023d8793fdb20e4d31c8d3fed7"
          title="IDC"
          release="2024"
          writtenBy="Joshua C, Jacob Berkun, Ty Todd, Evan Michalak"
          producedBy="Jacob Berkun"
          recordedAt="Josh's house"
        />
      </ul>
    </PageContext>
  )
}
