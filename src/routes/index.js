import { Router } from "express";

import patientsRouter from './patientsRoutes.js'


const router = Router();
app.use('/patient', patientsRouter);

export default router;