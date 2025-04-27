import PropTypes from "prop-types"
import { UsePageContext } from "../util/context"

export default function PageHeader({ title }) {
  const ctx = UsePageContext()

  return (
    <div className="animate-fade-right w-full h-[200px] bg-black text-white flex items-center justify-center text-center text-[48px] overflow-hidden relative">
      <div className="w-full h-full absolute">
      </div>
      <img
        src={ctx.currentStyle?.pageHeader}
        className="w-full brightness-50"
      />
      <span className="absolute">{title ?? "(Heading...)"}</span>
    </div>

  )
}

PageHeader.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string
}
