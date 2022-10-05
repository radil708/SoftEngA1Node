/**
 * @file Implements an Express Node HTTP server.
 */
import express, {Request, Response} from 'express';
import * as mongoose from "mongoose"; // added during lect
const cors = require('cors')
const app = express();
app.use(cors()); //Allows servers and clients to talk safely
app.use(express.json()); // Allows server to parse data coming from clients
mongoose.connect('mongodb://localhost:27017/fsd') // adde during lecture used to create an enforceable schema
// unlike relational no schema enforeced so you need to design well and are resp for data

function sayHello (req: Request, res: Response) {
    res.send('Hi from FSD!')
}

/* THis configures servers to respond to specific requests, done below */

// app.get means listen for incoming get request with the following patterns
// get method takes 2 ards, first is a string, second is a function (this is javascript)
app.get('/', sayHello);
// javascript often uses lambda functions to save on variable names
app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT); //when running on 3rd party servers, this method allows
    //different parties to

// Servers have different methods, GET, POST, PUT, DELETE
