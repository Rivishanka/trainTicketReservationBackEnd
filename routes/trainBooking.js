const Train = require('../models/train');

module.exports = (app) => {
    app.post('/train/addTrainBooking', (req, res, next) => {
        let values = req.body.values;
        let from = req.body.from;
        let to = req.body.to;
        let station_name = req.body.station_name;
        let date = req.body.date;
        let qty = req.body.qty;

        if (!values) {
            return res.send({
                success: false,
                message: 'Error : train type Cannot be Empty !'
            });
        }
        if (!from) {
            return res.send({
                success: false,
                message: 'Error : From Cannot be Empty !'
            });
        }
        if (!to) {
            return res.send({
                success: false,
                message: 'Error : To Cannot be Empty !'
            });
        }
        if (!station_name) {
            return res.send({
                success: false,
                message: 'Error : Station name Cannot be Empty !'
            });
        }


        if (!date) {
            return res.send({
                success: false,
                message: 'Error : date Cannot be Empty !'
            });
        }
        if (!qty) {
            return res.send({
                success: false,
                message: 'Error : Quantity Cannot be Empty !'
            });
        }


        const newBooking = new Train();
        newBooking.values = values;
        newBooking.from = from;
        newBooking.to = to;
        newBooking.station_name = station_name;
        newBooking.date = date;
        newBooking.qty = qty;

        newBooking.save((err, train) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error : Server Error'
                });
            }
            return res.send({
                success: true,
                message: 'Successfully Booking !',
                train: train
            })
        })

    });
}
