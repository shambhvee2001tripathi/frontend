const express = require('express');
const Model = require('../models/userModel')


const router = express.Router();

//we can also use, put, delete, post or another many things on the place of get and that can seen in postman by changing these their
//enter rs if database not connected

router.post('/add', (req, res) => {
    console.log(req.body);
    // res.send('respone from user add');
    //save function is a asynchronus function
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    // res.send('respone from user getall');
    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);

            res.status(500).json(err);
        });
});
// : denotes url parameter
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    // res.send('response from getbyemail');
    //if we put findOne on the place of finf the it will give only one value orr null if theire is no value
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/getbyid/:id', (req, res) => {
    // res.send('respone from user getbyid');

    Model.findById(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);

            res.status(500).json(err);
        });
});
router.put('/update/:id', (req, res) => {

    // res.send('respone from user update');
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    // res.send('respone from user delete');
    Model.findByIdAndDelete(req.params.id, req.body, { new: true })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

//to route login and get data from login
router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)//findOne match single entity
        .then((result) => {
            if (result) res.json(result);
            else res.status(400).json({ message: 'login failed' });
        }).catch((err) => {
            console.log('err');
            res.status(500).json(err);
        });
})


module.exports = router;
