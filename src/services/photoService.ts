import axios from 'axios'
import { AlbumEntry } from '../types'

async function getAllAlbums (): Promise<AlbumEntry[]> {
  const response = await axios.get<AlbumEntry[]>('https://jsonplaceholder.typicode.com/albums')
  return response.data
}

export const addEntry = (): undefined => undefined

export { getAllAlbums }
