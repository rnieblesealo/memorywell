import { PageContextProvider } from "../util/PageContext"
import PageHeader from "../components/PageHeader"

export default function About() {
  return (
    <PageContextProvider>
      <PageHeader title="About" imgSrc="/music-bg.jpeg" />
      <div className="text-center md:text-left flex flex-col items-center justify-center md:flex-row md:justify-top md:items-start w-3/4 md:w-1/2 gap-3 animate-fade-up animate-duration-[600ms]">
        <img
          src="./members.jpg"
          className="w-60 rounded-lg"
        />
        <p className="text-white">
          Memory Well is a 4-piece rock n&apos; roll outfit based in Orlando, FL.
        </p>
      </div>
    </PageContextProvider>
  )
}
