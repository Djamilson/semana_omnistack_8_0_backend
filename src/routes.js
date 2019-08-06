import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import HomeController from './app/controllers/HomeController';

const routes = new Router();
const upload = multer(multerConfig);

/**
 * criar user
 */

/**
 * validar email do user
 *
 */

routes.get('/homes', HomeController.index);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
