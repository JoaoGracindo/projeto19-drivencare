import { Router } from "express";

import patientsRouter from './patientRoutes.js'


const router = Router();
router.use('/patient', patientsRouter);

export default router;