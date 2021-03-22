const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
var request = require('request')
const Quickflats = require('./models/quickflats')

mongoose.connect('mongodb://localhost:27017/quickflats', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error",console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
})

const app = express()

require('dotenv').config()
app.set('view engine', 'ejs')

app.use(cors());
app.options('*', cors());

app.get('/', (req,res) => {
    res.send("Hello from backend")
})
app.get('/listflat', async (req,res) => {
    const flat = new Quickflats({name: 'Tamilore Zaid', location: 'unilag estate'})
    await flat.save()
    res.send(flat)
})

app.get('/newUser', (req, res) => {
    request(
        "http://jsonplaceholder.typicode.com/users/1",
        function(error, response, body) {
            if(!error && response.statusCode === 200) {
                var parsedBody = JSON.parse(body);
                var user = parsedBody['name']
                res.send({user})
            }
        }
    )
})
const PORT = process.env.port || 3001

app.listen(PORT, () => {
    const url = `http://localhost:${PORT}/`
    console.log(`listening on ${url}`)
})