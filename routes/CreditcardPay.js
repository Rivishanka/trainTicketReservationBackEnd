const CreditCard = require('../models/creditCard');

module.exports = (app) => {
    app.post('/creditCard/addCreditCard', (req, res, next) => {
        let name_card = req.body.name_card;
        let card_no = req.body.card_no;
        let card_cvv = req.body.card_cvv;
        let card_expiry = req.body.card_expiry;
        let amount = req.body.amount;
        let totalAmount = req.body.totalAmount;

        if (!name_card) {
            return res.send({
                success: false,
                message: 'Error : card name Cannot be Empty !'
            });
        }
        if (!card_no) {
            return res.send({
                success: false,
                message: 'Error : card number Cannot be Empty !'
            });
        }
        if (!card_cvv) {
            return res.send({
                success: false,
                message: 'Error : cvv Cannot be Empty !'
            });
        }
        if (!card_expiry) {
            return res.send({
                success: false,
                message: 'Error : expire date Cannot be Empty !'
            });
        }

        if (!amount) {
            return res.send({
                success: false,
                message: 'Error : amount Cannot be Empty !'
            });
        }
        if (!totalAmount) {
            return res.send({
                success: false,
                message: 'Error : totalAmount Cannot be Empty !'
            });
        }


        const new_creditPay = new CreditCard();
        new_creditPay.name_card = name_card;
        new_creditPay.card_no = card_no;
        new_creditPay.card_cvv = card_cvv;
        new_creditPay.card_expiry = card_expiry;
        new_creditPay.amount = amount;
        new_creditPay.totalAmount = totalAmount;

        new_creditPay.save((err, credit) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error : Server Error'
                });
            }
            return res.send({
                success: true,
                message: 'Payment Successfully !',
                credit: credit
            })
        })

    });
}
