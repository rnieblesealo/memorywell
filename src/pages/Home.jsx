import ShowList from "../components/ShowList"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-top gap-10">
      <Hero />
      <ShowList />
    </div>
  )
}
