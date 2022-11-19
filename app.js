import express from 'express'
import HelloController from './controllers/hello-controller.js'
import TuitsController from './controllers/tuits/tuits-controller.js';
import UserController from './controllers/users/users-controller.js';
import cors from 'cors'

const app = express()

app.use(express.json());
app.use(cors());

TuitsController(app);
HelloController(app);
UserController(app);


app.listen(process.env.PORT || 4000)