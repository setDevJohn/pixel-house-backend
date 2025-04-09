import express, { Application } from 'express';
import { routes } from './routes';
import morgan from 'morgan';
import cors from 'cors';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();

    this.app.get('/', (req, res) => {
      res.json({ message: 'Hello World!' })
    })
  }

  config() {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(routes);
  }

  async start(PORT: string) {
    this.app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  
  }
}