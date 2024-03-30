import { PhotoRepository } from '../repositories/PhotoRepository'
import { AlbumRepository } from '../repositories/AlbumRepository'
import { UserRepository } from '../repositories/UserRepository'

export class PhotoService {
  private readonly photoRepository = new PhotoRepository()
  private readonly albumRepository = new AlbumRepository()
  private readonly userRepository = new UserRepository()

  async getPhotoDetails (photoId: string) {
    const photo = await this.photoRepository.getPhotoDetails(photoId)
    const album = await this.albumRepository.getAlbumById(photo.albumId)
    const user = await this.userRepository.getUserById(album.userId)

    return {
      id: photo.id,
      title: photo.title,
      url: photo.url,
      thumbnailUrl: photo.thumbnailUrl,
      album: {
        id: album.id,
        title: album.title,
        user: user
      }
    }
  }
}
