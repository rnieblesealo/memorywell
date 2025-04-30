import { useState } from "react"
import { Link } from "react-router-dom"
import { UsePageContext } from "../util/context"

const ARPreorderLink = () => {
  const ctx = UsePageContext()

  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to="https://pleasuretapes.myshopify.com/products/pt-122-almost-real-by-memory-well-ltd-100-cd-preorder"
      target="_blank"
      className="text-white text-center flex flex-col items-center justify-center font-instrument bg-black p-5 rounded-lg animate-fade-up w-3/5 sm:w-4/5"
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
        className="w-full aspect-square object-cover rounded-sm" />
    </Link>
  )
}

export default ARPreorderLink
