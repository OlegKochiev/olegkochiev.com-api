import express, {Express} from 'express';
import dotenv from 'dotenv';
import homeRoute from './routes/home';
import portfolioRouter from './routes/portfolio';
import coursesRouter from './routes/courses';

import mongoose from 'mongoose';
import {DB_OPTIONS} from './configs';

dotenv.config();
mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING ?? '')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => console.log(error));

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(homeRoute);
// app.use(portfolioRouter);
// app.use(coursesRouter);

export default app;
