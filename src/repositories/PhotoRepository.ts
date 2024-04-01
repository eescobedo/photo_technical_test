import axios from 'axios'
import { Photo } from '../models/Photo'
import 'dotenv/config'

export class PhotoRepository {
  async getPhotoDetails (photoId: string) {
    const photoResponse = await axios.get(`${process.env.EXTERNAL_API_URL}/photos/${photoId}`)
    return photoResponse.data
  }

  async getAllPhotos (): Promise<Photo[]> {
    const photosResponse = await axios.get(`${process.env.EXTERNAL_API_URL}/photos`)
    return photosResponse.data
  }
}
