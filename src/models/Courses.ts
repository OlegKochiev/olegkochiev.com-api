import mongoose from '../db';

const coursesSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  duration: String,
  hashTags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HashTags',
    },
  ],
});

const Courses = mongoose.model('Courses', coursesSchema);
export default Courses;
