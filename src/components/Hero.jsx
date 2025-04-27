import { UsePageContext } from "../util/context"

const Hero = () => {
  const ctx = UsePageContext()
  return ctx.currentStyle?.hero
}

export default Hero
