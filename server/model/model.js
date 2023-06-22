const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    gender: String,
    price:Number,
    status: String
})
const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;