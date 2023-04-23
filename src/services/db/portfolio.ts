import Portfolio from '../../models/Portfolio';

const getPortfolio = async () => {
  const portfolio = await Portfolio.find({});
  return portfolio;
};

// const getPortfolio = async () => {
//   const portfolio = await Portfolio.find({});
//   return portfolio;
// };

export default {getPortfolio};
