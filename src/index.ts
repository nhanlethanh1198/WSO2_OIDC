import * as express from "express";
import * as cors from 'cors'
import { config } from "./config";
import api from './routes'

const app = express();

app.use('/api/*', cors())
app.use('/api', api)

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));
