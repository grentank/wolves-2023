import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  const initState = { hello: 'world!' };
  res.render('Layout', initState);
});

indexRouter.get('/joke', (req, res) => {
  res.render('Layout');
});
indexRouter.get('/counter', (req, res) => {
  res.render('Layout');
});

export default indexRouter;
