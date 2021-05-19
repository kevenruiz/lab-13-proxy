/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';
import { formatLocation } from './munge-utils.js';


// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('PROXI API');
});

// API routes,
app.get('/location', async (req, res) => {
  try {

    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API}&q=${req.query.search}&format=json`);
    // munge the data
    const location = formatLocation(response.body);
    console.log('This is location console log', location);

    // send it back
    res.json(location);
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});
/*
app.get('/weather', async (req, res) => {
  try {

    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_API}&q=${req.query.search}&format=json`);

    // munge the data
    const location = formatLocation(response.body);

    // send it back
    res.json(location);
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});
*/

// use SQL query to get data...

// send back the data

// use SQL query to get data...


// send back the data


export default app;