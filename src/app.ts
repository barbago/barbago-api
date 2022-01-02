import 'reflect-metadata';

import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import csurf from 'csurf';
import helmet from 'helmet';
import morgan from 'morgan';

import {
  checkAuthorization,
  isAuthenticated,
  decodeToken,
  errorHandler,
  notFoundHandler,
} from './middlewares';
import { router } from './routes';
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(compression());
app.use(cors());
// app.use(csurf({ cookie: true }));
app.use(helmet());
app.use(morgan('tiny'));
app.use(decodeToken);

app.use(router);

app.use(notFoundHandler);
app.use(errorHandler);

// https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/
