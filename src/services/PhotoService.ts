import { PhotoRepository } from '../repositories/PhotoRepository'
import { AlbumRepository } from '../repositories/AlbumRepository'
import { UserRepository } from '../repositories/UserRepository'
import { EnrichedPhoto } from '../models/EnrichedPhoto'

interface Filters {
  title?: string
  albumTitle?: string
  userEmail?: string
}
export class PhotoService {
  private readonly photoRepository = new PhotoRepository()
  private readonly albumRepository = new AlbumRepository()
  private readonly userRepository = new UserRepository()

  async getPhotoDetails (photoId: string) {
    const photo = await this.photoRepository.getPhotoDetails(photoId)
    const album = await this.albumRepository.getAlbumById(photo.albumId)
    const user = await this.userRepository.getUserById(album.userId.toString())

    return {
      id: photo.id,
      title: photo.title,
      url: photo.url,
      thumbnailUrl: photo.thumbnailUrl,
      album: {
        id: album.id,
        title: album.title,
        user
      }
    }
  }

  async getPhotosWithFilters (filters: Filters, limit: number = 25, offset: number = 0): Promise<EnrichedPhoto[]> {
    console.log('getPhotosWithFilters@PhotoService')
    const [photos, albums, users] = await Promise.all([
      this.photoRepository.getAllPhotos(),
      this.albumRepository.getAllAlbums(),
      this.userRepository.getAllUsers()
    ])

    let filteredPhotos = photos

    if (filters.title) {
      filteredPhotos = filteredPhotos.filter(photo => photo.title && filters.title && photo.title.includes(filters.title))
    }

    if (filters.albumTitle) {
      filteredPhotos = filteredPhotos.filter(photo => {
        const album = albums.find(album => album.id === photo.albumId)
        if (album == null) {
          throw new Error(`Album not found for photo with id ${photo.id}`)
        }
        return album.title && filters.albumTitle && album.title.includes(filters.albumTitle)
      })
    }

    if (filters.userEmail) {
      filteredPhotos = filteredPhotos.filter(photo => {
        const album = albums.find(album => album.id === photo.albumId)
        if (album == null) {
          throw new Error(`Album not found for photo with id ${photo.id}`)
        }
        const user = users.find(user => user.id === album.userId)
        if (user == null) {
          throw new Error(`User not found for photo with id ${album.userId}`)
        }
        return user.email && filters.userEmail && user.email.includes(filters.userEmail)
      })
    }

    const paginatedPhotos = filteredPhotos.slice(offset, offset + limit)

    const enrichedPhotos = paginatedPhotos.map(photo => {
      const album = albums.find(album => album.id === photo.albumId)
      if (album == null) {
        throw new Error(`Album not found for photo with id ${photo.id}`)
      }
      const user = users.find(user => user.id === album.userId)
      return new EnrichedPhoto(photo, album, user, filteredPhotos.length)
    })

    return enrichedPhotos
  }
}
