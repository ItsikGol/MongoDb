const express = require('express');
const router =  express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');


router.post('/', async (req, res) => {

    const user = new User({
        name: req.body.name,
        userId : req.body.userId,
        age : req.body.age
    });

    try{
        const resultAsync = await user.save()
        res.json(resultAsync);
    }
    catch(err){
        console.log(err);
    }

});

module.exports = router;

// const express = require('express');
// const router1 =  express.Router();
// // const Product = require('../models/Product');

// var db = require("../models");

// router1.get("/products", function(req,res) {
//     db.Product.find({})
//     .then(x => {
//       res.json(x);
//     })
//     .catch(err => {
//       res.json(err);
//     })
//   });


// module.exports = router1;