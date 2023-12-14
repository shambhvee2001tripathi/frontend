const express = require('express');
const Model = require('../models/handicraftModel')



const router = express.Router();

router.post('/add',(req,res) => {
    console.log(req.body);

    // res.send('respone from product add');
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);

        res.json(err);
    });
});

router.get('/getall',(req,res) => {
    // res.send('respone from product getall');
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);

        res.json(err);
    });
});

router.get('/getbyid/:id',(req,res) => {
    // res.send('respone from product getbyid');
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);

        res.json(err);
    });
});

router.get('/update',(req,res) => {
    // res.send('respone from product update');
    Model.findByIdAndUpdate(req.params.id, req.body,{new: true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.delete('/delete/:id',(req,res) => {
    // res.send('respone from product delete');
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});



module.exports = router;