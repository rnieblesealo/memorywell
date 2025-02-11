import { Route, Routes, BrowserRouter } from "react-router-dom"

import Home from "../pages/Home"
import Music from "../pages/Music"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
