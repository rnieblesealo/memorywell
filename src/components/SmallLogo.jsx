export default function SmallLogo() {
  return (
    <img
      src="/public/small-logo.png"
      alt="Small Logo"
      width="100px"
      height="50px"
      className="transition-opacity duration-[0.2s] hover:opacity-50" // shouldnt necessarily be default but we dont practically have a context where this isnt useful
    />
  )
}

