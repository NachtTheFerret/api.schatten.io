import Express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { router } from './rest/router';

// Rest API
export const server = Express();

server.use(cors());
server.use(cookieParser(process.env.SIGNED_COOKIE_SECRET));
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));

server.use('/rest/v1', router);
