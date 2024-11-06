import { Router } from 'express';
import { getEmpresas, postEmpresa, deleteEmpresa, getEmpresa } from '../controllers/empresa.controller.js';

const empresasRouter = Router();

empresasRouter.get('/empresas', getEmpresas);
empresasRouter.get('/empresas/:id', getEmpresa);
empresasRouter.post('/empresas', postEmpresa);
empresasRouter.delete('/empresas/:id', deleteEmpresa);

export default empresasRouter;