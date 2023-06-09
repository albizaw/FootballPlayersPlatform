import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';

dotenv.config();
//console.log(process.env.CORS);
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.CORS);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS,
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
//'mongodb://localhost:27017/FootballPlayersPlatform'
mongoose.connect(`${process.env.MONGO_DB_URL}`, {
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
