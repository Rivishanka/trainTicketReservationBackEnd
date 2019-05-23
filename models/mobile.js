const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MobilePay = new Schema({
    mobile_num:{
        type: String,
        default: ''
    },
    pin_no:{
        type: String,
        default: ''
    },
    amount:{
        type: String,
        default: ''
    },
    email:{
        type: String,
        default: ''
    },
    totalAmount:{
        type: String,
        default: ''
    }

});

module.exports = mongoose.model('MobilePay', MobilePay);