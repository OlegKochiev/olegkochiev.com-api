import Courses from '../../models/Courses';

const getCourses = async () => {
  const courses = await Courses.find({});
  return courses;
};

export default {getCourses};
