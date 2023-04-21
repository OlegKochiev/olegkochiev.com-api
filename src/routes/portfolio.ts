import {Router} from 'express';
import {getPortfolio} from '../controllers/portfolio';
import {PATHS} from '../constants';

const router = Router();

router.get(PATHS.PORTFOLIO.ALL(), getPortfolio);

export default router;
