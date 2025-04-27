import { Route, Routes, BrowserRouter } from "react-router-dom"
import { PageContextProvider } from "../util/context"

import Home from "../pages/Home"
import Music from "../pages/Music"
import About from "../pages/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContextProvider style="almostReal" />}>
          <Route index={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
