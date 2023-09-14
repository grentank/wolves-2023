import express from 'express';
import { Review } from '../../../db/models';

const apiReviewsRouter = express.Router();

apiReviewsRouter.patch('/:id', async (req, res) => {
  await Review.update(req.body, { where: { id: req.params.id } });
  res.sendStatus(204);
});

export default apiReviewsRouter;
