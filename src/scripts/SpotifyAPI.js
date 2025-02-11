import axios from "axios"

// access spotify api
async function getSpotifyAccessToken() {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

  // encode client id, secret
  const auth = btoa(`${clientID}:${clientSecret}`)

  try {
    // use axios to send post request to spotify at endpoint /api/token
    const tokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: "client_credentials"
      }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    // grab access token from response
    const accessToken = tokenResponse.data.access_token;
    console.log("Access token: ", accessToken)

    // return it!
    return accessToken;
  } catch (error) {
    // do this if any error occurs
    console.error("Error fetching access token: ", error)
    return null;
  }
}

export async function getArtistAlbums() {
  // get access token
  const token = await getSpotifyAccessToken()
  if (!token) {
    return
  }

  try {
    // query spotify to get albums
    const artistID = "6Cf1gaO3TNZcFlT209avc8" // from web url
    const response = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/albums`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    // log retrieved items
    console.log("Artist albums: ", response.data.items)

  } catch (error) {
    // do this if any error occurs
    console.error("Error fetching access token: ", error)
    return null;
  }
}

getArtistAlbums()
