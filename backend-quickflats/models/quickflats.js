const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuickflatsSchema = new Schema({
    name: String,
    email: String,
    number: String,
    location: String,
    rooms: String,
    price: String,
    description: String,
    payment: String,
})

module.exports = mongoose.model('Quickflats', QuickflatsSchema)