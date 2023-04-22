import express, {Express} from 'express';
import dotenv from 'dotenv';
import portfolioRouter from './routes/portfolio';
import coursesRouter from './routes/courses';

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(portfolioRouter);
app.use(coursesRouter);

export default app;
