import { Router } from "express";

import {validateSchema} from '../middlewares/schemaValidation.js';
import patientSchema from "../models/patientSchema.js";
import patientControllers from "../controllers/patientControllers.js";

const router = Router();

router.post('/sign-up', validateSchema(patientSchema), patientControllers.signUp);

export default router;

