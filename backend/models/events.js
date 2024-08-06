const mongoose =require('mongoose');
const { title } = require('process');
const ToDo =new mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
}
})

module.exports = mongoose.model('ToDo', ToDo)