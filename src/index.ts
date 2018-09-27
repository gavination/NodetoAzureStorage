import express from 'express';
import * as csvRouter from './controllers/csvRouter';
import reportsRouter from './v1/routers/ReportsRouter';

// Creates a new Express app instance
const app = express();
app.use(express.json());

app.use('/reports', reportsRouter);

// Configures the http://localhost:5000/ route to send a text response
app.get('/', (req, res, next) => {
  csvRouter
    .getCSV(req, res)
    .then(result => {
      res.send(result);
      next();
    })
    .catch(err => {
      res.send(`Error: ${err}`);
      next();
    });
});

app.get('/get', (req, res, next) => {
  csvRouter
    .getJSON(req, res)
    .then(result => {
      res.send(result);
      next();
    })
    .catch(err => {
      res.send(`Error: ${err}`);
      next();
    });
});

// Starts the app on port 5000, then calls the callback when
// the app successfully starts.
app.listen(5000, () => {
  console.log('Listening on port 5000: http://localhost:5000');
});
