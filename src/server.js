import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/render/indexRouter';
import studentsRouter from './routes/render/studentsRouter';
import apiStudentsRouter from './routes/api/apiStudentsRouter';
import apiReviewsRouter from './routes/api/apiReviewsRouter';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter); // /students
app.use('/students', studentsRouter);
app.use('/api/students', apiStudentsRouter);
app.use('/api/reviews', apiReviewsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
