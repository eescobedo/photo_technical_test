import axios from 'axios';

export class AlbumRepository {
  async getAlbumById(albumId: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
    return response.data;
  }
}
