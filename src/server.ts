import 'dotenv/config'
import { App } from "./App";

const PORT = process.env.PORT || '4001';

new App().start(PORT);
