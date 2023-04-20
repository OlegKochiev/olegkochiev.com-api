import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {DB_OPTIONS} from './configs';

dotenv.config();
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_CONNECTION_STRING ?? 'url', {}).then(() => {
  console.log('Connected to MongoDB');
});
