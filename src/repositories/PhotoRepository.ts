import axios from 'axios';

export class PhotoRepository {
  async getPhotoDetails(photoId: string) {
    const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
    return photoResponse.data;
  }
}
