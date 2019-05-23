const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoutes = express.Router();
const trainRoute = express.Router();
const creditRoute = express.Router();
const MobileRoute = express.Router();

const PORT = 4000;
const server = require("repl");

app.use(cors());
app.use(bodyParser.json());
app.use('/users', UserRoutes);
app.use('/train', trainRoute);
app.use('/creditCard',creditRoute);
app.use('/mobilePay',MobileRoute);

mongoose.connect('mongodb://127.0.0.1:27017/trainTicket', {useNewUrlParser: true})
    .then(() => {
        return server.start();
    }).catch(err => {
    console.error(err);
    process.exit(1);
});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB database connection established successfully');
});



require('./routes/SignInSignUp')(app);
require('./routes/trainBooking')(app);
require('./routes/CreditcardPay')(app);
require('./routes/MobilePay')(app);


app.listen(PORT, function () {
    console.log("Server is Running on Port : " + PORT);
});


