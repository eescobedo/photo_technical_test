import { Request, Response } from 'express'
import { PhotoService } from '../services/PhotoService'

export class PhotoController {
  private readonly photoService = new PhotoService()

  async getPhotoDetails (req: Request, res: Response): Promise<void> {
    try {
      const { photoId } = req.params
      const photoDetails = await this.photoService.getPhotoDetails(photoId)
      res.json(photoDetails)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message)
      }
    }
  }
}
