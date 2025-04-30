import ShowList from "../components/ShowList"
import Hero from "../components/Hero"
import { UsePageContext } from "../util/context"
import ARPreorderLink from "../components/ARPreorderLink"

export default function Home() {
  const ctx = UsePageContext()

  return (
    <div className="flex flex-col items-center justify-top gap-10">
      <Hero />
      {ctx.currentStyle.style === "almostReal" &&
        <ARPreorderLink />
      }
      <ShowList />
    </div >
  )
}
