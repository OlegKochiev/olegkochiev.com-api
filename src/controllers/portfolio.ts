import {Request, Response} from 'express';
import portfolioService from '../services/portfolio';

const getPortfolio = async (req: Request, res: Response) => {
  try {
    const portfolio = await portfolioService.getPortfolio();
    return res.status(200).json(portfolio);
  } catch (error) {}
};

export {getPortfolio};
