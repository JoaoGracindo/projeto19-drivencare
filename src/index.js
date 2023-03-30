import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import router from './routes.js';

const app = express();

app.use(json());
app.use(cors());
app.use(router);

const port = process.env.DATABASE_URL || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}...`));