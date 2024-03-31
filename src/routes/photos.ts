import { Router } from 'express'
import { PhotoController } from '../controllers/PhotoController'

const router = Router()
const photoController = new PhotoController()

// router.get('/:photoId', async (req, res) => await photoController.getPhotoDetails(req, res))
router.get('/', async (req, res) => await photoController.getPhotosWithFilters(req, res))
export default router
