import { Router } from 'express'
import { PhotoController } from '../controllers/PhotoController'

const router = Router()
const photoController = new PhotoController()

router.get('/', async (req, res) => await photoController.getPhotosWithFilters(req, res))
router.get('/:photoId', async (req, res) => await photoController.getPhotoDetails(req, res))
export default router
