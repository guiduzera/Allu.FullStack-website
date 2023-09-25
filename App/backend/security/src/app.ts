import express, { Express } from 'express';
import cors from 'cors';
import Router from './routes/Router';
import UniversalErrorMiddleware from './middlewares/universalError.middleware';

class App {
  public app: Express;
  public routerClass = new Router();

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => {
      res.status(200).json({ message: 'Hello World!' });
    });
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(this.routerClass.router);
    this.app.use(UniversalErrorMiddleware.handleErrors);
  }

  public start(PORT: number | string): void {
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export { App };

// importação necessária para o teste
export const { app } = new App();
