const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CreditCard = new Schema({
    name_card:{
        type: String,
        default: ''
    },
    card_no:{
        type: String,
        default: ''
    },
    card_cvv:{
        type: String,
        default: ''
    },
    card_expiry:{
        type: String,
        default: ''
    },
    amount:{
        type: String,
        default: ''
    },
    totalAmount:{
        type: String,
        default: ''
    }

});

module.exports = mongoose.model('CreditCard', CreditCard);