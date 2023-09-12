import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import studentsRouter from './routes/studentsRouter';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter); // /students
app.use('/students', studentsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
