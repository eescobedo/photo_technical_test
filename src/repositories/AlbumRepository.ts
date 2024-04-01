import axios from 'axios'
import { Album } from '../models/Album'
import 'dotenv/config'

export class AlbumRepository {
  async getAlbumById (albumId: string): Promise<Album> {
    const response = await axios.get(`${process.env.EXTERNAL_API_URL}/albums/${albumId}`)
    return response.data
  }

  async getAllAlbums (): Promise<Album[]> {
    const response = await axios.get(`${process.env.EXTERNAL_API_URL}/albums`)
    const data = response.data
    return data
  }
}
