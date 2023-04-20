import dotenv from 'dotenv';
import {DB_OPTIONS} from './configs';
import mongoose from 'mongoose';
dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, DB_OPTIONS).then(() => {
  console.log('Connected to MongoDB');
});
