import { PhotoRepository } from '../repositories/PhotoRepository';
import { AlbumRepository } from '../repositories/AlbumRepository';
import { UserRepository } from '../repositories/UserRepository';

export class PhotoService {
  private photoRepository = new PhotoRepository();
  private albumRepository = new AlbumRepository();
  private userRepository = new UserRepository();

  async getPhotoDetails(photoId: string) {
    const photo = await this.photoRepository.getPhotoDetails(photoId);
    const album = await this.albumRepository.getAlbumById(photo.albumId);
    const user = await this.userRepository.getUserById(album.userId);

    return {
      ...photo,
      album: {
        ...album,
        user
      }
    };
  }
}
