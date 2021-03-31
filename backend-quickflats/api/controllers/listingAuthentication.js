const mongoose = require('mongoose');

const Listings = require('../models/flatsListing')

const createListing = async (req, res) => {
    const { fullName, email} = req.body;
        const listing = new Listings({
            _id: new mongoose.Types.ObjectId(),
            fullName,
            email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            flatDescription: req.body.flatDescription,
            paymentPlan: req.body.paymentPlan,
            flatPrice: req.body.flatPrice,
            imageUrl: req.body.imageUrl,
            numberRooms: req.body.numberRooms,
        })
        
    try {
        await listing.save()
        res.json({ message: 'listing created'}).status(200)
    } catch (err) {
        res.json({ message: 'something went wrong', err}).status(400)
    }
                    
}

module.exports = {createListing}