
const mongoose = require('mongoose');

const listingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true,
        // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true 
    },
    state: {
        type: String,
        required: true 
    },
    flatDescription: {
        type: String,
        required: true
    }, 
    paymentPlan: {
        type: String,
        required: true
    },
    flatPrice: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    numberRooms: {
        type: String,
        required: true
    }
})

const listingModel= mongoose.model('Listing', listingSchema )
module.exports =  listingModel

