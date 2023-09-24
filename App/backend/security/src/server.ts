import { App } from './app';
//import 'dotenv/config';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '..', '..', `.env.${ process.env.NODE_ENV }`) });

const PORT = process.env.APP_PORT || 3002;

const app = new App();

app.start(PORT);