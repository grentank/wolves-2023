import express from 'express';
import { Student, Review } from '../../../db/models';

const studentsRouter = express.Router();

studentsRouter.get('/', async (req, res) => {
  const allStudents = await Student.findAll({
    order: [['createdAt', 'DESC']],
  });
  const initState = { allStudents };
  res.render('Layout', initState);
});

// studentsRouter.post('/', async (req, res) => {
//   await Student.create(req.body);
//   res.redirect('/students');
// });

studentsRouter.get('/add', (req, res) => {
  res.render('Layout');
});

studentsRouter.get('/:id', async (req, res) => {
  const oneStudent = await Student.findOne({
    where: {
      id: req.params.id,
    },
    include: Review,
  });
  const initState = { oneStudent };
  res.render('Layout', initState);
});

studentsRouter.get('/:id/edit', async (req, res) => {
  const editStudent = await Student.findOne({
    where: {
      id: req.params.id,
    },
  });
  const initState = { editStudent };
  res.render('Layout', initState);
});

// studentsRouter.post('/:studentId/reviews', async (req, res) => {
//   const { review } = req.body;
//   const { studentId } = req.params;
//   await Review.create({
//     body: review,
//     studentId,
//   });
//   res.redirect(`/students/${studentId}`);
// });

export default studentsRouter;
