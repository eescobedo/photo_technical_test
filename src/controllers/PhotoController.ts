import { Request, Response } from 'express'
import { PhotoService } from '../services/PhotoService'
// import { EnrichedPhoto } from '../models/EnrichedPhoto'

export class PhotoController {
  private readonly photoService = new PhotoService()

  async getPhotoDetails (req: Request, res: Response): Promise<void> {
    try {
      console.log('getPhotoDetails')

      const { photoId } = req.params
      const photoDetails = await this.photoService.getPhotoDetails(photoId)
      res.json(photoDetails)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message)
      }
    }
  }

  public async getPhotosWithFilters (req: Request, res: Response): Promise<void> {
    try {
      const filters = {
        title: req.query.title as string,
        albumTitle: req.query['album.title'] as string,
        userEmail: req.query['album.user.email'] as string
      }

      const limit = !isNaN(parseInt(req.query.limit as string)) ? parseInt(req.query.limit as string) : 25
      const offset = !isNaN(parseInt(req.query.offset as string)) ? parseInt(req.query.offset as string) : 0

      const { photos, total } = await this.photoService.getPhotosWithFilters(filters, limit, offset)
      res.json({
        success: true,
        message: 'Photos retrieved successfully',
        total,
        photos
      })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({
          success: false,
          message: error.message
        })
      }
    }
  }
}
