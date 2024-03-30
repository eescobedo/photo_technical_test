import { Photo } from './Photo'
import { User } from './User'
import { Album } from './Album'

export class EnrichedPhoto extends Photo {
  album: Album
  user: User

  constructor (photo: Photo, album: Album, user: User) {
    super(photo.id, photo.title, photo.url, photo.thumbnailUrl, photo.albumId)
    this.album = album
    this.user = user
  }
}
