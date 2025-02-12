export default function BigLogo() {
  return (
    <div className="w-full pointer-events-none">
      <video
        src="/logo.mp4"
        className="bg-black w-full h-[70vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
      />
    </div>
  )
}
