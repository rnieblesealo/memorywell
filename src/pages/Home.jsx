import clsx from "clsx"
import { useMemo } from "react"

import BigLogo from "../components/BigLogo"
import FeaturedVideo from "../components/FeaturedVideo"
import Navigator from "../components/Navigator"
import LinkButton from "../components/LinkButton"
import StreamMenu from "../components/StreamMenu"
import Show from "../components/Show"
import ShowList from "../components/ShowList"
import Footer from "../components/Footer"

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  // memoize stuff to only create once
  // this isnt expensive so not necessary but is good example
  const main = useMemo(() => {
    return clsx(
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "gap-10"
    )
  }, [])

  return (
    <>
      <Navigator />
      <div className={main}>
        <BigLogo />
        <FeaturedVideo />
        <StreamMenu>
          <LinkButton />
          <LinkButton />
          <LinkButton />
        </StreamMenu>
        <ShowList>
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
          <Show />
        </ShowList>
      </div>

      <Footer>
        <LinkButton icon={<FaYoutube />} />
        <LinkButton icon={<FaInstagram />} />
        <LinkButton icon={<FaTiktok />} />
        <LinkButton icon={<FaTwitter />} />
      </Footer>
    </>
  )
}
