import express from 'express';
import { Student, Review } from '../../db/models';

const apiStudentsRouter = express.Router();

apiStudentsRouter.post('/', async (req, res) => {
  try {
    if (!req.body.name || !req.body.git) {
      return res.status(400).json({ message: 'Name and git are required' });
    }
    await Student.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

apiStudentsRouter.delete('/:studentId', async (req, res) => {
  try {
    const { studentId } = req.params;
    await Student.destroy({ where: { id: studentId } });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

apiStudentsRouter.post('/:studentId/reviews', async (req, res) => {
  try {
    const { review } = req.body;
    const { studentId } = req.params;
    if (!review) return res.status(400).json({ message: 'Review is required' });

    const newReview = await Review.create({ body: review, studentId });

    return res.json(newReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default apiStudentsRouter;
