import { server } from './server';

const PORT = process.env.PORT || 3000;

(async () => {
  server.listen(PORT, () => console.log(`here : http://localhost:${PORT}`));
})();
