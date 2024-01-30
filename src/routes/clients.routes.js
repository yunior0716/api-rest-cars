import { Router } from 'express';
import {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from '../controllers/client.controller.js';

const router = Router();

router.post('/client', createClient);
router.get('/clients', getClients);
router.get('/client/:id', getClient);
router.put('/client/:id', updateClient);
router.delete('/client/:id', deleteClient);

export default router;
