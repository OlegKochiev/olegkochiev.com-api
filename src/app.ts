import express, {Express} from 'express';
import dotenv from 'dotenv';
import portfolioRouter from './routes/portfolio';

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(portfolioRouter);

export default app;
