import { Router } from "express";

import pacientsRouter from './pacientsRoutes.js'


const router = Router();
app.use('/user', pacientsRouter);

export default router;