import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3004;

const app = new App();

app.start(PORT);