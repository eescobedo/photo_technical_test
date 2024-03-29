import { Router } from 'express';
import { PhotoController } from '../controllers/PhotoController';

const router = Router();
const photoController = new PhotoController();

router.get('/:photoId', (req, res) => photoController.getPhotoDetails(req, res));

export default router;