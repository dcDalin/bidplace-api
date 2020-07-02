import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/user.routes';
import env from './env';

// environment variables
const PORT = env('PORT');

(async () => {
  try {
    // instanciate express
    const app = express();

    // Routes
    app.use('/user', userRoutes);

    // Listen on port
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
})();
