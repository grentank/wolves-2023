import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  const initState = { hello: 'world!' };
  res.render('Layout', initState);
});

export default indexRouter;
