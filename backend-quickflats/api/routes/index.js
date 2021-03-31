const express = require('express');
const { getSignup, getLogin } = require('../controllers/authentication');
const { createListing } = require('../controllers/listingAuthentication')
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Home')
// })

//User/SignUp/Login
router.post('/signup', getSignup)
router.post('/login', getLogin)

// User/Flat-Listing
router.post('/listing', createListing)

module.exports = router;