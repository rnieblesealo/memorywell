import PageContext from "../util/PageContext"
import PageHeader from "../components/PageHeader"

export default function About() {
  return (
    <PageContext>
      <PageHeader title="About" imgSrc="/music-bg.jpeg"/>
      <p className="text-white">
        We fucking love music.
      </p>
    </PageContext>
  )
}
