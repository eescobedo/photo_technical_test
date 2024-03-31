import axios from 'axios'
import { Album } from '../models/Album'

export class AlbumRepository {
  async getAlbumById (albumId: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    return response.data
  }

  async getAllAlbums (): Promise<Album[]> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    const data = response.data
    console.log('ALBUMS ', { data })

    return response.data
  }
}
