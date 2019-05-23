const MobilePay = require('../models/mobile');

module.exports = (app) => {
    app.post('/mobilePay/addMobilePayDetails', (req, res, next) => {
        let mobile_num = req.body.mobile_num;
        let pin_no = req.body.pin_no;
        let amount = req.body.amount;
        let email = req.body.email;
        let totalAmount = req.body.totalAmount;

        if (!mobile_num) {
            return res.send({
                success: false,
                message: 'Error : mobile number type Cannot be Empty !'
            });
        }
        if (!pin_no) {
            return res.send({
                success: false,
                message: 'Error : pin number Cannot be Empty !'
            });
        }
        if (!amount) {
            return res.send({
                success: false,
                message: 'Error : Amount Cannot be Empty !'
            });
        }
        if (!email) {
            return res.send({
                success: false,
                message: 'Error : email Cannot be Empty !'
            });
        }

        if (!totalAmount) {
            return res.send({
                success: false,
                message: 'Error : total amount Cannot be Empty !'
            });
        }


        const new_MobilePay = new MobilePay();
        new_MobilePay.mobile_num = mobile_num;
        new_MobilePay.pin_no = pin_no;
        new_MobilePay.amount = amount;
        new_MobilePay.email = email;
        new_MobilePay.totalAmount = totalAmount;

        new_MobilePay.save((err, mobile) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error : Server Error'
                });
            }
            return res.send({
                success: true,
                message: 'Payment Successfully !',
                mobile: mobile
            })
        })

    });
}
