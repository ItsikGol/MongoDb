const express = require('express');
const router =  express.Router();
const Post = require('../models/post');
const mongoose = require('mongoose');

router.use('/', (req, res, next) => {
     console.log("middlewhere ...");
    next();
});

//getAll
router.get('/', async (req, res) => {

    try{
        const postFind = await Post.find().populate('userIdId','name');
        res.json(postFind)
    }
    catch(err){
        console.log(err);
    }
});


//find by id
router.get('/:postId', async (req, res) => {

    try{
        console.log(req.params.postId);
        const postFindBgId = await Post.findById(req.params.postId);
        res.json(postFindBgId)
    }
    catch(err){
        console.log(err);
    }
});


//delete
router.delete('/:postId', async (req, res) => {

    try{
        const removebyId = await Post.remove({ _id: req.params.postId});
        res.json(removebyId)
    }
    catch(err){
        console.log(err);
    }
});


//update
router.patch('/:postId', async (req, res) => {

    try{
        const updateById = await Post.updateOne(
            { _id: req.params.postId},
            {$set: {title : req.body.title} }
            );
        res.json(updateById)
    }
    catch(err){
        console.log(err);
    }
});




router.post('/', async (req, res) => {

    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description : req.body.description,
        userIdId: req.body.userIdId
    });

    try{
        const resultAsync = await post.save()
        res.json(resultAsync);
    }
    catch(err){
        console.log(err);
    }

});



module.exports = router;