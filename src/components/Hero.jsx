import { UsePageContext } from "../util/PageContext"

const Hero = () => {
  const ctx = UsePageContext()
  return ctx.currentStyle.hero
}

export default Hero
