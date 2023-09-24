import express, { Express } from 'express';
import cors from 'cors';
//import router from './routes';
// import Router from './routes/Router';
// import UniversalErrorMiddleware from './middlewares/UniversalErrorMiddleware';

class App {
  public app: Express;
//   public routerClass = new Router();

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => {
      res.status(200).json({ message: 'Hello World!' });
    });
  }

  private config(): void {
    const accessControl: express.RequestHandler = (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');

      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    //this.app.use(router);
    this.app.use(cors());
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