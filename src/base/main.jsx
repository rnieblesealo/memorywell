import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// WARN: testing start
import { getArtistAlbums } from "../scripts/SpotifyAPI.js"
// WARN: testing end

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

getArtistAlbums()
