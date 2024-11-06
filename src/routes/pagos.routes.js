import { Router } from 'express';
import { getPagos, postPago } from '../controllers/pagos.controller.js'

const pagosRouter = Router();

pagosRouter.post('/pagos', postPago);
pagosRouter.get('/pagos', getPagos);

export default pagosRouter;
