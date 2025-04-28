import PropTypes from "prop-types"
import { UsePageContext } from "../util/context"

export default function PageHeader({ title }) {
  const ctx = UsePageContext()

  return (
    <div className="animate-fade-right w-full h-[200px] sm:h-[250px] bg-black text-white flex items-center justify-center text-center text-[48px] overflow-hidden relative">
      <img
        src={ctx.currentStyle?.pageHeader}
        className="w-full h-full brightness-50 object-cover"
      />
      <span className="font-instrument text-4xl font-bold absolute">{title ?? "(Heading...)"}</span>
    </div>

  )
}

PageHeader.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string
}
