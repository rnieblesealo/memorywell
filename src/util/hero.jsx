export const NormalLogo = () => (
  <div className="w-full pointer-events-none">
    <img
      src="/mw-visual.gif"
      className="bg-black w-full h-[70vh] object-cover"
      autoPlay
    />
  </div>
)

export const AlmostRealLogo = () => (
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
