const mongoose = require('mongoose');

const services = require('./routes/service');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/quick')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('could not connect to MongoDb...', err))

app.use(express.json());
app.use('/api/services', services);

const port = process.env.PORT || 6000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`)) 