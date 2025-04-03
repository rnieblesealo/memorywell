import PageContext from "../util/PageContext"
import PageHeader from "../components/PageHeader"

export default function About() {
  return (
    <PageContext>
      <PageHeader title="About" imgSrc="/music-bg.jpeg" />
      <div className="flex w-3/4 gap-3 animate-fade-up animate-duration-[600ms]">
        <img
          src="./members.jpg"
          className="w-60 rounded-lg"
        />
        <p className="text-white">
          Memory Well is a 4-piece rock n&apos; roll outfit based in Orlando, FL.
        </p>
      </div>
    </PageContext>
  )
}
