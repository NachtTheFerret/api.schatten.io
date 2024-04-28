import { Router } from 'express';

export const router = Router();

router.get('/hello', (_req, res) => {
  res.send('Hello, world!');
});
