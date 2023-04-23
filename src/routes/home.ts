import {Router} from 'express';
import {PATHS} from '../constants';

const router = Router();

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING ?? '')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => console.log(error));

router.get(PATHS.HOME(), (req, res) => {
  try {
    return res.status(200).json(mongoose);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
