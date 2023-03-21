import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.CORS);
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
    credentials: true,
  })
);
app.use(morgan('tiny'));
app.use(cookieParser());

const port = 8000;

mongoose.connect('mongodb://localhost:27017/FootballPlayersPlatform', {
  useNewUrlParser: true,
});

// http get request
app.get('/', (req, res) => {
  res.status(201).json('Home GET');
});

app.use('/', router);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(status).json({ message, stack: err.stack });
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
});
