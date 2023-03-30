import { Router } from "express";

import validateSchema from '../middlewares/schemaValidation.js';
import patientSchema from "../models/patientSchema.js";

const router = Router();

router.post('/sign-up', validateSchema(patientSchema), );

export default router;

