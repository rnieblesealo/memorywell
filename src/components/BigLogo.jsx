import PropTypes from "prop-types"

export default function BigLogo({ mode }) {
  function selectLogo() {
    switch (mode) {
      case "normal":
        console.log("Yea")
        return (
          <div className="w-full pointer-events-none">
            <img
              src="/mw-visual.gif"
              className="bg-black w-full h-[70vh] object-cover"
              autoPlay
            />
          </div>
        )
      case "almostReal":
        return (
          <div className="w-full pointer-events-none relative h-[70vh] flex items-center justify-center">
            <img
              src="/ar.gif"
              className="bg-black w-full h-full object-cover absolute"
              autoPlay
            />
            <img
              src="/arlogo.png"
              className="w-3/4 object-cover absolute"
              autoPlay
            />
          </div>
        )
      default:
        return null;
    }
  }

  return selectLogo()
}

BigLogo.propTypes = {
  mode: PropTypes.oneOf([null, "normal", "almostReal"])
}
