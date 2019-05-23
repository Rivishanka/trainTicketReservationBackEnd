const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    mobileNum: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    idNum: {
        type: String,
        default: ''
    }
});
UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function (password, dbPassword) {
    return bcrypt.compareSync(password, dbPassword);
};
module.exports = mongoose.model('User', UserSchema);
