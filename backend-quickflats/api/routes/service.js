const mongoose = require('mongooose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');

const Service = mongoose.model('Service', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

router.get('/', async (req, res) => {
    const services = await Service.find().sort('name');
    res.send(services)
})

router.post('/', async (req, res) => {
    const { error } = validateService(req.body)
    if (error) return res.status(404).send(error.details[0].message);

    let service = new Service ({ name: req.body.name })
    service = await service.save()
    res.send(service)
});

router.put('/:id', async (req, res) => {
    const { error } = validateService(req.body)
    if (error) return res.status(404).send(error.details[0].message);

    const service = await Service.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })

    if (!service) return res.status(404).send(`The service with the given ID wasn't found`)

    res.send(service)
})

router.delete('/api/courses/:id', async (req, res) => {
    const service = await Service.findByIdAndRemove(req.params.id);
    if (!service) {
        res.status(404).send(`The service with the given ID wasn't found`)
    }
 
    res.send(service);
})

router.get('/:id', async (req, res) => {
    const service = await Service.findById(req.params.id)

    if (!service) return res.status(404).send(`The service with the given ID wasn't found`)
    res.send(service)
    
});


function validateService(service) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(course);
}

module.exports = router;