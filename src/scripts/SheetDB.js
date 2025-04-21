import axios from 'axios';

export async function fetchShowInfo() {
  try {
    const sheetURL = import.meta.env.VITE_SHOWSHEET_URL
    const showData = await axios.get(sheetURL)

    return showData.data
  } catch (error) {
    console.error(error)
  }
}
