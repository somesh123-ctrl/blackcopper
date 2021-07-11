const express= require('express');
const router= express.Router();
const Data=require('../models/data');

router.route('/').get((req,res) => {

    Data.find()
    .then(foundData => res.json(foundData))
});

module.exports= router;