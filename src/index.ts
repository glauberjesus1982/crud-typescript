import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection} from 'typeorm';

import userRoutes from './routes/user.routes';

const app = express();
createConnection();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use(userRoutes);

app.listen(3333);

console.log('Server on port', 3333);