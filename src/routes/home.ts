import {Router} from 'express';
import {PATHS} from '../constants';

const router = Router();

router.get(PATHS.HOME(), (req, res) => {
  try {
    return res.status(200).json("it's ok");
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
