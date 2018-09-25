import express from 'express';
import * as csvRouter from './controllers/csvRouter'

// Creates a new Express app instance
const app = express();

// Configures the http://localhost:5000/ route to send a text response
app.get('/', (req, res, next) => {
    csvRouter.getCSV(req, res)
        .then((result) =>{
            res.send(result) 
        }).catch((err) => {
            res.send(`Error: ${err}`)
        })
});

// Starts the app on port 5000, then calls the callback when 
// the app successfully starts.
app.listen(5000, () => {
    console.log('Listening on port 5000: http://localhost:5000');
});