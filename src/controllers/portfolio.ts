import {Request, Response} from 'express';
import portfolioService from '../services/db/portfolio';

const getPortfolio = async (req: Request, res: Response) => {
  try {
    const portfolio = await portfolioService.getPortfolio();
    return res.status(200).json(portfolio);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export {getPortfolio};
