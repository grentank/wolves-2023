import express from 'express';
import React from 'react';
import morgan from 'morgan';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import { Comment } from '../db/models';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const allComments = await Comment.findAll();
  const initState = { allComments };

  const element = React.createElement(Layout, { initState, title: 'Main page' });
  const html = renderToString(element);
  res.send(`<!DOCTYPE html>${html}`);
});

app.post('/comments', async (req, res) => {
  const { title, messagepost: message } = req.body;
  await Comment.create({ title, message });
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
