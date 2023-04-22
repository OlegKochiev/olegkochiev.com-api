import {Router} from 'express';
import {getCourses} from '../controllers/courses';
import {PATHS} from '../constants';

const router = Router();

router.get(PATHS.COURSES.ALL(), getCourses);

export default router;
