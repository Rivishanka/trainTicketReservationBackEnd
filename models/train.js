const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Train = new Schema({
    values:{
        type: String,
        default: ''
    },
    from:{
        type: String,
        default: ''
    },
    to:{
        type: String,
        default: ''
    },
    station_name:{
        type: String,
        default: ''
    },
    date:{
        type: String,
        default: ''
    },
    qty:{
        type: String,
        default: ''
    }

});

module.exports = mongoose.model('Train', Train);