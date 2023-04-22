import {Request, Response} from 'express';
import coursesService from '../services/db/courses';

const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await coursesService.getCourses();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export {getCourses};
