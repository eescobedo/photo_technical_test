import axios from 'axios'
import { Photo } from '../models/Photo'

export class PhotoRepository {
  async getPhotoDetails (photoId: string) {
    const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
    return photoResponse.data
  }

  async getAllPhotos (): Promise<Photo[]> {
    const photosResponse = await axios.get('https://jsonplaceholder.typicode.com/photos')
    return photosResponse.data
  }
}
