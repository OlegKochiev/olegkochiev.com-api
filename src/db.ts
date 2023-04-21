import dotenv from 'dotenv';
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

export default mongoose;
