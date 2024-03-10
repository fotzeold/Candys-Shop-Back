import express from 'express';
import { serveStaticImages, getImage } from '../controllers/image.js';

const imageRouter = express.Router();

imageRouter.use('/img', serveStaticImages);
imageRouter.get('/:imageName', getImage);

export default imageRouter;

