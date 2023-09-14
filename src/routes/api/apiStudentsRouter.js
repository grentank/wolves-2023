import express from 'express';
import { Student, Review } from '../../../db/models';

const apiStudentsRouter = express.Router(); // /api/students

apiStudentsRouter
  .route('/')
  .post(async (req, res) => {
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
  })
  .get(async (req, res) => {
    try {
      const allStudents = await Student.findAll();
      res.json(allStudents);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

apiStudentsRouter
  .route('/:studentId')
  .delete(async (req, res) => {
    try {
      const { studentId } = req.params;
      await Student.destroy({ where: { id: studentId } });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    const { studentId } = req.params;
    const oneStudent = await Student.findOne({
      where: { id: studentId },
    });
    return res.json(oneStudent);
  })
  .put(async (req, res) => {
    // UPDATE
    try {
      const { studentId } = req.params;
      const targetStudent = await Student.findOne({ where: { id: studentId } });
      targetStudent.name = req.body.name;
      targetStudent.git = req.body.git;
      targetStudent.createdAt = req.body.createdAt;
      targetStudent.updatedAt = req.body.updatedAt;
      await targetStudent.save();
      return res.json(targetStudent);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { studentId } = req.params;
      const targetStudent = await Student.findOne({ where: { id: studentId } });
      if (req.body.name) targetStudent.name = req.body.name;
      if (req.body.git) targetStudent.git = req.body.git;
      if (req.body.createdAt) targetStudent.createdAt = req.body.createdAt;
      if (req.body.updatedAt) targetStudent.updatedAt = req.body.updatedAt;
      await targetStudent.save();
      return res.json(targetStudent);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
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
