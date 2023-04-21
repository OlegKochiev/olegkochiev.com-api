import mongoose from '../db';

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  hashTags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HashTags',
    },
  ],
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;
