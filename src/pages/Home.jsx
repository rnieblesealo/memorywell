import ShowList from "../components/ShowList"
import Hero from "../components/Hero"
import { Link } from "react-router-dom"
import { UsePageContext } from "../util/context"
import { useState } from "react"

export default function Home() {
  const ctx = UsePageContext()

  const ARPreorderLink = () => {
    const [hovered, setHovered] = useState(false)

    return (
      <Link
        to="https://pleasuretapes.myshopify.com/products/pt-122-almost-real-by-memory-well-ltd-100-cd-preorder"
        target="_blank"
        className="text-white flex flex-col items-center justify-center font-instrument bg-black p-5 rounded-lg animate-fade-up"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: "color 200ms, outline 200ms",
          outline: `1px solid ${hovered ? ctx.currentStyle.accentColor : "white"}`,
          color: `${hovered ? ctx.currentStyle.accentColor : "white"}`
        }}>
        <span className="mb-4 text-xl">Preorder the <i>Almost Real</i> CD:</span>
        <img
          src="./arcd.jpg"
          className="w-60 aspect-square object-cover rounded-sm" />
      </Link>
    )
  }

  return (
    <div className="flex flex-col items-center justify-top gap-10">
      <Hero />
      <ARPreorderLink />
      <ShowList />
    </div >
  )
}
